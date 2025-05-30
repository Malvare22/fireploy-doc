# Variables de Entorno

Se dispone de un editor online para el ingreso de las varias de entorno. No obstante, el sistema requiere restringir ciertas variables.

## Variables Restringidas

Ningún repositorio al momento de su configuración puede hacer uso de las siguientes variables de entorno:

    PORT, HOST, BASE_PATH, URL_FRONTEND, URL_BACKEND, FIREPLOY_HOST

En caso de usarse alguna de las tecnologías de base de datos que ofrece el sistema, se restringen la definición de las siguientes variables de entorno:

|Tecnología |Variables Restringidas                               |
|-----------|-----------------------------------------------------|
| SQL       | DB_DATABASE, DB_PORT, DB_HOST, DB_USER, DB_PASSWORD |
| MongoDB   | DB_CONNECTION_URI                                   |

:::caution Variaciones de Sintaxis
  Los frameworks y librerías que requieran de una sintaxis especial, se encuentran sujetos de la restricción de las variables mencionadas con anterior pero adaptadas a la sintaxis exigida. Por ejemplo: **NEXT_PUBLIC_PORT**, se encuentra prohibida.
:::