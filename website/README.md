This website was created with [Docusaurus](https://v1.docusaurus.io/).

# What's In This Document

* [Get Started in 5 Minutes](#get-started-in-5-minutes)
* [Directory Structure](#directory-structure)
* [Editing Content](#editing-content)
* [Adding Content](#adding-content)
* [Cutting Documentation for New React Native Windows Release](#cutting-documentation-for-a-new-react-native-windows-release)
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

# Cutting Documentation for a New React Native Windows Release
1. Run `yarn run version <0.xx>`. This will create a new directory of versioned docs, `version-0.xx`, in `website/versioned_docs`. This will preserve all documents currently in the `docs` directory and make them available as documentation for version 0.xx. For more information on versioning, click [here](https://v1.docusaurus.io/docs/en/versioning).
2. Follow the [Integration into the react-native-windows-samples-repo](https://github.com/microsoft/react-native-windows/wiki/API-documentation#integration-into-the-react-native-windows-samples-repo) steps to add the latest API documentation to your new `version-0.xx` directory.
3. When you are ready for your new docs to be the default documentation on the website, edit `website/siteConfig.js` to point to 0.xx for its `defaultVersionShow` constant.

# Full Documentation

Full documentation can be found on the [website](https://v1.docusaurus.io/).
