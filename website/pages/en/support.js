const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

class Support extends React.Component {
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
              Support Policy
            </h1>
            <p>
              The React Native for Windows (RNW) Team commits to providing full support for the latest
              stable version of RNW, with progressively reduced support for older released versions.
            </p>

            <h2 name="support-matrix">Support Matrix</h2>
            <table className="supportMatrix">
              <tr>
                <th>Version</th>
                <th>Support Phase</th>
                <th>Release Date</th>
                <th>Active Support Start</th>
                <th>Maintenance Support Start</th>
                <th>End of Support</th>
              </tr>
              <tr>
                <th><a href="https://www.npmjs.com/package/react-native-windows/v/canary">main</a></th>
                <td><a href="#canary-support">Canary</a></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th><a href="https://www.npmjs.com/package/react-native-windows/v/preview">0.69</a></th>
                <td><a href="#preview-support">Preview</a></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <th><a href="https://www.npmjs.com/package/react-native-windows/v/latest">0.68</a></th>
                <td><a href="#active-support">Active</a></td>
                <td>04/04/2022</td>
                <td>04/04/2022</td>
                <td><i>TBD</i></td>
                <td><i>TBD</i></td>
              </tr>
              <tr>
                <th><a href="https://www.npmjs.com/package/react-native-windows/v/v0.67-stable">0.67</a></th>
                <td><a href="#maintenance-support">Maintenance</a></td>
                <td>01/24/2022</td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td>09/30/2022<a href="#2">²</a></td>
              </tr>
              <tr>
                <th><a href="https://www.npmjs.com/package/react-native-windows/v/v0.66-stable">0.66</a></th>
                <td><a href="#maintenance-support">Maintenance</a></td>
                <td>10/11/2021</td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td>08/31/2022<a href="#2">²</a></td>
              </tr>
              <tr>
                <th><a href="https://www.npmjs.com/package/react-native-windows/v/v0.65-stable">0.65</a></th>
                <td><a href="#maintenance-support">Maintenance</a></td>
                <td>08/23/2021</td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td>07/31/2022<a href="#2">²</a></td>
              </tr>
              <tr>
                <th><a href="https://www.npmjs.com/package/react-native-windows/v/v0.64-stable">0.64</a></th>
                <td><a href="#maintenance-support">Maintenance</a></td>
                <td>03/15/2021</td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td>06/30/2022<a href="#2">²</a></td>
              </tr>
              <tr>
                <th><a href="https://www.npmjs.com/package/react-native-windows/v/v0.63-stable">0.63</a></th>
                <td><a href="#unsupported">Unsupported</a></td>
                <td>01/24/2022</td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td><i>N/A<a href="#1">¹</a></i></td>
                <td>10/11/2021</td>
              </tr>
            </table>
            <p className="footnote">
              <b>Note:</b> All prior releases not listed are <a href="#unsupported">Unsupported</a>.
            </p>
            <p className="footnote">
              <a name="1">¹</a>: These releases were made prior to the institution of this official support policy document.
            </p>
            <p className="footnote">
              <a name="2">²</a>: These releases were already receiving <a href="#maintenance-support">Maintenance</a> equivalent
              support, and the new "End of Support" dates were set to give users some transition time before they become officially <a href="#unsupported">Unsupported</a>.
            </p>

            <h2 name="summary">Summary</h2>
            <p>
              RNW stable versions are referred to by their major and minor version number, i.e. <b>0.64</b>, mapping to the same
              React Native stable version, and are sourced from an equivalently named <code>*-stable</code> branch in the RNW repo,
              i.e. <a href="https://github.com/Microsoft/react-native-windows/tree/0.64-stable">0.64-stable</a>.
            </p>
            <p>
              A new stable version's life begins when that stable branch is created and a package published to NPM under
              the <a href="https://www.npmjs.com/package/react-native-windows/v/preview">preview tag</a>. That version is
              said to be <i>in preview</i> and has entered <a href="#preview-support">Preview Support</a>. After the preview
              period ends, the stable version becomes the new "latest" release and its package is published to NPM under
              the <a href="https://www.npmjs.com/package/react-native-windows/v/latest">latest tag</a>. That version has now
              entered <a href="#active-support">Active Support</a>.
            </p>
            <p>
              At this point, the previous latest stable version is now considered a "legacy" version. Such legacy versions will
              receive progressively reduced support over time, specifically:
            </p>
            <ol>
              <li>One final month of <a href="#active-support">Active Support</a>, followed by</li>
              <li>Two months of <a href="#maintenance-support">Maintenance Support</a></li>
            </ol>
            <p>
              After which, the legacy version will become <a href="#unsupported">Unsupported</a>.
            </p>
            <p>
              See below for further details on each support phase. For further details on
              the release process, see <a href="https://github.com/microsoft/react-native-windows/wiki/Versioning-and-Release-Process">RNW Versioning and Release Process</a>.
            </p>

