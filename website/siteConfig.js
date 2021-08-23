/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// default web
const defaultVersionShown = '0.64';
const repoUrl = "https://github.com/microsoft/react-native-windows";

const siteConfig = {
  title: "React Native for Windows + macOS",
  tagline: "Build native Windows & macOS apps with Javascript and React",
  url: "https://microsoft.github.io",
  baseUrl: "/react-native-windows/",
  repoUrl,
  defaultVersionShown,
  // Used for publishing and more
  projectName: "react-native-windows",
  organizationName: "microsoft",

  editUrl:
    "https://github.com/microsoft/react-native-windows-samples/blob/main/docs/",

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "getting-started", label: "Docs" },
    { doc: "flyout-component", label: "APIs" },
    { blog: true, label: "Blog" },
    { page: "resources", label: "Resources" },
    { href: repoUrl + "-samples/tree/main/samples", label: "Samples" },
    // { search: true }, https://community.algolia.com/docsearch/what-is-docsearch.html
  ],

  /* path to images for header/footer */
  headerIcon: "img/header_logo.svg",
  footerIcon: "img/header_logo.png",
  favicon: "img/favicon.ico",

  /* Colors for website */
  colors: {
    brand: "#0e53bd", // electric blue
    dark: "#e1e6eb", // dark blue
    deepdark: "#ffffff", // really dark blue
    light: "#373940", // light blue
    text: "#1a1a1a", // black substitute
    subtle: "#0e53bd", // light grey for text
    divider: "#d1d7de", // very light grey
    tintColor: "#e1e6eb", // slightly off white
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
    "https://buttons.github.io/buttons.js",
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/react-native-windows/js/code-block-buttons.js',
  ],

  stylesheets: [
    '/react-native-windows/css/code-block-buttons.css',
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
