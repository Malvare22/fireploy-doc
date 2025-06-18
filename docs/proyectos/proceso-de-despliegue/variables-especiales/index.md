# Variables de entorno especiales

Fireploy cuenta con una serie de variables de entorno vitales para el funcionamiento del proyecto dentro del sistema, es por esto que al momento de desplegar un proyecto, no deben ser declarada ninguna variable que coincida con el nombre de alguna. No obstante es necesario realizar su llamado previo al despliegue.

:::caution Variaciones de Sintaxis
  Los frameworks y librerías que requieran de una sintaxis especial, se encuentran sujetos de la restricción de las variables mencionadas con anterior pero adaptadas a la sintaxis exigida. Por ejemplo: **NEXT_PUBLIC_PORT**, se encuentra prohibida.
:::

## Generales

| Variable        | ¿Para qué sirve?                                                                 |
|-----------------|----------------------------------------------------------------------------------|
| PORT            | Puerto en el que el servidor de tu aplicación backend escuchará las peticiones. |
| HOST            | Dirección IP o nombre del host donde corre tu aplicación.                        |
| BASE_PATH       | Ruta base bajo la cual se monta tu aplicación (ej: `/api`, `/app`).              |
| URL_FRONTEND    | URL completa donde se encuentra desplegado el frontend.                          |
| URL_BACKEND     | URL completa donde se encuentra desplegado el backend o API.                     |
| FIREPLOY_HOST   | Host relacionado con Fireploy.   |


## Bases de datos

| Variable       | ¿Para qué sirve?                                                                 |
|----------------|----------------------------------------------------------------------------------|
| DB_DATABASE    | Nombre de la base de datos a la que tu aplicación se conectará.                 |
| DB_PORT        | Puerto que usa el servidor de base de datos para aceptar conexiones.            |
| DB_HOST        | Dirección del servidor donde está alojada la base de datos.                     |
| DB_USER        | Usuario con permisos para acceder a la base de datos.                           |
| DB_PASSWORD    | Contraseña del usuario especificado en `DB_USER`.                               |
| DB_CONNECTION_URI   | URI completa de conexión a MongoDB (usuario, contraseña, host, base de datos). |

