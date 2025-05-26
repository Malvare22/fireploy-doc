# Introducción

Los proyectos son la piedra angular de Fireploy, son conformados por metadatos y los repositorios con sus correspondientes configuraciones. La información administrable de un proyecto ha sido dividida en las siguientes secciones:

### Información General


| Nombre del proyecto                                | Descripción | Materia | Curso | Actividad |
| -------------------------------------------------- | ----------- | ------- |-------|-----------|
| Un texto con una longitud máxima de 50 caracteres  | Un texto con una longitud máxima de 512 caracteres   | La materia donde se encuentra el grupo al que se va a vincular el proyecto    | El curso donde se encuentra activa la actividad a la que se va a vincular | La actividad a vincular |

A su vez existe un campo `Tipo de Proyecto`, indica si se trata de un proyecto que consta de una o dos capaz. Por ejemplo, se trate de un proyecto dos capas una tienda online que conste de un frontend y un backend de manera separada,.

### Información de Repositorio

Fireploy soporta el despliegue en varias tecnologías y frameworks. Esta información se detalla en el apartado de `Tecnologías disponibles`. Teniendo esto en cuenta, deben asignarse a un proyecto uno o dos repositorios (depende del campo tipo de proyecto de la sección #información general), para cada repositorio se gestiona:

#### 1. Código del proyecto

El sistema requiere clonar los datos de un repositorio, para ello se debe ingresar la dirección URL respectiva. No obstante, se tiene la posibilidad de cargar directamente un archivo ".zip" con la información del respectivo repositorio del proyecto, en este caso Fireploy realizará el montaje de un repositorio en la plataforma de GitHub, para el montaje de los datos del archivo ingresado.

:::danger[Peligro]

Los archivos ".zip", deben constar de la raíz del proyecto sin carpetas intermedias.

:::

#### 2. Variables de Entorno

Se dispone de un editor online para el ingreso de las varias de entorno. No obstante, el sistema requiere restringir ciertas variables:

##### 2.1. Variables Restringidas

Ningún repositorio al momento de su configuración puede hacer uso de las siguientes variables de entorno:

    PORT, HOST, BASE_PATH, URL_FRONTEND, URL_BACKEND

En caso de usarse alguna de las tecnologías de base de datos que ofrece el sistema, se restringen:

|Tecnología |Variables Restringidas                               |
|-----------|-----------------------------------------------------|
| SQL       | DB_DATABASE, DB_PORT, DB_HOST, DB_USER, DB_PASSWORD |
| MongoDB   | DB_CONNECTION_URI                                   | 

##### 2.2. Tecnología y Framework

Para Fireploy es indispensable en que tecnología y frameworks está desarrollado el repositorio correspondiente. Para información de las tecnologías y frameworks disponibles, mira el apartado de `Tecnologías`.

### Colaboradores de un proyecto

La configuración de un proyecto puede ser modificada por una lista usuarios que el dueño del proyecto gestione. Más información en el apartado `Colaboradores`.

![colaboradores proyecto](image.png)

### Archivos LOGS

Son los archivos de registro, información obtenida de las consolas de ejecución de las capas del proyecto al momento de una `gestión de estado de un proyecto`. Más información en `Archivos Logs`.


    

