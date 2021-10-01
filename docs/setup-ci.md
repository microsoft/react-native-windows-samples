---
id: setup-ci
title: Setup Continuous Integration Pipeline for an RNW App
---

This guide will help you get started on setting up your very first continuous integration pipeline for a React Native for Windows app.

## Setting Up a Continuous Integration Pipeline using Github Actions

When done developing your app, it's good practice to setup a CI pipeline with automated build and tests to avoid any future regressions. There are many services available for setting up a CI pipeline. We'll use [GitHub Actions](https://docs.github.com/en/actions/getting-started-with-github-actions/about-github-actions) as an example here since it doesn't require any extra account setup if you are already hosting your code on GitHub, also the default VM image has all the tools we needed pre-installed.

The VM images supported by GitHub Actions CI/CD can be found [here](https://github.com/actions/virtual-environments#github-actions-virtual-environments), check the pre-installed tools and compare them with [React Native Windows development dependencies](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies), find the image that meets the requirements.

Next you need to create a YAML file for GitHub Actions, the basic steps are:
- Checkout code and setup the environment
```yaml
    - uses: actions/checkout@v2
      name: Checkout Code

    - name: Setup Node.js
      uses: actions/setup-node@v1
      with:
        node-version: '14'

    - name: Setup MSBuild
      uses: microsoft/setup-msbuild@v1.0.2
      with:
        vs-version: 16.8

    - name: Install node modules
      run: yarn --frozen-lockfile

    - name: yarn build
      run:  yarn build
```
- Build and run the project
```yaml
    - name: Run Windows x64 release
      run: npx react-native run-windows --arch x64 --release --no-packager --logging --deploy-from-layout
```
- Run tests
```yaml
    - name: Start Appium server
      shell: powershell
      run: Start-Process PowerShell -ArgumentList "yarn appium"

    - name: Run tests
      run: yarn test:windows
```
Check out the full [`react-native-webview` example](https://github.com/react-native-webview/react-native-webview/blob/master/.github/workflows/windows-ci.yml) as well as their [official example](https://github.blog/2019-08-08-github-actions-now-supports-ci-cd/) for more info.

Add the YAML file to `.github\workflows\` and then commit. To know more about the YAML syntax, check out [Workflow syntax for GitHub Actions](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions).

> GitHub Actions should be enabled by default, if it's not enabled for some reason you can go to Settings->Actions tab of the repo to enable it (requires owner access).

Now push your changes and the CI pipeline should be up and running.

## Setting Up Pipeline for Signed Package Builds
Certificates are used to sign RNW apps so that they can be installed locally or published to the Microsoft Store. This data should not be publically published, so we need to do extra steps if we wish to build/run signed RNW app packages through Github Actions.

### Storing Certificates Securely
There are a couple of options for where you can securing store your certificate information. Three options we have worked with are Github Secrets, Azure DevOps Secure Files, and Azure Key Vault. Github Secrets works well, when you are using Github Actions to run your pipeline. The latter two work well, if you are using Azure DevOps to run your pipeline. 

Here is documentation on how to set up a Github Secret: [Github Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)
Here is documentation on how to set up an Azure Secure File: [Azure Secure Files](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/secure-files?view=azure-devops)
Here is documentation on how to set up an Azure Key Vault Secret: [Azure Key Vault Secrets](https://docs.microsoft.com/en-us/azure/key-vault/secrets/about-secrets)

For Azure Secure Files, you will upload the .pfx itself. The remaining two methods expect data in the form of a string. Thus, you must Base64 encode your .pfx and upload the resulting string as your secret by running 
```
$fileContentBytes = get-content '<Path-to-Pfx>' -Encoding Byte
[System.Convert]::ToBase64String($fileContentBytes) | Out-File ‘pfx-encoded-bytes.txt’
```
in Powershell. Then upload the contents of pfx-encoded-bytes as your secret.

### Accessing Certificate Data from Pipeline
Here is documentation on how to use a Github Secret: [Github Secrets](https://docs.github.com/en/actions/reference/encrypted-secrets)
Here is documentation on how to use a an Azure Secure File: [Azure Secure Files](https://docs.microsoft.com/en-us/azure/devops/pipelines/library/secure-files?view=azure-devops)
Here is documentation for using Azure Key Vault Secrets in a Pipeline: [Using Azure Key Vault Secrets](https://docs.microsoft.com/en-us/azure/devops/pipelines/release/azure-key-vault?view=azure-devops#:~:text=Search%20for%20vault%20and%20select%20the%20Azure%20Key,and%20retrieve%20secrets%20to%20use%20as%20pipeline%20variables.)

See the [Xaml-Islands-Samples](https://github.com/microsoft/Xaml-Islands-Samples/blob/master/.github/workflows/CPP-CI.yml) repository for an example of a pipeline which uses Github Secrets.
See the [react-native-gallery](https://github.com/microsoft/react-native-gallery/blob/main/ci.yml) repository for an example of a pipeline which uses Azure DevOps Secure Files.
See the react-native-windows repository for an example of a pipeline which uses Azure Key Vault:
[Setup of Pfx](https://github.com/microsoft/react-native-windows/blob/main/.ado/templates/setup-certificate.yml)
[Removal of Pfx](https://github.com/microsoft/react-native-windows/blob/main/.ado/templates/cleanup-certificate.yml)
[Signed RNW App Build](https://github.com/microsoft/react-native-windows/blob/main/.ado/templates/run-windows-with-certificates.yml)

For Azure Secure Files, retrieving the secret will download the .pfx itself. The remaining two methods will give you the encoded string. Thus, you'll have to decode the secret, and save it to a .pfx file before it can be used to sign.  See the Xaml-Islands-Samples repository or the react-native-windows repository for the powershell commands to decode and generate .pfx files within a pipeline.
	
Make sure to delete your .pfx from the pipeline once you've finished using it.

## FAQ's
### I'm ready to do a signed app build. How do I tell msbuild to use my certificate?
You can tell msbuild what .pfx you want to use to sign your app using the `PackageCertificateKeyFile` msbuild property. This property expects the file path to the .pfx you want to use. See [here](https://github.com/microsoft/react-native-windows/blob/353321ee40391f6f302e7cc80f96285e12780cbe/.ado/jobs/playground.yml#L114) for an example of this using VSBuild. See [here](https://github.com/microsoft/react-native-windows/blob/353321ee40391f6f302e7cc80f96285e12780cbe/.ado/templates/run-windows-with-certificates.yml#L48) for an example of this using the RNW CLI.

### I have a pipeline that runs on forks of my repository (i.e. when a PR is being made). Can I access my certificate data from this pipeline?
No. When data is securely stored through Github Secrets, Azure DevOps Secure Files, or Azure Key Vault, it can only be run from pipelines that are executing on branches of the original repository. The data cannot be accessed from pipelines running code from repository forks. Why? Because if the data was able to be accessed, someone could manipulate the pipeline source code within their fork to retrieve the data, leaving it unsecured.

### I want to build an installable copy of my app from a pipeline that doesn't have access to my certificate data. What can I do?
This case may apply to you if you want to do some E2E testing within a PR pipeline to make sure incoming changes don't break main. You do have a couple of options here to make do without a certificate.

If you are simply trying to build - but not deploy - your app, you can successfully build non-signed RNW apps by setting the msbuild argument `AppxPackageSigningEnabled` to false. See [here](https://github.com/microsoft/react-native-windows/blob/353321ee40391f6f302e7cc80f96285e12780cbe/.ado/jobs/playground.yml#L95) for an example of this using VSBuild. See [here](https://github.com/microsoft/react-native-windows/blob/353321ee40391f6f302e7cc80f96285e12780cbe/.ado/templates/run-windows-with-certificates.yml#L34) for an example of this using the RNW CLI.

If you are trying to build and deploy your app for E2E testing, you can successfully do this with a non-signed RNW app by using the `--deploy-from-layout` option from the RNW CLI along with setting the msbuild argument `AppxPackageSigningEnabled` to false.

