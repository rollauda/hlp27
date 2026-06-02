// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Humanités, Littérature, Philosophie',
  tagline: 'Rolland Auda, La Condamine, Quito, 2026-2027',
  favicon: 'img/philo.svg',

  // TODO bascule prod : remplacer par https://hlp.profauda.fr quand hlp27 prend la suite de hlp25
  url: 'https://hlp27.profauda.fr',
  baseUrl: '/',

  organizationName: 'rollauda',
  projectName: 'hlp27',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Désactive la doc par défaut — on utilise plusieurs plugins docs
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'premiere',
        path: 'premiere',
        routeBasePath: 'premiere',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'terminale',
        path: 'terminale',
        routeBasePath: 'terminale',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'axes',
        path: 'axes',
        routeBasePath: 'axes',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'auteurs',
        path: 'auteurs',
        routeBasePath: 'auteurs',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'methode',
        path: 'methode',
        routeBasePath: 'methode',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],

  themes: ['@docusaurus/theme-mermaid'],

  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      mermaid: {
        theme: {light: 'neutral', dark: 'forest'},
      },
      navbar: {
        title: 'HLP Condamine',
        logo: {
          alt: 'hlp',
          src: 'img/philosophy.svg',
        },
        items: [
          {to: '/premiere/', label: 'Première', position: 'left', activeBaseRegex: `/premiere/`},
          {to: '/terminale/', label: 'Terminale', position: 'left', activeBaseRegex: `/terminale/`},
          {to: '/methode/intro', label: 'Méthode', position: 'left', activeBaseRegex: `/methode/`},
          {href: 'https://www.profauda.fr/', label: 'Accueil-Auda', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `©Rolland Auda, 2026-2027. Construit avec Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
