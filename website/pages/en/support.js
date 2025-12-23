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
| [0.81](https://www.npmjs.com/package/react-native-windows/v/latest) | [Active](#active-support) | 12/19/2025 | 12/19/2025 | *TBD* | *TBD* |
| [0.80](https://www.npmjs.com/package/react-native-windows/v/v0.80-stable) | [Active](#active-support) | 10/28/2025 | 10/28/2025 | 01/20/2025 | 03/20/2026 |
| [0.79](https://www.npmjs.com/package/react-native-windows/v/v0.79-stable) | [Maintenance](#maintenance-support) | 06/17/2025 | 06/17/2025 | 11/30/2025 | 01/31/2026 |
| [0.78](https://www.npmjs.com/package/react-native-windows/v/v0.78-stable) | [Unsupported](#unsupported) | 02/27/2025 | 02/27/2025 | 07/31/2025 | 09/30/2025 |

<!--
// We don't want the table to grow indefinitely, so only keep the last 5 stable (non-main) versions visible above, keep the rest here for posterity.
| [0.77](https://www.npmjs.com/package/react-native-windows/v/v0.77-stable) | [Unsupported](#unsupported) | 01/24/2025 | 01/24/2025 | 03/30/2025 | 05/31/2025 |
| [0.76](https://www.npmjs.com/package/react-native-windows/v/v0.76-stable) | [Unsupported](#unsupported) | 11/11/2024 | 11/11/2024 | 02/28/2025 | 04/30/2025 |
| [0.75](https://www.npmjs.com/package/react-native-windows/v/v0.75-stable) | [Unsupported](#unsupported) | 8/19/2024 | 8/19/2024 | 12/31/2024 | 02/28/2025 |
| [0.74](https://www.npmjs.com/package/react-native-windows/v/v0.74-stable) | [Unsupported](#unsupported) | 4/29/2024 | 4/29/2024 | 9/30/2024 | 11/30/2024 |
| [0.73](https://www.npmjs.com/package/react-native-windows/v/v0.73-stable) | [Unsupported](#unsupported) | 12/11/2023 | 12/11/2023 | 5/31/2024 | 7/31/2024 |
| [0.72](https://www.npmjs.com/package/react-native-windows/v/v0.72-stable) | [Unsupported](#unsupported) | 06/23/2023 | 06/23/2023 | 01/31/2024 | 03/31/2024 |
| [0.71](https://www.npmjs.com/package/react-native-windows/v/v0.71-stable) | [Unsupported](#unsupported) | 01/23/2023 | 01/23/2023 | 07/31/2023 | 09/30/2023 |
| [0.70](https://www.npmjs.com/package/react-native-windows/v/v0.70-stable) | [Unsupported](#unsupported) | 09/12/2022 | 09/12/2022 | 02/28/2023 | 04/30/2023 |
| [0.69](https://www.npmjs.com/package/react-native-windows/v/v0.69-stable) | [Unsupported](#unsupported) | 06/27/2022 | 06/27/2022 | 10/31/2022 | 12/31/2022 |
| [0.68](https://www.npmjs.com/package/react-native-windows/v/v0.68-stable) | [Unsupported](#unsupported) | 04/04/2022 | 04/04/2022 | 07/31/2022 | 09/30/2022 |
| [0.67](https://www.npmjs.com/package/react-native-windows/v/v0.67-stable) | [Unsupported](#unsupported) | 01/24/2022 | *N/A* | *N/A* | 09/30/2022 |
| [0.66](https://www.npmjs.com/package/react-native-windows/v/v0.66-stable) | [Unsupported](#unsupported) | 10/11/2021 | *N/A* | *N/A* | 08/31/2022 |
| [0.65](https://www.npmjs.com/package/react-native-windows/v/v0.65-stable) | [Unsupported](#unsupported) | 08/23/2021 | *N/A* | *N/A* | 07/31/2022 |
| [0.64](https://www.npmjs.com/package/react-native-windows/v/v0.64-stable) | [Unsupported](#unsupported) | 03/15/2021 | *N/A* | *N/A* | 06/30/2022 |
| [0.63](https://www.npmjs.com/package/react-native-windows/v/v0.63-stable) | [Unsupported](#unsupported) | 01/24/2022 | *N/A* | *N/A* | 10/11/2021 |
-->

<div class="footnote">

**Note:** All releases not listed above are [Unsupported](#unsupported).

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

## React Native Support Policy

See the official React Native [Support Policy](https://github.com/reactwg/react-native-releases).

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
