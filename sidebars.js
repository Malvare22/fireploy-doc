// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebar = {
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
      ]
    },
    {
      type: 'doc',
      id: 'usuario-general/solicitar-rol/index',
    },
    {
      label: 'Información personal',
      type: 'category',
      items: [
        {
          type: 'doc',
          id: 'usuario-general/informacion-de-usuario/perfil/index'
        },
        {
          type: 'category',
          label: 'Portafolios',
          items: [
            {
              type: 'doc',
              id: 'usuario-general/informacion-de-usuario/portafolio/visualizar/index',
              label: 'Visualizar'
            },
            {
              type: 'doc',
              id: 'usuario-general/informacion-de-usuario/portafolio/editar/index',
              label: 'Editar'
            }
          ]
        },
        {
          type: 'doc',
          id: 'usuario-general/informacion-de-usuario/recuperar-contrasenia/index'
        },
        {
          type: 'doc',
          id: 'usuario-general/informacion-de-usuario/cerrar-sesion/index'
        },
      ]
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
              id: 'usuario-general/proyectos/elementos-de-un-proyecto/informacion-basica/index'
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
    {
      type: 'category',
      label: 'Materias y Cursos',
      items: [
        {
          type: 'doc',
          id: 'usuario-general/materias-y-cursos/introduccion/index',
        },
        {
          type: 'doc',
          id: 'usuario-general/materias-y-cursos/inscribirse/index',
        },
        {
          type: 'doc',
          id: 'usuario-general/materias-y-cursos/solicitar-curso/index',
        },
        {
          type: 'doc',
          id: 'usuario-general/materias-y-cursos/gestionar-cursos-admin/index',
        },
        {
          type: 'doc',
          id: 'usuario-general/materias-y-cursos/gestionar-materias/index',
        },
        {
          type: 'doc',
          id: 'usuario-general/materias-y-cursos/gestionar-curso/index',
        },
      ]
    },
    {
      type: 'category',
      label: 'Usuarios',
      items: [
        {
          type: 'doc',
          id: 'if-administrador/usuarios/gestion/index',
        },
        {
          type: 'doc',
          id: 'if-administrador/solicitudes/index',
        },
      ]
    }

  ],
};

export default sidebar;
