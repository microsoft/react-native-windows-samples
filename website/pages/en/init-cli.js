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
      <Section background="light">
        <div style={{marginLeft: 20}}>
        <h1 style={{ fontSize: 50, fontWeight: 700, marginTop: -35 }}>
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
        <MarkdownBlock>Here are the options that `react-native-windows-init` takes: 
          </MarkdownBlock>
        <table>
            <tr>
                <th>Option</th>
                <th>Input Type</th>
                <th>Description</th>
            </tr>
            <tr>
                <td><code>--help</code></td>
                <td>boolean</td>
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
                <td>The native project namespace.</td>
            </tr>
            <tr>
                <td><code>--verbose</code></td>
                <td>boolean</td>
                <td>Enables logging. </td>
            </tr>
            <tr>
                <td><code>--language</code></td>
                <td>string ["cs","cpp"] [default: "cpp"]</td>
                <td>Which language the app is written in.</td>
            </tr>
            <tr>
                <td><code>--projectType</code></td>
                <td>string ["app","lib"] [default: "app"] </td>
                <td>The type of project to initialize.</td>
            </tr>
            <tr>
                <td><code>--overwrite</code></td>
                <td>boolean</td>
                <td>Overwrite any existing files without prompting.</td>
            </tr>
            <tr>
                <td><code>--useWinUI3</code></td>
                <td>boolean</td>
                <td>Targets WinUI 3.0 (Preview) instead of UWP XAML.</td>
            </tr>
            <tr>
                <td><code>--useHermes</code></td>
                <td>boolean</td>
                <td>Use Hermes instead of Chakra as the JS engine (supported on 0.64+ for C++ projects)</td>
            </tr>
            <tr>
                <td><code>--no-telemetry</code></td>
                <td>boolean</td>
                <td>Disables sending telemetry that allows analysis of usage and failures of the react-native-windows CLI</td>
            </tr>
        </table>
        <p>
          This sends telemetry to Microsoft by default. You can prevent the
          telemetry from being sent by using the <code>--no-telemetry</code> command line
          option. See the <code>react-native-windows-init</code> README for more details.
        </p>
        </div>
      </Section>
    );
  }
}
module.exports = InitCli;
