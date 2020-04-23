# Website Guide

This document outlines the procedures for appropriately updating the website.

## Primary Scenarios

### Changes in master

1. Submit code updates to react-native-windows `master` branch.
1. Submit documentation updates to this repo's `master` branch.
    1. Documents should be added/updated in [docs](docs/)
    1. Update sidebar contents in **sidebars.json** in [website](website/)

### Changes to an stable version 0.XX

1. Submit code updates to react-native-windows `0.XX-stable` branch.
1. Submit documentation updates to this repo's `master` branch.
    1. Documents should be added/updated in **version-0.XX** folder under [website/versioned_docs](website/versioned_docs/).
    1. Update sidebar contents in **version-0.XX-sidebars.json** in [website/versioned_sidebars](website/versioned_sidebars/).

### Changes in master and backported to stable version 0.XX

Complete the documentation updates for both master and stable version 0.XX above.

### New stable version 0.XX released

1. First **0.XX** stable release in react-native-windows.
    1. New `0.XX-stable` branch created in react-native-windows.
    1. New **0.XX** version published to npm.
1. Update the website with a new version.
    1. Update necessary version references in [docs](docs/).
    1. Snapshot the website for version *0.XX*: 
        1. `cd website`
        1. `yarn run version 0.XX`
        1. `yarn run fix-unbroken`
    1. Update *defaultVersionShown* in **siteConfig.js** with *0.XX*.

## FAQ

### How do the versioned snapshots work?

When Docusaurus creates a versioned "snapshot" folder under *versioned_docs*, only the docs that have been created/modified since the last "snapshot" are copied in. Asset files are not copied, and relative links are not updated. When building the website, the tool has its own fallback for building all of the correct pages and resolving the relative links.

Basically, assets are not versioned and must be kept in the repo root's *docs/assets* folder, and for the docs, if a doc is not present for a specific version, the tool looks back to the previous snapshots until it finds it.

For more details, see [Docusaurus Fallback Functionality](https://docusaurus.io/docs/en/versioning#fallback-functionality).

### How/where do I modify docs for a previously released stable version 0.XX?

First, make sure to read [How do the versioned snapshots work?](#How-do-the-versioned snapshots-work).

Now, if you need to update an existing doc, look through the previous snapshots (in descending order) until you find the previously versioned doc.

If the changes you need to make are relevant to all versions >= that previous version, then simply modify that doc so all versioned snapshots >= that previous version will see the same changes when the website is rebuilt.

However, let's say that the information in that doc *was* correct for that previous version, but the behavior has changed for later versions. You'll need to copy that doc into the first snapshot where the change is relevant, update its `id` at the top of the file, and make your changes there. Again, now all versioned snapshots >= that previous version will see the same changes when the website is rebuilt.

Furthermore, if the updates are still relevant for the next unreleased version, be sure to make those changes to the docs in the root docs folder as well.

### How do I resolve a "File not found" error when unbroken checks the versioned_docs?

First, make sure to read [How do the versioned snapshots work?](#How-do-the-versioned snapshots-work).

Now, unaware of how the snapshots are used, unbroken will just see missing files. To fix that, we have a *fix-unbroken.js* script in the website folder. Running it will update the *.unbroken_exclusions* file to ignore the "broken" links that will actually be working when the website is built.

You can run the script from the website folder with `yarn run fix-unbroken`.

If you're still seeing "File not found" errors (not warnings) after you've updated the *.unbroken_exclusions* file, then you have an actual missing file to resolve.

The most common problem are with asset files. Make sure that all asset files are present in the repo root's *docs/assets* folder, and that you use links relative to the root docs folder, ie: exactly *assets/image.png*, not *./assets/image.png*, */docs/assets/image.png*, etc.
