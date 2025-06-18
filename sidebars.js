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
      id: 'intro',
    },
    {
      type: 'doc',
      id: 'usuario-general/politicas-servicio/index',
    },
    {
      type: 'doc',
      id: 'usuario-general/politicas-privacidad/index',
    },
    {
      type: 'category',
      label: 'Primeros pasos',
      items: [
        {
          type: 'doc',
          id: 'usuario-general/registro/index'
        },
        {
          type: 'doc',
          id: 'usuario-general/inicio-de-sesion/index'
        },
        {
          type: 'doc',
          id: 'usuario-general/recuperar-contrasenia/index'
        },


      ]
    },
    {
      type: 'doc',
      id: 'usuario-general/gestion-informacion-personal/index'
    },
    {
      type: 'doc',
      id: 'usuario-general/gestionar-portafolio/index'
    },
    {
      type: 'category',
      label: 'Proyecto',
      items: [
        {
          type: 'doc',
          id: 'usuario-general/proyectos/introduccion/index'
        },
        {
          type: 'doc',
          id: 'usuario-general/proyectos/capas-y-tecnologias/index'
        },
        {
          type: 'doc',
          id: 'usuario-general/proyectos/visualizar/index'
        },
        {
          type: 'category',
          label: 'Elementos de un proyecto',
          items: [
            {
              type: 'doc',
              id: 'usuario-general/proyectos/elementos-de-un-proyecto/datos-basicos/index'
            },
            {
              type: 'doc',
              id: 'usuario-general/proyectos/elementos-de-un-proyecto/repositorios/index'
            },
            {
              type: 'doc',
              id: 'usuario-general/proyectos/elementos-de-un-proyecto/variables-de-entorno/index'
            },
            {
              type: 'doc',
              id: 'usuario-general/proyectos/elementos-de-un-proyecto/bases-de-datos/index'
            },
            {
              type: 'doc',
              id: 'usuario-general/proyectos/elementos-de-un-proyecto/estado/index'
            },
            {
              type: 'doc',
              id: 'usuario-general/proyectos/elementos-de-un-proyecto/colaboradores/index'
            },


          ]
        },
        {
          type: 'doc',
          id: 'usuario-general/proyectos/gestionar/index'
        },
        {
          type: 'category',
          label: 'Proceso de despliegue',
          items: [
            {
              type: 'doc',
              id: 'usuario-general/proyectos/proceso-de-despliegue/configuraciones-previas/index'
            },
            {
              type: 'doc',
              id: 'usuario-general/proyectos/proceso-de-despliegue/variables-especiales/index'
            },
            {
              type: 'doc',
              id: 'usuario-general/proyectos/proceso-de-despliegue/errores/index'
            },
          ]
        }
      ]
    },





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
