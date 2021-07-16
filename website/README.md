This website was created with [Docusaurus](https://v1.docusaurus.io/).

# What's In This Document

* [Get Started in 5 Minutes](#get-started-in-5-minutes)
* [Directory Structure](#directory-structure)
* [Editing Content](#editing-content)
* [Adding Content](#adding-content)
* [Updating the Documentation Following Changes in react-native-windows](#updating-the-documentation-following-changes-in-react-native-windows)
* [FAQ](#faq)
* [Full Documentation](#full-documentation)

# Get Started in 5 Minutes

1. Make sure all the dependencies for the website are installed:

```sh
# Install dependencies
$ yarn install
```
2. Run your dev server:

```sh
# Start the site
$ yarn start
```

Any changes you make to the markdown files under `docs` will be visible in the `next` version of the docs, i.e. http://localhost:3000/react-native-windows/docs/next/getting-started 

## Directory Structure

Your project file structure should look something like this

```
my-docusaurus/
  docs/
    doc-1.md
    doc-2.md
    doc-3.md
  website/
    blog/
      2016-3-11-oldest-post.md
      2017-10-24-newest-post.md
    core/
    node_modules/
    pages/
    static/
      css/
      img/
    package.json
    sidebar.json
    siteConfig.js
```

# Editing Content

## Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here](https://v1.docusaurus.io/docs/en/navigation)

## Editing an existing blog post

Edit blog posts by navigating to `website/blog` and editing the corresponding post:

`website/blog/post-to-be-edited.md`
```markdown
---
id: post-needs-edit
title: This Blog Post Needs To Be Edited
---

Edit me...
```

For more information about blog posts, click [here](https://v1.docusaurus.io/docs/en/adding-blog)

# Adding Content

## Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebars.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click [here](https://v1.docusaurus.io/docs/en/navigation)

## Adding a new blog post

1. Make sure there is a header link to your blog in `website/siteConfig.js`:

`website/siteConfig.js`
```javascript
headerLinks: [
    ...
    { blog: true, label: 'Blog' },
    ...
]
```

2. Create the blog post with the format `YYYY-MM-DD-My-Blog-Post-Title.md` in `website/blog`:

`website/blog/2018-05-21-New-Blog-Post.md`

```markdown
---
author: Frank Li
authorURL: https://twitter.com/foobarbaz
authorFBID: 503283835
title: New Blog Post
---

Lorem Ipsum...
```

For more information about blog posts, click [here](https://v1.docusaurus.io/docs/en/adding-blog)

## Adding items to your site's top navigation bar

1. Add links to docs, custom pages or external links by editing the headerLinks field of `website/siteConfig.js`:

`website/siteConfig.js`
```javascript
{
  headerLinks: [
    ...
    /* you can add docs */
    { doc: 'my-examples', label: 'Examples' },
    /* you can add custom pages */
    { page: 'help', label: 'Help' },
    /* you can add external links */
    { href: 'https://github.com/facebook/docusaurus', label: 'GitHub' },
    ...
  ],
  ...
}
```

For more information about the navigation bar, click [here](https://v1.docusaurus.io/docs/en/navigation)

## Adding custom pages

1. Docusaurus uses React components to build pages. The components are saved as .js files in `website/pages/en`:
1. If you want your page to show up in your navigation header, you will need to update `website/siteConfig.js` to add to the `headerLinks` element:

`website/siteConfig.js`
```javascript
{
  headerLinks: [
    ...
    { page: 'my-new-custom-page', label: 'My New Custom Page' },
    ...
  ],
  ...
}
```

For more information about custom pages, click [here](https://v1.docusaurus.io/docs/en/custom-pages).

# Updating the Documentation Following Changes in react-native-windows
## Changes in main

1. Submit code updates to react-native-windows `main` branch.
1. Submit documentation updates to this repo's `main` branch.
    1. Documents should be added/updated in [docs](docs/)
    1. Update sidebar contents in **sidebars.json** in [website](website/)

## Changes to a stable version 0.XX

1. Submit code updates to react-native-windows `0.XX-stable` branch.
1. Submit documentation updates to this repo's `main` branch.
    1. Documents should be added/updated in **version-0.XX** folder under [website/versioned_docs](website/versioned_docs/).
    1. Update sidebar contents in **version-0.XX-sidebars.json** in [website/versioned_sidebars](website/versioned_sidebars/).

## Changes in main and backported to stable version 0.XX

Complete the documentation updates for both main and stable version 0.XX above.

## Cutting Documentation for a New React Native Windows Release
1. Update necessary version references in [docs](docs/).
1. Snapshot the website for version 0.XX: 
        1. `cd website`
        1. `yarn run version 0.XX`
        1. `yarn run fix-unbroken`
  This will create a new directory of versioned docs, `version-0.XX`, in `website/versioned_docs`. This will preserve all documents currently in the `docs` directory and make them available as documentation for version 0.XX. For more information on versioning, click [here](https://v1.docusaurus.io/docs/en/versioning).
1. Follow the [Integration into the react-native-windows-samples-repo](https://github.com/microsoft/react-native-windows/wiki/API-documentation#integration-into-the-react-native-windows-samples-repo) steps to add the latest API documentation to your new `version-0.XX` directory.
1. When you are ready for your new docs to be the default documentation on the website, edit `website/siteConfig.js` to point to 0.xx for its `defaultVersionShown` constant.

# FAQ
## How do the versioned snapshots work?

When Docusaurus creates a versioned "snapshot" folder under *versioned_docs*, only the docs that have been created/modified since the last "snapshot" are copied in. Asset files are not copied, and relative links are not updated. When building the website, the tool has its own fallback for building all of the correct pages and resolving the relative links.

Basically, assets are not versioned and must be kept in the repo root's *docs/assets* folder, and for the docs, if a doc is not present for a specific version, the tool looks back to the previous snapshots until it finds it.

For more details, see [Docusaurus Fallback Functionality](https://docusaurus.io/docs/en/versioning#fallback-functionality).

## How/where do I modify docs for a previously released stable version 0.XX?

First, make sure to read [How do the versioned snapshots work?](#how-do-the-versioned-snapshots-work).

Now, if you need to update an existing doc, look through the previous snapshots (in descending order) until you find the previously versioned doc.

If the changes you need to make are relevant to all versions >= that previous version, then simply modify that doc so all versioned snapshots >= that previous version will see the same changes when the website is rebuilt.

However, let's say that the information in that doc *was* correct for that previous version, but the behavior has changed for later versions. You'll need to copy that doc into the first snapshot where the change is relevant, update its `id` at the top of the file, and make your changes there. Again, now all versioned snapshots >= that previous version will see the same changes when the website is rebuilt.

Furthermore, if the updates are still relevant for the next unreleased version, be sure to make those changes to the docs in the root docs folder as well.

## How do I resolve a "File not found" error when unbroken checks the versioned_docs?

First, make sure to read [How do the versioned snapshots work?](#how-do-the-versioned-snapshots-work).

Now, unaware of how the snapshots are used, unbroken will just see missing files. To fix that, we have a *fix-unbroken.js* script in the website folder. Running it will update the *.unbroken_exclusions* file to ignore the "broken" links that will actually be working when the website is built.

You can run the script from the website folder with `yarn run fix-unbroken`.

If you're still seeing "File not found" errors (not warnings) after you've updated the *.unbroken_exclusions* file, then you have an actual missing file to resolve.

The most common problem are with asset files. Make sure that all asset files are present in the repo root's *docs/assets* folder, and that you use links relative to the root docs folder, i.e.: exactly *assets/image.png*, not *./assets/image.png*, */docs/assets/image.png*, etc.

# Full Documentation

Full documentation can be found on the [website](https://v1.docusaurus.io/).
