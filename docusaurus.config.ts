import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  customFields: {course: {extraDocs: []}},
  title: 'Webframeworks',
  tagline: 'React, Next.js en React Native',
  favicon: 'img/reactjs.png',
  future: {v4: true},
  markdown: {
    format: 'mdx',
    mermaid: true,
    parseFrontMatter: async (params) => {
      const parsed = await params.defaultParseFrontMatter(params);
      if (params.filePath.replaceAll('\\', '/').endsWith('/docs/webframeworks/index.md')) {
        parsed.frontMatter.slug = '/';
      }
      return parsed;
    },
    hooks: {onBrokenMarkdownLinks: 'warn', onBrokenMarkdownImages: 'warn'},
    mdx1Compat: {comments: true, admonitions: true, headingIds: true},
  },
  url: 'https://similonap.github.io',
  baseUrl: process.env.BASE_URL ?? '/',
  organizationName: 'similonap',
  projectName: 'webframeworks-cursus',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  i18n: {defaultLocale: 'nl-BE', locales: ['nl-BE']},
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: 'https://github.com/similonap/web-monorepo-docusaurus/edit/main/',
        },
        pages: false,
        blog: false,
        theme: {customCss: './src/css/custom.css'},
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    image: 'img/reactjs.png',
    colorMode: {defaultMode: 'light', respectPrefersColorScheme: false, disableSwitch: false},
    docs: {sidebar: {hideable: true}},
    navbar: {
      title: 'Webframeworks',
      logo: {alt: 'Webframeworks', src: 'img/assimilatehead.png'},
      items: [
        {type: 'docSidebar', sidebarId: 'theorieSidebar', position: 'left', label: 'Theorie'},
        {type: 'docSidebar', sidebarId: 'labosSidebar', position: 'left', label: "Labo's"},
        {type: 'docSidebar', sidebarId: 'projectSidebar', position: 'left', label: 'Project'},
        {href: 'https://github.com/similonap/webframeworks-cursus', label: 'GitHub', position: 'right'},
      ],
    },
    footer: {
      style: 'dark',
      links: [{
        title: 'Links',
        items: [
          {label: 'Digitap', href: 'https://digitap.ap.be'},
          {label: 'GitHub', href: 'https://github.com/similonap/webframeworks-cursus'},
        ],
      }],
      copyright: `Copyright © ${new Date().getFullYear()} Webframeworks.`,
    },
    prism: {theme: prismThemes.github, darkTheme: prismThemes.dracula},
  } satisfies Preset.ThemeConfig,
};

export default config;
