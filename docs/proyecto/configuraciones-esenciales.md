# Configuraciones esenciales

En este apartado se define toda la configuración especial necesaria para el correcto funcionamiento de un proyecto desplegado en Fireploy.

## Variables de entorno

### Variables de entorno especiales

Fireploy cuenta con una serie de variables de entorno vitales para el funcionamiento del proyecto dentro del sistema, es por esto que al momento de desplegar un proyecto, no deben ser declarada ninguna variable que coincida con el nombre de alguna. No obstante, sí es necesario realizar su llamado previo al despliegue.

#### Generales

| Variable        | ¿Para qué sirve?                                                                 |
|-----------------|----------------------------------------------------------------------------------|
| PORT            | Puerto en el que el servidor de tu aplicación backend escuchará las peticiones. |
| HOST            | Dirección IP o nombre del host donde corre tu aplicación.                        |
| BASE_PATH       | Ruta base bajo la cual se monta tu aplicación (ej: `/api`, `/app`).              |
| URL_FRONTEND    | URL completa donde se encuentra desplegado el frontend.                          |
| URL_BACKEND     | URL completa donde se encuentra desplegado el backend o API.                     |
| FIREPLOY_HOST   | Host relacionado con Fireploy.   |


#### Bases de datos

| Variable       | ¿Para qué sirve?                                                                 |
|----------------|----------------------------------------------------------------------------------|
| DB_DATABASE    | Nombre de la base de datos a la que tu aplicación se conectará.                 |
| DB_PORT        | Puerto que usa el servidor de base de datos para aceptar conexiones.            |
| DB_HOST        | Dirección del servidor donde está alojada la base de datos.                     |
| DB_USER        | Usuario con permisos para acceder a la base de datos.                           |
| DB_PASSWORD    | Contraseña del usuario especificado en `DB_USER`.                               |
| DB_CONNECTION_URI   | URI completa de conexión a MongoDB (usuario, contraseña, host, base de datos). |

:::caution Variaciones de Sintaxis
  Los frameworks y librerías que requieran de una sintaxis especial, se encuentran sujetos de la restricción de las variables mencionadas con anterior pero adaptadas a la sintaxis exigida. Por ejemplo: **NEXT_PUBLIC_PORT**, se encuentra prohibida.
:::


## Conexiones entre capas

La variable de entorno **FIREPLOY_BACKEND** almacena la URL de referencia al backend relacionado al proyecto. Para hacer uso de este simplemente la llamamos en donde nos resulte indispensable, por ejemplo en una consulta con **AXIOS**:

```javascript title='ejemplo_conexion_backend'
  const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.FIREPLOY_BACKEND as string,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
```
De igual manera se manejaría la variable **FIREPLOY_FRONTEND** para la conexión con el Frontend.

## Configuraciones por Framework

### React

Modificamos el archivo `vite.config.js`, indicando que utilice las variables de entorno **VITE_PORT** y **VITE_FIREPLOY_HOST**, quedando de la siguiente forma:

```javascript title='vite.confi.js'
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT),
      host: true,
      cors: true,
      allowedHosts: [env.VITE_FIREPLOY_HOST],
    },
    preview: {
      port: parseInt(env.VITE_PORT),
      host: true,
      cors: true,
      allowedHosts: [env.VITE_FIREPLOY_HOST],
    },
  });
};
```

### Java Web con Maven

Para la lectura de variables de entorno es recomendable el uso de **Java-dontenv**:

```
    <dependency>
      <groupId>io.github.cdimascio</groupId>
      <artifactId>java-dotenv</artifactId>
      <version>5.2.2</version>
    </dependency>
```

Más información disponible en [github de dotenv-java](https://github.com/cdimascio/dotenv-java)


### SpringBoot

Modificamos el archivo `application.properties`, estableciéndole al programa que escuche el puerto de la variable especial `PORT`:

``` title='application.properties'
    spring.application.name=Plantilla
    server.port=${PORT}
```
