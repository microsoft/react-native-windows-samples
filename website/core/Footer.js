/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  render() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <div>
            <h5>React Native Docs</h5>
            <a href="https://reactnative.dev/docs/getting-started">
              Getting Started
            </a>
            <a href="https://reactnative.dev/docs/tutorial">
              Tutorial
            </a>
            <a href="https://reactnative.dev/docs/components-and-apis">
              Components and APIs
            </a>
            <a href="https://reactnative.dev/docs/more-resources">
              More Resources
            </a>
          </div>
          <div>
            <h5>React Native for Windows + macOS Docs</h5>
              <div style={{color: 'white', fontWeight: 500, fontSize: 16}}>
                <a href={this.props.config.baseUrl + "docs/getting-started"}>Get Started with Windows</a>
              </div>
            <div style={{color: 'white', fontWeight: 500, fontSize: 16}}>
              <a href={this.props.config.baseUrl + "docs/rnm-getting-started"}> Get Started with macOS</a>
            </div>
            <a href={this.props.config.baseUrl + "docs/parity-status"}>
              React Native Windows Components and APIs
            </a>
            <a href={this.props.config.baseUrl + "docs/native-modules"}>
              Native Modules
            </a>
            <a href={this.props.config.baseUrl + "docs/view-managers"}>
              Native UI Components
            </a>
          </div>
          <div>
            <h5>Connect With Us On</h5>
            <a href={this.props.config.baseUrl + "blog/"}>Blog</a>
            <a href="https://twitter.com/ReactNativeMSFT" target="_blank">
              Twitter
            </a>
            <a
              href="https://github.com/microsoft/react-native-windows"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://github.com/microsoft/react-native-windows-samples/tree/main/samples"
              target="_blank"
            >
              Samples
            </a>
          </div>
        </section>
      </footer>
    );
  }
}

module.exports = Footer;
