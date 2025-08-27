// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebar = {
  docs: [
    {
      type: 'doc',
      id: 'intro',
      label: "Introducción"
    },
    {
      id: 'serviciosDeNube/index',
      label: 'Los servicios en la nube',
      type: 'doc'
    },
    {
      id: 'proveedores/index',
      label: 'Proveedores de servicios',
      type: 'doc'
    },
    {
      type: 'category',
      label: 'Instancias',
      items: [
        {
          id: 'instancias/introduccion/index',
          label: 'Introducción',
          type: 'doc'
        },
        {
          id: 'instancias/estados_y_operaciones/index',
          label: 'Estados y Operaciones',
          type: 'doc'
        },
        {
          id: 'instancias/redes/index',
          label: 'Configuraciones de Redes',
          type: 'doc'
        },
        {
          id: 'instancias/firewalls/index',
          label: 'Firewall de la Instancia vs del Servicio',
          type: 'doc'
        },
      ]
    }
  ],
};

export default sidebar;
