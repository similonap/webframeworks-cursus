const path = require('path');

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'React.js',
    tagline: 'React.js - classes',
    url: 'https://similonap.github.io/',
    baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '/',
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
                    routeBasePath: '/',
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
            docs: {
                sidebar: {
                    hideable: true,
                }
            },
            navbar: {
                title: 'Webframeworks',
                logo: {
                    alt: 'My Site Logo',
                    src: 'img/assimilatehead.png',
                },
                items: [
                    {
                        type: 'doc',
                        docId: 'wf-course/README',
                        position: 'left',
                        label: 'React.js',
                    },
                    {
                        type: 'doc',
                        docId: 'react-native-course/README',
                        position: 'left',
                        label: 'React Native',
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
    plugins: [
        path.resolve(__dirname, 'plugins', 'codesandbox'),
        path.resolve(__dirname, 'plugins', 'expo'),
        require.resolve('docusaurus-lunr-search')
    ],
};

module.exports = config;
