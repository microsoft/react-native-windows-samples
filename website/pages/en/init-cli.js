const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

class InitCli extends React.Component {
  render() {
    const Section = ({ children, className, background = "light" }) => (
      <section className={`Section ${className} ${background}`}>
        {children}
      </section>
    );

    return (
      <div className="homepage">
        <Section background="light">
          <div className="content">
            <h1 style={{ fontSize: '60px', marginTop: '-20px', fontWeight: 'bold' }}>
              React Native Windows Init CLI
            </h1>
            <p>
              This guide will give you more information on the React Native Windows
              CLI.
            </p>
            <h2><code>react-native-windows-init</code></h2>
            <p>
              <code>react-native-windows-init</code> is a CLI used to bootstrap the addition of
              the Windows platform to <code>react-native</code> projects.
            </p>
            <h3>Usage</h3>
            <p>
              Run <code>npx react-native-windows-init --overwrite</code> from an existing <code>react-native</code> project, to install
              <code>react-native-windows</code> and generate initial project files for Windows.
            </p>
            <h3>Options</h3>
            <MarkdownBlock>Here are the options that `react-native-windows-init` takes:</MarkdownBlock>
            <table>
              <tr>
                <th>Option</th>
                <th>Input Type</th>
                <th>Description</th>
              </tr>
              <tr>
                <td><code>--help</code></td>
                <td>boolean [default: false]</td>
                <td>Show help.</td>
              </tr>
              <tr>
                <td><code>--version</code></td>
                <td>string</td>
                <td>The version of react-native-windows to use.</td>
              </tr>
              <tr>
                <td><code>--namespace</code></td>
                <td>string</td>
                <td>The native project namespace. This should be expressed using dots as separators. i.e. 'Level1.Level2.Level3'. The generator will apply the correct syntax for the target language.</td>
              </tr>
              <tr>
                <td><code>--verbose</code></td>
                <td>boolean [default: false]</td>
                <td>Enables logging. </td>
              </tr>
              <tr>
                <td><code>--language</code></td>
                <td>string ["cs","cpp"] [default: "cpp"]</td>
                <td>The language the project is written in.</td>
              </tr>
              <tr>
                <td><code>--projectType</code></td>
                <td>string ["app","lib"] [default: "app"] </td>
                <td>The type of project to initialize (supported on 0.64+).</td>
              </tr>
              <tr>
                <td><code>--overwrite</code></td>
                <td>boolean [default: false]</td>
                <td>Overwrite any existing files without prompting.</td>
              </tr>
              <tr>
                <td><code>--useWinUI3</code></td>
                <td>boolean [default: false]</td>
                <td>[Experimental] Targets WinUI 3.0 (Preview) instead of UWP XAML.</td>
              </tr>
              <tr>
                <td><code>--useHermes</code></td>
                <td>boolean [default: false]</td>
                <td>[Experimental] Use Hermes instead of Chakra as the JS engine (supported on 0.64+ for C++ projects).</td>
              </tr>
              <tr>
                <td><code>--experimentalNuGetDependency</code></td>
                <td>boolean [default: false]</td>
                <td>[Experimental] change to start consuming a NuGet containing a pre-built dll version of Microsoft.ReactNative.</td>
              </tr>
              <tr>
                <td><code>--telemetry</code></td>
                <td>boolean [default: false]</td>
                <td>Controls sending telemetry that allows analysis of usage and failures of the react-native-windows CLI.</td>
              </tr>
            </table>
            <p>
              This sends telemetry to Microsoft by default. You can prevent the
              telemetry from being sent by using the <code>--no-telemetry</code> command line
              option. See below for more details.
            </p>
            <h3>Data Collection</h3>
            <p>
              The software may collect information about you and your use of the software and send 
              it to Microsoft. Microsoft may use this information to provide services and improve 
              our products and services. You may turn off the telemetry as described in the repository. 
              There are also some features in the software that may enable you and Microsoft to collect 
              data from users of your applications. If you use these features, you must comply with 
              applicable law, including providing appropriate notices to users of your applications 
              together with a copy of Microsoft's privacy statement. Our privacy statement is located
              at <a href="https://go.microsoft.com/fwlink/?LinkID=824704">https://go.microsoft.com/fwlink/?LinkID=824704</a>.
              You can learn more about data collection and use in the help documentation and our privacy
              statement. Your use of the software operates as your consent to these practices.
            </p>
            <p>
              This data collection notice only applies to the process of <b>creating</b> a new React Native
              for Windows app with the CLI.
            </p>
          </div>
        </Section>
      </div>
    );
  }
}

InitCli.title = "React Native Windows Init CLI";

module.exports = InitCli;
