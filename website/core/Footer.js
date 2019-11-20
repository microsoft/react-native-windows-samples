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
            <a href="http://facebook.github.io/react-native/docs/getting-started.html">
              Getting Started
            </a>
            <a href="http://facebook.github.io/react-native/docs/tutorial.html">
              Tutorial
            </a>
            <a href="http://facebook.github.io/react-native/docs/components-and-apis.html">
              Components and APIs
            </a>
            <a href="http://facebook.github.io/react-native/docs/more-resources.html">
              More Resources
            </a>
          </div>
          <div>
            <h5>React Native for Windows Docs</h5>
            <a href={this.props.config.baseUrl + "docs/getting-started"}>
              Getting Started
            </a>
            <a href={this.props.config.baseUrl + "docs/parity-status"}>
              API parity with React Native
            </a>
            <a href={this.props.config.baseUrl + "docs/native-modules"}>
              Native Modules
            </a>
            <a href={this.props.config.baseUrl + "docs/view-managers"}>
              Native UI Components
            </a>
            <a href={this.props.config.baseUrl + "docs/windowsbrush-and-theme"}>
              Windows Brushes and Themes
            </a>
          </div>
          <div>
            <h5>More Resources</h5>
            <a href={this.props.config.baseUrl + "blog/"}>Blog</a>
            <a href="https://twitter.com/reactwindows" target="_blank">
              Twitter
            </a>
            <a
              href="https://github.com/microsoft/react-native-windows"
              target="_blank"
            >
              GitHub
            </a>
            <a
              href="https://github.com/microsoft/react-native-windows-samples/tree/master/samples"
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
