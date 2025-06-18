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
const sidebar = {
  docs: [

    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'doc',
      id: 'politicas-servicio/index',
    },
    {
      type: 'doc',
      id: 'politicas-privacidad/index',
    },
    {
      type: 'category',
      label: 'Primeros pasos',
      items: [
        {
          type: 'doc',
          id: 'registro/index'
        },
        {
          type: 'doc',
          id: 'inicio-de-sesion/index'
        },
      ]
    },
    {
      label: 'Información personal',
      type: 'category',
      items: [
        {
          type: 'doc',
          id: 'informacion-de-usuario/perfil/index'
        },
        {
          type: 'category',
          label: 'Portafolios',
          items: [
            {
              type: 'doc',
              id: 'informacion-de-usuario/portafolio/visualizar/index',
              label: 'Visualizar'
            },
            {
              type: 'doc',
              id: 'informacion-de-usuario/portafolio/editar/index',
              label: 'Editar'
            }
          ]
        },
        {
          type: 'doc',
          id: 'informacion-de-usuario/recuperar-contrasenia/index'
        },
        {
          type: 'doc',
          id: 'informacion-de-usuario/cerrar-sesion/index'
        },
      ]
    },

    {
      type: 'category',
      label: 'Proyecto',
      items: [
        {
          type: 'doc',
          id: 'proyectos/introduccion/index'
        },
        {
          type: 'doc',
          id: 'proyectos/capas-y-tecnologias/index'
        },
        {
          type: 'doc',
          id: 'proyectos/visualizar/index'
        },
        {
          type: 'category',
          label: 'Elementos de un proyecto',
          items: [
            {
              type: 'doc',
              id: 'proyectos/elementos-de-un-proyecto/informacion-basica/index'
            },
            {
              type: 'doc',
              id: 'proyectos/elementos-de-un-proyecto/repositorios/index'
            },
            {
              type: 'doc',
              id: 'proyectos/elementos-de-un-proyecto/variables-de-entorno/index'
            },
            {
              type: 'doc',
              id: 'proyectos/elementos-de-un-proyecto/bases-de-datos/index'
            },
            {
              type: 'doc',
              id: 'proyectos/elementos-de-un-proyecto/estado/index'
            },
            {
              type: 'doc',
              id: 'proyectos/elementos-de-un-proyecto/colaboradores/index'
            },
          ]
        },
        {
          type: 'doc',
          id: 'proyectos/gestionar/index'
        },
        {
          type: 'category',
          label: 'Proceso de despliegue',
          items: [
            {
              type: 'doc',
              id: 'proyectos/proceso-de-despliegue/configuraciones-previas/index'
            },
            {
              type: 'doc',
              id: 'proyectos/proceso-de-despliegue/variables-especiales/index'
            },
            {
              type: 'doc',
              id: 'proyectos/proceso-de-despliegue/errores/index'
            },
          ]
        }
      ]
    }, {
      type: 'category',
      label: 'Materias y Cursos',
      items: [
        {
          type: 'doc',
          id: 'materias-y-cursos/introduccion/index',
        },

      ]
    }
  ],

};


export default sidebar;
