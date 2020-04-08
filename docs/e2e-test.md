---
id: e2e-test
title: Author and Run E2E Test for React Native Windows
---

## E2E project structure

E2E test app, test library and test cases are in packages/E2ETest/, and they are organized as below.

- app – the RN app folder

- reports – save the test reports

- wdio – includes the page object libraries and test cases.

- windows – the UWP native app

- wdio.config.js – default parameters used by wdio test runner

# Run E2E test

Make sure you have installed all of the [development dependencies](rnw-dependencies.md).

## Procedures to setup and run E2E test

1. Install React Native command line interface using NPM:

```
npm install -g react-native-cli
```

2. Download and install WinAppDriver [WinAppDriver v1.1](https://github.com/microsoft/WinAppDriver/releases/download/v1.1/WindowsApplicationDriver.msi)

3. Install node packages, build JS

- C:\repo>`cd react-native-windows`
- C:\repo\react-native-windows>`yarn install`
- C:\repo\react-native-windows>`yarn build`

4. Run the bundle server

- C:\repo\react-native-windows>`cd packages\E2ETest`
- C:\repo\react-native-windows\packages\E2ETest>`yarn run start`
- wait until you see 'Loading dependency graph, done.'

5. Ensure debugger is running

Open Chrome and navigate to `http://localhost:8081/debugger-ui/` in a new tab. Press `F12` or `Ctrl+Shift+I` in Chrome to open its Developer Tools.

6. Open a new command prompt, build native app, deploy and launch e2e testing

- C:\repo\react-native-windows>`cd packages\E2ETest`
- C:\repo\react-native-windows\packages\E2ETest>`yarn run e2e`

## Procedures to only run E2E test

Make sure bundle server is running(see above 'Run the bundle server' step) and chrome windows is open (see above 'Ensure debugger is running' step)

- run all specs

packages\E2ETest>`yarn run e2etest`

- Run one spec

packages\E2ETest>`yarn run testspec wdio\test\login.spec.ts`

## Commands help with build and test

| Command                  | Description                                                                                                                                                                         | Example                                                                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| test                     | Run all specs                                                                                                                                                                       | `yarn run e2etest`                                                                                                                                |
| testspec                 | Run only one spec                                                                                                                                                                   | `yarn run testspec wdio\test\login.spec.ts`                                                                                                    |
| buildapp                 | build the native app with BUNDLE macro <BR/> `--release` specify if it's a release version <BR/>`--arch [string]` The build architecture (ARM, x86, x64) (default: &quot;x86&quot;) | `yarn run buildapp` <BR/> `yarn run buildapp --release` <BR/>`yarn run buildapp --arch x64` <BR/> `yarn run buildapp --arch x64 –release`      |
| deployapp                | Deploy the built test app, you can pair it with `--release` and `--arch`                                                                                                            | `yarn run deployapp` <BR/> `yarn run deployapp --release` <BR/> `yarn run deployapp --arch x64` <BR/> `yarn run deployapp --arch x64 –release` |
| e2e                      | Build and deploy the solution (x86, debug), launch metro bundler and run all e2e specs                                                                                              | `yarn run e2e`                                                                                                                                 |
| start                    | Launch the metro bundler                                                                                                                                                            | `yarn run start`                                                                                                                               |
| react-native run-windows | For details, see: react-native run-windows --help                                                                                                                                   | `react-native run-windows --no-launch --no-packager --no-deploy --bundle`                                                                      |

# Authoring E2E Test

## Create a new page for the test app

New test page should be in E2E/app/ or its subfolder.

Hooks are recommended to author the test page. (see [https://reactjs.org/docs/hooks-intro.html](https://reactjs.org/docs/hooks-intro.html) to learn more about Hooks)

```
// LoginTestPage.ts
export function LoginTestPage() {
  const [loginState, setLoginState] = useState('');
  …
  return (
    <View>
      <TextInput style={styles.input}
        placeholder='Email or Mobile Num'
        placeholderTextColor='rgba(225,225,225,0.7)'
        testID={USERNAME_ON_LOGIN}
        onChange={(text) => { setUserName(text.nativeEvent.text) }} />
   	…
 </View >);
}

```

## Add the new page to TestPages.ts

```
// TestPages.ts
const TestPages: ITestPage[] = [
…
  {
    testId: LOGIN_TESTPAGE,
    description: 'Login Test Page',
    content: LoginTestPage,
  },

```

## Put new testIDs in Consts.ts

```
//Consts.ts
export const USERNAME_ON_LOGIN = 'UserName';
```

## Create a Page Object to match with the page in test app

Page Objects should be put in E2ETest/wdio/pages and its subfolder.

```
// LoginPage.ts
class LoginPage extends BasePage {
  isPageLoaded() {
    return super.isPageLoaded() && this._userName.isDisplayed();
  }

  setLoginInfo(userName: string, password: string) {
    this._userName.setValue(userName);
    this._password.setValue(password);
  }

  submitForm() {
    this._submit.click();
  }

  private get _userName() {
    return By(USERNAME_ON_LOGIN);
  }

  private get _password() {
    return By(PASSWORD_ON_LOGIN);
  }

  private get _submit() {
    return By(SUBMIT_ON_LOGIN);
  }
}
export default new LoginPage();
```

Locator is defined in a `get` function and just returns By(testID), then you can use all element function like &#39;click&#39; which is defined in WebDriverIO.

Pay attention to the last line of the LoginPage, we always export a new instance of this object. It makes the test case more readable.

## Write a test spec to use the Page Object

```
// login.spec.ts
before(() => {
  HomePage.backToHomePage();
  HomePage.clickAndGotoLoginPage();
});

describe('LoginTest', () => {
  it('Login Success', () => {
    LoginPage.setLoginInfo('username', 'password');
    LoginPage.submitForm();
    assert.equal(LoginPage.getLoginResult(), 'Success');
  });
```

# More

To understand more about the E2E testing, please refer to [More about E2E test](e2e-test-more-about.md)

# Restrictions

1. If you made any change to native code, you must rebuild the native app and redeploy it.
2. The same session can&#39;t be shared by multiple specs. The framework always kills the old app and launches a new session.

# Known issue

1. For `yarn run e2e` or `yarn run e2ebundle`, the test continues even if one of steps like build failed. see [bug 3136](https://github.com/microsoft/react-native-windows/issues/3136) for more details
