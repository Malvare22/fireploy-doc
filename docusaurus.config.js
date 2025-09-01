// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import dotenv from 'dotenv';
dotenv.config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Fireploy',
  tagline: 'Despliegues automáticos',
  favicon: 'img/favicon.ico',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook', // Cambiar por tu nombre de org real
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // Desactivado porque usas plugins separados
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
      }),
    ],
  ],

  plugins: [
    // Docente
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'docente',
        path: 'docs/docente',
        routeBasePath: 'docs/docente',
        sidebarPath: require.resolve('./sidebarsDocente.js'),
      },
    ],
    // Administrador
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs/estudiante',
        routeBasePath: 'docs/estudiante',
        sidebarPath: require.resolve('./sidebarsEstudiante.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'estudiante',
        path: 'docs/administrador',
        routeBasePath: 'docs/administrador',
        sidebarPath: require.resolve('./sidebarsAdministrador.js'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'despliegues',
        path: 'docs/despliegues',
        routeBasePath: 'docs/despliegues',
        sidebarPath: require.resolve('./sidebarsDespliegue.js'),
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Fireploy',
        logo: {
          alt: 'Fireploy',
          src: 'img/logo.png',
        },
        items: [
          { label: 'Blog', to: '/blog', position: 'left' },
          {
            label: 'Estudiante',
            to: '/docs/estudiante/intro',
            position: 'left',
          },
          {
            label: 'Docente',
            to: '/docs/docente/intro',
            position: 'left',
          },
          {
            label: 'Administrador',
            to: '/docs/administrador/intro',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Fireploy Doc.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
