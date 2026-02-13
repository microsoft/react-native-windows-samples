// @ts-check
const { themes: prismThemes } = require('prism-react-renderer');

const repoUrl = 'https://github.com/microsoft/react-native-windows';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native for Windows',
  tagline: 'Build native Windows apps with Javascript and React',
  favicon: 'img/favicon.ico',

  url: 'https://microsoft.github.io',
  baseUrl: '/react-native-windows/',

  organizationName: 'microsoft',
  projectName: 'react-native-windows',

  onBrokenLinks: 'warn',
  onBrokenAnchors: 'warn',

  markdown: {
    format: 'detect',
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: '../docs',
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/microsoft/react-native-windows-samples/blob/main/docs/',
          lastVersion: '0.81',
          onlyIncludeVersions: ['0.81'],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/undraw_online.svg',
      navbar: {
        title: 'React Native for Windows',
        logo: {
          alt: 'React Native for Windows Logo',
          src: 'img/header_logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'apis',
            position: 'left',
            label: 'APIs',
          },
          {
            href: 'https://devblogs.microsoft.com/react-native/',
            label: 'Blog',
            position: 'left',
          },
          {
            to: '/resources',
            label: 'Resources',
            position: 'left',
          },
          {
            href: repoUrl + '-samples/tree/main/samples',
            label: 'Samples',
            position: 'left',
          },
          {
            to: '/support',
            label: 'Support',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
          },
          {
            href: repoUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'React Native Docs',
            items: [
              {
                label: 'Getting Started',
                href: 'https://reactnative.dev/docs/getting-started',
              },
              {
                label: 'Tutorial',
                href: 'https://reactnative.dev/docs/tutorial',
              },
              {
                label: 'Components and APIs',
                href: 'https://reactnative.dev/docs/components-and-apis',
              },
              {
                label: 'More Resources',
                href: 'https://reactnative.dev/docs/more-resources',
              },
            ],
          },
          {
            title: 'React Native for Windows Docs',
            items: [
              {
                label: 'Get Started with Windows',
                to: '/docs/getting-started',
              },
              {
                label: 'Components and APIs',
                to: '/docs/parity-status',
              },
              {
                label: 'Native Modules',
                to: '/docs/native-modules',
              },
              {
                label: 'Native UI Components',
                to: '/docs/view-managers',
              },
            ],
          },
          {
            title: 'Connect With Us',
            items: [
              {
                label: 'Blog',
                href: 'https://devblogs.microsoft.com/react-native/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/ReactNativeMSFT',
              },
              {
                label: 'GitHub',
                href: repoUrl,
              },
              {
                label: 'Samples',
                href: repoUrl + '-samples/tree/main/samples',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Microsoft Corporation.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['csharp', 'cpp', 'json', 'typescript'],
      },
    }),
};

module.exports = config;
