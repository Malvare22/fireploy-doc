// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docs: [

    {
      type: 'doc',
      id: 'introduccion',
    },
    {
      type: 'doc',
      id: 'politicas-de-privacidad',
    },
    {
      type: 'doc',
      id: 'politicas-de-servicio',
    },
    {
      type: 'category',
      label: 'Primeros pasos',
      items: [
        {
          type: 'doc',
          id: 'usuario/registro'
        },
        {
          type: 'doc',
          id: 'usuario/inicio-de-sesión'
        }

      ]
    },
    {
      type: 'category',
      label: 'Materias y Cursos',
      items: [
        {
          type: 'doc',
          id: 'materias/introduccion'
        },
        {
          type: 'doc',
          id: 'materias/crear-materia'
        },
        {
          type: 'doc',
          id: 'materias/editar-materia'
        },
        {
          type: 'category',
          label: 'Administración de cursos',
          items: [
            {
              type: 'doc',
              id: 'materias/curso/introduccion'
            },
            {
              type: 'doc',
              id: 'materias/curso/crear-curso'
            },
            {
              type: 'doc',
              id: 'materias/curso/editar-curso'
            },
            {
              type: 'doc',
              id: 'materias/curso/visualizar-curso'
            },
          ]
        }

      ]
    },
    {
      type: 'category',
      label: 'Proyectos',
      items: [
        {
          type: 'doc',
          id: 'proyecto/introduccion'
        },
        {
          type: 'doc',
          id: 'proyecto/tecnologias-soportadas'
        }
      ]
    }


    // {
    //   type: 'category',
    //   label: 'Docusaurus',
    //   items: [
    //     {
    //       type: 'doc',
    //       id: 'doc2',
    //     },
    //     {
    //       type: 'doc',
    //       id: 'doc3',
    //     },
    //   ],
    // },
    // {
    //   type: 'link',
    //   label: 'Learn more',
    //   href: 'https://example.com',
    // },
  ],

  //   docs: [
  //   {
  //     type: 'category',
  //     label: 'Materias',
  //     items: ['materias/introduccion', 'materias/crear-materia', 'materias/editar-materia', {type: 'category', label: 'Curso', items: ['materias/curso/crear-curso', 'materias/curso/editar-curso']}],

  //   },
  // ],
};


export default sidebars;
