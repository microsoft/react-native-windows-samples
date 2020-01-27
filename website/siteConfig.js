/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const repoUrl = "https://github.com/microsoft/react-native-windows";

const siteConfig = {
  title: "React Native for Windows & Mac",
  tagline: "Build native Windows apps with Javascript and React",
  url: "https://microsoft.github.io",
  baseUrl: "/react-native-windows-mac/",
  repoUrl,
  // Used for publishing and more
  projectName: "react-native-windows-mac",
  organizationName: "microsoft",

  editUrl:
    "https://github.com/microsoft/react-native-windows-samples/blob/master/docs/",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: "versions", label: "v0.61" },
    { doc: "getting-started", label: "Docs" },
    { blog: true, label: "Blog" },
    { href: repoUrl + "-samples/tree/master/samples", label: "Samples" },
    // { search: true }, https://community.algolia.com/docsearch/what-is-docsearch.html
    { href: repoUrl, label: "GitHub" }
  ],

  /* path to images for header/footer */
  headerIcon: "img/header_logo.svg",
  footerIcon: "img/header_logo.png",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    brand: "#61dafb", // electric blue
    dark: "#282c34", // dark blue
    deepdark: "#20232a", // really dark blue
    light: "#373940", // light blue
    text: "#1a1a1a", // black substitute
    subtle: "#6d6d6d", // light grey for text
    divider: "#ececec", // very light grey
    tintColor: "#f7f7f7", // slightly off white
    backgroundColor: "white",
    // we don't use these any more but docusaurus complains if we don't
    primaryColor: "black",
    secondaryColor: "gray"
  },

  usePrism: ["javascript", "typescript", "js", "jsx", "cpp", "csharp", "json"],
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "solarized-dark"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    "https://cdn.jsdelivr.net/npm/focus-visible@5.0.2/dist/focus-visible.min.js",
    "https://platform.twitter.com/widgets.js",
    "https://buttons.github.io/buttons.js"
  ],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",

  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  },

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true
};

module.exports = siteConfig;
