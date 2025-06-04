# Introducción

Los proyectos son la piedra angular de Fireploy, son conformados por metadatos y los repositorios con sus correspondientes configuraciones. La información administrable de un proyecto ha sido dividida en las siguientes secciones. Primeramente visualizaremos la información general.

## Información preliminar

### Información General

Se disponen de los siguientes campos que pueden describirse sin la necesidad de conocimientos técnicos:

| Nombre del proyecto                                | Descripción | Materia | Curso | Actividad |
| -------------------------------------------------- | ----------- | ------- |-------|-----------|
| Un texto con una longitud máxima de 50 caracteres  | Un texto con una longitud máxima de 512 caracteres   | La materia donde se encuentra el grupo al que se va a vincular el proyecto    | El curso donde se encuentra activa la actividad a la que se va a vincular | La actividad a vincular |

No obstante los proyectos se pueden catalogar por "Tipo de proyecto", que requiere tener claro ciertos conceptos previos que ya se comentarán.

### Tipo de proyecto

Los tipos de proyecto permitidos en Fireploy se catalogan cómo "Dos Capas" o "Software Completo". Definiéndose el primero como aquellos que presenten dos repositorios (uno enfocado al Frontend y otro al Backend).

![arquitectura dos capas](image-2.png)

Por otra parte es "Software Completo", aquel que maneje el concepto de monolito, es decir, tanto su lógica de vistas como backend se encuentren definidos en la misma capa. Un buen ejemplo de esto es un software que maneje estos dos aspectos con **Laravel**:

![arquitectura software completo](image-4.png)

Si se quiere ser más minucioso en dichas definiciones, estas no se rigen por completo en los conceptos básicos de arquitectura de software, ya que no se contempla la capa de datos. La configuración de esto se aprecia con detalle en el apartado [bases de datos](/docs/proyecto/bases-de-datos)


## Información de repositorios

Fireploy soporta el despliegue en varias tecnologías y frameworks. Esta información se detalla en el apartado de [tecnologías soportadas](/docs/proyecto/tecnologias-soportadas.md). El número de repositorios de un proyecto va en función de su tipo, para cada repositorio se gestiona:

### Código del proyecto

El sistema requiere clonar los datos de un repositorio, para ello se debe ingresar la dirección URL respectiva. No obstante, se tiene la posibilidad de cargar directamente un archivo ".zip" con la información del respectivo repositorio del proyecto, en este caso Fireploy realizará la creación de un repositorio en la plataforma de GitHub, para el montaje de los datos del archivo ingresado.

:::danger[Peligro]

Los archivos ".zip", deben constar de la raíz del proyecto sin carpetas intermedias.

:::

### Framework del repositorio

Corresponde al framework o tecnología en la que se desarrolló el código de dicho repositorio del proyecto. Las tecnologías y frameworks soportados por Fireploy, así como su correspondiente configuración para el despliegue, se encuentra detallada en el apartado [tecnologías y frameworks](/docs/proyecto/tecnologias-y-frameworks.md) y [configuración de tecnologías y framework](/docs//proyecto/configuraciones.md) correspondientemente.

### Variables de entorno

Son valores dinámicos que permiten personalizar el comportamiento de una aplicación o proceso en diferentes entornos (desarrollo, pruebas, producción) sin modificar el código fuente. Sirven para almacenar configuraciones específicas de cada entorno, como claves de API, cadenas de conexión a bases de datos, o incluso para activar o desactivar ciertas funcionalidades. Este apartado presenta limitantes que son detalladas en el apartado de [variables de entorno restringidas](/docs/proyecto/variables-restringidas.md).

### Archivos de configuración

Al igual que las variables de entorno existen otros archivos que por diferentes motivos no deben ser visibles en el repositorio de un proyecto. Por ejemplo la configuración de un servicio de Firebase, Fireploy considera a estos archivos: "Activos de configuración".

### Archivos LOGS

Son archivos de texto que almacenan información detallada sobre las actividades de un sistema, aplicación o servidor. Registran eventos, errores y otros datos relevantes para el análisis y la solución de problemas, así como para la supervisión y el mantenimiento del sistema. Fireploy captura estos datos por cada repositorio del proyecto al momento de realizar un despliegue.

## Base de datos

Fireploy brinda el servicio de alojamiento de bases de datos, no obstante, es completamente opcional usar este servicio. Para más detalles ve al apartado de [bases de datos](/docs/proyecto/bases-de-datos.md).

## Colaboradores de un proyecto

La configuración de un proyecto puede ser modificada por una lista usuarios que el dueño del proyecto gestione. La gestión de estos se ve con más detalle en el apartado XXXXXXXX.

![colaboradores proyecto](image.png)




    

