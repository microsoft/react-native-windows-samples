const React = require("react");

const CompLibrary = require("../../core/CompLibrary.js");

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */

const SupportPolicyMD = `
# Support Policy

The React Native for Windows (RNW) Team strives to provide full support for the latest stable version of RNW, with progressively reduced support for older released versions.

## Support Matrix

| Version | Support Phase | Release Date | Active Support Start | Maintenance Support Start | End of Support |
| -- | -- | -- | -- | -- | -- |
| [main](https://www.npmjs.com/package/react-native-windows/v/canary) | [Canary](#canary-support) | *N/A* | *N/A* | *N/A* | *N/A* |
| [0.69](https://www.npmjs.com/package/react-native-windows/v/latest) | [Active](#active-support) | 06/27/2022 | 06/27/2022 | *TBD* | *TBD* |
| [0.68](https://www.npmjs.com/package/react-native-windows/v/v0.68-stable) | [Active](#active-support) | 04/04/2022 | 04/04/2022 | 07/27/2022 | 09/27/2022 |
| [0.67](https://www.npmjs.com/package/react-native-windows/v/v0.67-stable) | [Maintenance](#maintenance-support) | 01/24/2022 | *N/A*[¹](#support-matrix-1)</a> | *N/A*[¹](#support-matrix-1)  | 09/30/2022[²](#support-matrix-2) |
| [0.66](https://www.npmjs.com/package/react-native-windows/v/v0.66-stable) | [Maintenance](#maintenance-support) | 10/11/2021 | *N/A*[¹](#support-matrix-1) | *N/A*[¹](#support-matrix-1) | 08/31/2022[²](#support-matrix-2) |
| [0.65](https://www.npmjs.com/package/react-native-windows/v/v0.65-stable) | [Maintenance](#maintenance-support) | 08/23/2021 | *N/A*[¹](#support-matrix-1) | *N/A*[¹](#support-matrix-1) | 07/31/2022[²](#support-matrix-2) |
| [0.64](https://www.npmjs.com/package/react-native-windows/v/v0.64-stable) | [Unsupported](#unsupported) | 03/15/2021 | *N/A*[¹](#support-matrix-1)| *N/A*[¹](#support-matrix-1) | 06/30/2022[²](#support-matrix-2) |
| [0.63](https://www.npmjs.com/package/react-native-windows/v/v0.63-stable) | [Unsupported](#unsupported) | 08/31/2020 | *N/A*[¹](#support-matrix-1) | *N/A*[¹](#support-matrix-1) | 10/11/2021 |

<div class="footnote">

**Note:** All prior releases not listed are [Unsupported](#unsupported).

<a id="support-matrix-1"></a>
¹: These releases were made prior to the institution of this official support policy document.

<a id="support-matrix-2"></a>
²: These releases were receiving [Maintenance](#maintenance-support) equivalent support at the institution of this document. The "End of Support" dates were set to give users some transition time before the releases transition to [Unsupported](#unsupported).

</div>

## Summary

RNW stable versions are referred to by their major and minor version number, e.g. **0.64**, mapping to the same React Native stable version, and are sourced from an equivalently named \`*-stable\` branch in the RNW repo, e.g. [0.64-stable](https://github.com/Microsoft/react-native-windows/tree/0.64-stable).

A new stable version's life begins when that stable branch is created and a package published to NPM under the [preview tag](https://www.npmjs.com/package/react-native-windows/v/preview). That version is said to be *in preview* and has entered [Preview Support](#preview-support). After the preview period ends, the stable version becomes the new "latest" release and its package is published to NPM under the [latest tag](https://www.npmjs.com/package/react-native-windows/v/latest). That version has now entered [Active Support](#active-support).

At this point, the previous latest stable version is now considered a "legacy" version. Such legacy versions will receive progressively reduced support over time, specifically:

1. One final month of [Active Support](#active-support), followed by
2. Two months of [Maintenance Support](#maintenance-support)

After which, the legacy version will become [Unsupported](#unsupported).

See below for further details on each support phase. For further details on the release process, see [RNW Versioning and Release Process](https://github.com/microsoft/react-native-windows/wiki/Versioning-and-Release-Process).

## Support Phases

### Active Support

A stable version of RNW enters *Active Support* status as soon as the first official, non-preview, package of that stable version is published to NPM. This support continues with each patch release within that stable version.

It is expected that the stable release branch is "stable" and will not take breaking API or project template changes (relative to the first official release in that branch).

While in *Active Support*, the RNW Team strives to provide support for this stable version by taking fixes[¹](#active-support-1) which resolve:

- Security and/or legal issues, e.g.:
    - RNW, or one of its dependencies, has a known vulnerability
    - RNW is consuming a dependency with an incompatible license
- Build and/or tooling issues[²](#active-support-2), e.g.:
    - RNW itself does not build
    - A RNW app does not build with the \`npx react-native run-windows\` CLI command
    - A new RNW app cannot be created with the \`npx react-native-windows-init\` CLI command
- Critical and/or important functional issues, e.g.:
    - Unexpected crashes in RNW code
    - A core RN component does not load

*Active Support* for a stable version ends one month after the release of the next stable version, at which point the previous stable version enters [Maintenance Support](#maintenance-support).

Customers are encouraged to use versions receiving *Active Support* as much as possible.

<div class="footnote">

<a id="active-support-1"></a>
¹: The RNW team reserves the right to triage reported issues and release fixes at their discretion.

<a id="active-support-2"></a>
²: Assuming the use of the supported development environment for that stable version at the time of its release.

</div>

### Maintenance Support

A stable version of RNW enters *Maintenance Support* status one month after the next stable version is released. This support continues with each patch release within that stable version.

It is expected that the stable release branch is "stable" and will not take breaking API or project template changes (relative to the first official patch release in the branch).

While in *Maintenance Support*, the RNW Team strives to provide support for this stable version by taking fixes[¹](#maintenance-support-1) which resolve:

- Security and/or legal issues (see examples above)
- Build and/or tooling issues[²](#maintenance-support-2) (see examples above)

*Maintenance Support* for a stable version lasts for two months after it leaves [Active Support](#active-support), after which the stable version will be considered [Unsupported](#unsupported).

Customers are encouraged to upgrade away from versions receiving *Maintenance Support* as soon as possible.

<div class="footnote">

<a id="maintenance-support-1"></a>
¹: The RNW team reserves the right to triage reported issues and release fixes at their discretion.

<a id="maintenance-support-2"></a>
²: Assuming the use of the supported development environment for that stable version at the time of its release.

</div>

### Canary Support

Canary builds/releases are in active development and are not meant for general consumption.

It is expected that the main release branch is "unstable" and can take breaking changes.

The RNW Team does not commit to any support for these releases.

Customers should not use canary versions.

### Preview Support

A stable version of RNW enters *Preview Support* as soon as the first preview package is published on NPM. This support continues with each patch preview release within that stable version.

It is expected that the stable release branch in preview is "stabilizing," and it is the last chance to make large and/or breaking changes to that branch.

While in *Preview Support*, the RNW Team strives to provide this stable version the equivalent of [Active Support](#active-support), but breaking API and/or template changes may be allowed.

*Preview Support* for a stable version ends as soon as the first official, non-preview, package of the stable version is published to NPM, at which point it enters [Active Support](#active-support).

### Unsupported

An *Unsupported* stable version of RNW should not expect any further updates, changes, or fixes.

The RNW Team does not commit to any support for these releases.

Customers are encouraged to upgrade away from *Unsupported* versions as soon as possible.
`;

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
            <MarkdownBlock>{ SupportPolicyMD }</MarkdownBlock>
          </div>
        </Section>
      </div>
    );
  }
}

Support.title = "Support Policy";

module.exports = Support;
