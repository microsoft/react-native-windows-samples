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

## Changes in master and backported to stable version 0.XX

Complete the documentation updates for both master and stable version 0.XX above.

## New stable version 0.XX released

1. First **0.XX** stable release in react-native-windows.
    1. New `0.XX-stable` branch created in react-native-windows.
    1. New **0.XX** version published to npm.
1. Update the website with a new version.
    1. Update necessary version references in [docs](docs/).
    1. Snapshot the website for version *0.XX*: 
        1. `cd website`
        1. `yarn run version 0.XX`
    1. Update *defaultVersionShown* in **siteConfig.js** with *0.XX*.

## Other Scenarios

## Late documentation for master and/or stable version 0.XX

Complete the documentation updates for master and/or stable version 0.XX above.
