# Variables de entorno especiales

Fireploy utiliza **variables de entorno reservadas** que deben declararse en el proyecto para permitir la integración entre servicios y capas. Estas variables facilitan el proceso de automatización y garantizan consistencia en las configuraciones.

Las variables de entorno y su funcionalidad a fecha de publicación de este artículo son las siguientes:

    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Funcionalidad</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>PORT</td>
          <td>Backend / Servidor</td>
          <td>Puerto en el que el servidor de tu aplicación backend escuchará las peticiones.</td>
        </tr>
        <tr>
          <td>HOST</td>
          <td>Backend / Servidor</td>
          <td>Dirección IP o nombre del host donde corre tu aplicación.</td>
        </tr>
        <tr>
          <td>BASE_PATH</td>
          <td>Backend / Routing</td>
          <td>Ruta base bajo la cual se monta tu aplicación (ej: <code>/api</code>, <code>/app</code>).</td>
        </tr>
        <tr>
          <td>URL_FRONTEND</td>
          <td>Integración Frontend</td>
          <td>URL completa donde se encuentra desplegado el frontend.</td>
        </tr>
        <tr>
          <td>URL_BACKEND</td>
          <td>Integración Backend</td>
          <td>URL completa donde se encuentra desplegado el backend o API.</td>
        </tr>
        <tr>
          <td>FIREPLOY_HOST</td>
          <td>Infraestructura</td>
          <td>Host relacionado con Fireploy.</td>
        </tr>
        <tr>
          <td>DB_DATABASE</td>
          <td>Base de Datos</td>
          <td>Nombre de la base de datos a la que tu aplicación se conectará.</td>
        </tr>
        <tr>
          <td>DB_PORT</td>
          <td>Base de Datos</td>
          <td>Puerto que usa el servidor de base de datos para aceptar conexiones.</td>
        </tr>
        <tr>
          <td>DB_HOST</td>
          <td>Base de Datos</td>
          <td>Dirección del servidor donde está alojada la base de datos.</td>
        </tr>
        <tr>
          <td>DB_USER</td>
          <td>Base de Datos</td>
          <td>Usuario con permisos para acceder a la base de datos.</td>
        </tr>
        <tr>
          <td>DB_PASSWORD</td>
          <td>Base de Datos</td>
          <td>Contraseña del usuario especificado en <code>DB_USER</code>.</td>
        </tr>
        <tr>
          <td>DB_CONNECTION_URI</td>
          <td>Base de Datos (MongoDB)</td>
          <td>URI completa de conexión a MongoDB (usuario, contraseña, host, base de datos).</td>
        </tr>
      </tbody>
    </table>

Estas variables deben ser incorporadas en tu código con los propositos previstos para el correcto funcionamiento de Fireploy. Para protección de la seguridad de los datos, se dispone de un espacio para subir archivos que por motivos de seguridad no pueden ser públicos en los repositorios.

:::caution Configuraciones Extra
  Algunos frameworks pueden requerir modificar valores adicionales, por ejemplo React requiere agregar una sección de código en el archivo `vite_config`.

  Para más información sobre estas configuraciones extra visita [configuraciones previas](https://app103.proyectos.fireploy.online/docs/estudiante/usuario-general/proyectos/proceso-de-despliegue/configuraciones-previas/).
:::
