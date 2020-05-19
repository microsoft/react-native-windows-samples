# RSS Reader
This sample demonstrates a React Native application with the following features:

- Runs on Windows and MacOS
- Uses a 3rd party native module ([react-native-webview](https://github.com/react-native-community/react-native-webview))
- Uses a 3rd party JavaScript module ([react-native-rssparser](https://github.com/jameslawler/react-native-rss-parser))

The application is a RSS Reader, which displays news from the official [Windows blog](https://blogs.windows.com).
It uses the latest guidance on React Native development, like:

- [Functional components](https://reactjs.org/docs/components-and-props.html)
- [Hooks to manage the state](https://reactjs.org/docs/hooks-state.html)
- [Hooks to manage the component lifecycle](https://reactjs.org/docs/hooks-effect.html)

### Initialize the sample

1. Clone the repository on your machine
2. From the `rssreader` folder, run the following command to restore all the dependencies:

    ```bash
    yarn install
    ```
### Run the sample on Windows 10

#### Requirements ####
Make sure your computer satisfies all the system requirements listed in the [official documentation](https://microsoft.github.io/react-native-windows/docs/rnw-dependencies).

**Option 1**

1. Open a terminal with administrator rights on the `rssreader` folder
2. Run the following command:

    ```bash
    npx react-native run-windows
    ```
3. The tool will deploy the application on your machine, run it and launch the packager

**Option 2**
1. Open the `windows` folder in File Explorer.
2. Double click on the `rssreader.sln` file to open the solution with Visual Studio 2019.
3. Double check in Configuration Manager that you're compiling the project with a suitable architecture for your computer (x86 or x64).
4. Right click on the `rssreader` project in Solution Explorer and choose **Deploy**.
5. Once the deploy is completed, open a terminal on the `rssreader` folder.
6. Run the following command:

    ```bash
    yarn start
    ```
7. Launch from the Start menu the RSS Reader app.

### Run the sample on MacOS

#### Requirements ####
Make sure your Mac satisfies all the system requirements listed in the [official documentation](https://microsoft.github.io/react-native-windows/docs/rnm-dependencies).

1. Open a terminal on the `rssreader` folder.
2. Move into the `macos` folder:

    ```bash
    cd macos
    ```
3. Type the following command:

   ```bash
    pod install
    ```
4. Once the operation is finished, go back to the `rssreader` folder:

    ```bash
    cd ..
    ```
    
5. Open another tab of terminal by pressing **cmd-T**.
6. In this new tab, run the following command:

   ```bash
    yarn start:macos
    ```
7. Go back to the first tab and run the following command:

   ```bash
    npx react-native run-macos
    ```

### Credits
This sample has been built by the [Windows AppConsult team](https://aka.ms/appconsultblog).

Special thanks to [Weisheng Wu](https://www.linkedin.com/in/weishengwu/) and [Mir Raonaq](https://www.linkedin.com/in/mirraonaq/) for your contribution.


