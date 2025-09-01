---
title: Haz tu despliegue con Fireploy
authors: [malaver]
tags: [tutorial]
---

<!-- truncate -->

El despliegue de un proyecto se refiere al proceso de poner una aplicación en un entorno donde pueda ser usada por los usuarios finales. Esto incluye configurar servidores, bases de datos, variables de entorno y garantizar que todas las capas del proyecto funcionen correctamente.

Este tutorial acompaña al video incluido a continuación y ofrece un resumen general de los pasos presentados. Aquí se describen de manera organizada y detallada los elementos más importantes que se deben considerar durante el despliegue con Fireploy.

<div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <div className="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/T0w71iHVO10?si=rdLNJlvmMk1tc8xq"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <style>
        {`
          .video-wrapper {
            position: relative;
            width: 100%;
            max-width: 720px; /* breakpoint en escritorio */
            aspect-ratio: 16 / 9;
          }

          .video-wrapper iframe {
            width: 100%;
            height: 100%;
            border-radius: 12px;
          }

          @media (max-width: 768px) {
            .video-wrapper {
              max-width: 100%; /* en móvil ocupa todo */
            }
          }
        `}
      </style>

---

Antes de iniciar el proceso de despliegue en **Fireploy**, es importante tener en cuenta una serie de configuraciones especiales que aseguran el correcto funcionamiento de cada proyecto. Estas consideraciones permiten manejar de forma ordenada las **variables de entorno**, las **conexiones entre capas**, la **configuración de bases de datos** y las **particularidades de cada framework**.

## Consideraciones Previas para el Despliegue en Fireploy

### Ingresar a un curso con actividades

:::note Requisitos
    Necesitas disponer de un curso con una actividad en estado "activo" para vincular el proyecto
:::

En caso de que aún no te encuentres registrado en una materia, hacemos los siguiente:

1. **Accede al explorar materias**
   - Desde el menú principal, ve a **Materia → Cursos**.
   - Verás el listado de cursos disponibles en tu organización/academia.
2. **Abre el curso**
   - Haz clic en el nombre del curso para ver su detalle.
   - En la pestaña **Actividades**, confirma que exista al menos una actividad con el estado **Activo**.
3. **Regístrate al curso**
   - Presiona **Registrarme** (o **Unirme**).

---

## 1. Configurar proyecto

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

### Servicio de bases de datos

Fireploy posee un servicio de base de datos propio completamente opcional. Solo debes llamar dichas variables en los campos correspondientes de la conexión. Si no deseas usar este servicio, no uses las variables especiales referentes a este servicio.

Actualmente lo permitimos en distintos motores: **MongoDB, PostgreSQL, MariaDB y MySQL**.

## 2. Registrar proyecto en el aplicativo

Ingresamos la información superficial del aplicativo, definiendo su número de capas: 1 capa (monolíto) o 2 dos capas (separación frontend y backend).

| Campo              | Descripción                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| **Nombre del proyecto** | Nombre identificador de tu proyecto. Ejemplo: `Prueba dos capas`. |
| **Descripción**        | Breve explicación del objetivo del proyecto (opcional pero recomendable). |
| **Materia**            | Selecciona la materia a la que pertenece tu curso. |
| **Curso**              | Escoge el curso específico en el que estás inscrito (ej. `2025-1`). |
| **Actividad**          | Selecciona la actividad activa del curso en la que se registrará el proyecto. |
| **Tipo de proyecto**   | Define la plantilla de despliegue. Ejemplo: `Software Dos Capas`. |

Al completar los campos, haz clic en **Siguiente** para continuar con el **registro de proyectos**.

:::tip Recomendación
  - Usa un **nombre descriptivo** para que sea fácil identificar tu proyecto en el listado.  
- Si estás haciendo pruebas, agrega un prefijo como `Test-` o `Demo-`.  
:::

## 3. Repositorios del proyecto

- **Cargar contenido:** Puedes subir tu código comprimido o enlazarlo desde GitHub/GitLab.
- **Seleccionar tecnología y framework:** Esto permite que Fireploy configure automáticamente el entorno adecuado.
- **Archivos adicionales:** Los archivos sensibles, como `.env` o configuraciones de Firebase, deben subirse aparte porque **no deben estar en repositorios públicos**. Esto protege credenciales, claves y datos confidenciales, evitando accesos no autorizados.

## 4. Base de datos (opcional)

Si decides usar el servicio de base de datos de Fireploy:

### Generar usuario y contraseña
- Crea un usuario específico para tu proyecto y define su contraseña. 
- Asigna permisos adecuados para evitar que un usuario tenga acceso a datos no necesarios.

### Conectarse a la base de datos
- Puedes usar **TablePlus** o cualquier cliente compatible. 
- Configura la variable de entorno `DB_CONNECTION_URI` para que tu aplicación pueda conectarse automáticamente.

#### Estructura de la URI
```
mongodb://usuario:contraseña@host:puerto/nombre_base_datos
```
- `usuario` → DB_USER
- `contraseña` → DB_PASSWORD
- `host` → DB_HOST
- `puerto` → DB_PORT
- `nombre_base_datos` → DB_DATABASE

#### Ejemplo
```
mongodb://fireployUser:Secreta123@db.fireploy.com:27017/miProyectoDB
```
:::tip Recomendación

Siempre protege la URI y las credenciales asociadas. Nunca las incluyas en repositorios públicos ni en el código fuente compartido.

:::

## 5. Sincronizar proyecto

- Presiona el botón **Sincronizar proyecto** en el panel de Fireploy. 
- Fireploy desplegará tu aplicación, configurará las capas según el tipo de proyecto y conectará la base de datos si configuraste `DB_CONNECTION_URI`.
- Este proceso puede tardar algunos minutos, dependiendo del tamaño del proyecto y la base de datos.

## 6. Acceder a la URL del Backend

- La URL del backend se genera automáticamente. 
- Para acceder a la API, reemplaza `app` por `api` en la URL. 
  ```
  https://app-miProyecto.fireploy.com → https://api-miProyecto.fireploy.com
  ```
- Con esta URL, tu frontend o clientes externos podrán interactuar con la API desplegada.

:::tip Recomendación
Verifica que todas las variables de entorno estén correctas antes de sincronizar para evitar errores en producción.
:::




