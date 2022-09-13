const path = require('path');

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Webframeworks',
  tagline: 'Webframeworks is cool',
  url: 'https://similonap.github.io/',
  baseUrl: '/webframeworks-cursus/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'similonap', // Usually your GitHub org/user name.
  projectName: 'webframeworks-cursus', // Usually your repo name.
  deploymentBranch: 'master',
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'nl-BE',
    locales: ['nl-BE'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Webframeworks',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'wf-course/inleiding/README',
            position: 'left',
            label: 'Cursus',
          },
          {
            type: 'doc',
            docId: 'wf-lab/README',
            position: 'left',
            label: 'Labos',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [  
          {
            title: 'Links',
            items: [
              {
                label: 'Digitap',
                href: 'https://digitap.ap.be',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/similonap/webframeworks-cursus',
              },
            ],
          },
        ],
        copyright: `Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [path.resolve(__dirname, 'plugins', 'codesandbox')],
};

module.exports = config;