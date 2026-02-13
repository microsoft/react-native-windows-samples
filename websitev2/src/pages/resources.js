import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Resources() {
  return (
    <Layout title="Resources" description="React Native for Windows resources">
      <div className="container margin-vert--lg">
        <h1>Resources</h1>

        <div className="row margin-bottom--lg">
          <div className="col col--6">
            <div className="card padding--lg margin-bottom--lg">
              <h3>📚 Getting Started</h3>
              <ul>
                <li><Link to="/docs/getting-started">Get started developing a React Native for Windows app</Link></li>
                <li><a href="https://reactnative.dev/docs/tutorial">Learn the basics of React Native</a></li>
                <li><a href="https://reactnative.dev/docs/components-and-apis">React Native Components and APIs</a></li>
                <li><Link to="/docs/parity-status">React Native Windows Components and APIs</Link></li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className="card padding--lg margin-bottom--lg">
              <h3>🔗 Repositories</h3>
              <ul>
                <li><a href="https://github.com/microsoft/react-native-windows">React Native for Windows</a></li>
                <li><a href="https://github.com/microsoft/react-native-macos">React Native for macOS</a></li>
                <li><a href="https://github.com/microsoft/react-native-windows-samples/tree/main/samples">Sample apps</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row margin-bottom--lg">
          <div className="col col--6">
            <div className="card padding--lg margin-bottom--lg">
              <h3>🛠️ Native Development</h3>
              <ul>
                <li><Link to="/docs/native-modules">Native Modules</Link></li>
                <li><Link to="/docs/view-managers">Native UI Components</Link></li>
                <li><Link to="/docs/flyout-component">Windows-Specific APIs</Link></li>
              </ul>
            </div>
          </div>
          <div className="col col--6">
            <div className="card padding--lg margin-bottom--lg">
              <h3>📰 News &amp; Social</h3>
              <ul>
                <li><a href="https://devblogs.microsoft.com/react-native/">React Native Blog</a></li>
                <li><a href="https://twitter.com/ReactNativeMSFT">Twitter @ReactNativeMSFT</a></li>
                <li><a href="https://discord.gg/reactnative">Discord Community</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
