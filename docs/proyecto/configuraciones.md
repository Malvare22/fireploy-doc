# Configuraciones

En este apartado únicamente se detallan únicamente aquellas librerías y frameworks que requieran de configuraciones especiales. El proceso de configuración de las bases de datos es general y se mira con detalle en la sección [bases de datos]("/docs/proyecto/bases-de-datos.md").

## Configuraciones básicas

### 1. React

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

### 2. Java Web con Maven

Para la lectura de variables de entorno se requiere de la siguiente dependencia:

```
    <dependency>
      <groupId>io.github.cdimascio</groupId>
      <artifactId>java-dotenv</artifactId>
      <version>5.2.2</version>
    </dependency>
```

Más información disponible en [github de dotenv-java](https://github.com/cdimascio/dotenv-java)


### 3. SpringBoot

Requiere configurarse el archivo `application.properties`:

``` title='application.properties'
    spring.application.name=Plantilla
    server.port=${PORT}
```

### Conexiones entre capas

La variable de entorno **FIREPLOY_BACKEND** almacena la URL de referencia al backend relacionado al proyecto. Para hacer uso de este simplemente la llamamos en donde nos resulte indispensable, por ejemplo:

```javascript title='ejemplo_conexion_backend'
  const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.FIREPLOY_BACKEND as string,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
```
De igual manera se manejaría la variable **FIREPLOY_FRONTEND**.