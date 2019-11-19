/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: "User1",
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: "/img/undraw_open_source.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const repoUrl = "https://github.com/microsoft/react-native-windows";

const siteConfig = {
  title: "React Native for Windows",
  tagline: "Build native Windows apps with Javascript and React",
  url: "https://your-docusaurus-test-site.com", // Your website URL
  baseUrl: "/", // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: "react-native-windows",
  organizationName: "microsoft",
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { doc: "getting-started", label: "Docs" },
    { blog: true, label: "Blog" },
    { href: repoUrl + "-samples/tree/master/samples", label: "Samples" },
    // { search: true }, https://community.algolia.com/docsearch/what-is-docsearch.html
    { href: repoUrl, label: "GitHub" }
  ],

  // If you have users set above, you add it here:
  users,

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

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

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

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  docsSideNavCollapsible: true

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