            <h2 name="support-phases">Support Phases</h2>
            
            <h3 name="active-support">Active Support</h3>
            <p>
              A stable version of RNW enters <i>Active Support</i> status as soon as the first official, non-preview, package
              of that stable version is published to NPM. This support continues with each patch release within that stable version.
            </p>
            <p>
              It is expected that the stable release branch is "stable" and will not take breaking API or template changes (relative
              to the first official release in that branch).
            </p>
            <p>
              The RNW Team commits to providing support for fixing issues that do not require breaking changes, including but not limited to:
            </p>
            <ul>
              <li>Security and/or legal issues</li>
              <li>Build and/or tooling issues</li>
              <li>Critical functional issues</li>
              <li>Non-critical functional issues</li>
            </ul>
            <p>
              <i>Active Support</i> for a stable version ends one month after the release of the next stable version, at which point the
              previous stable version enters <a href="#maintenance-support">Maintenance Support</a>.
            </p>
            <p>
              Customers are encouraged to use versions receiving <i>Active Support</i> as much as possible.
            </p>

            <h3 name="maintenance-support">Maintenance Support</h3>
            <p>
              A stable version of RNW enters <i>Maintenance Support</i> status one month after the next stable version is released. This
              support continues with each patch release within that stable version.
            </p>
            <p>
              It is expected that the stable release branch is "stable" and will not take breaking API or template changes (relative
              to the first official patch release in the branch).
            </p>
            <p>
              The RNW Team commits to providing support for fixing issues that do not require breaking changes, including but not limited to:
            </p>
            <ul>
              <li>Security and/or legal issues</li>
              <li>Build and/or tooling issues</li>
            </ul>
            <p>
              <i>Maintenance Support</i> for a stable version lasts for two months after it leaves <a href="#active-support">Active Support</a>,
              after which the stable version will be considered <a href="#unsupported">Unsupported</a>.
            </p>
            <p>
              Customers are encouraged to upgrade away from versions receiving <i>Maintenance Support</i> as soon as possible.
            </p>

            <h3 name="canary-support">Canary Support</h3>
            <p>
              Canary builds/releases are in active development and are not meant for general consumption.
            </p>
            <p>
              It is expected that the main release branch is "unstable" and can take breaking changes.
            </p>
            <p>
              The RNW Team does not commit to any support for these releases.
            </p>
            <p>
              Customers should not use canary versions.
            </p>

            <h3 name="preview-support">Preview Support</h3>
            <p>
              A stable version of RNW enters <i>Preview Support</i> as soon as the first preview package is published on NPM. This support continues
              with each patch preview release within that stable version.
            </p>
            <p>
              It is expected that the stable release branch in preview is "stabilizing," and it is the last chance to make large and/or breaking changes
              to that branch.
            </p>
            <p>
              The RNW Team commits to providing the same support as in <a href="#active-support">Active Support</a>, but breaking API and/or
              template changes may be allowed.
            </p>
            <p>
              <i>Preview Support</i> for a stable version ends as soon as the first official, non-preview, package of the stable version is published
              to NPM, at which point it enters <a href="#active-support">Active Support</a>.
            </p>

            <h3 name="unsupported">Unsupported</h3>
            <p>
              An <i>Unsupported</i> stable version of RNW should not expect any further updates, changes, or fixes.
            </p>
            <p>
              The RNW Team does not commit to any support for these releases.
            </p>
            <p>
              Customers are encouraged to upgrade away from <i>Unsupported</i> versions as soon as possible.
            </p>
          </div>
        </Section>
      </div>
    );
  }
}

Support.title = "Support Policy";

module.exports = Support;
