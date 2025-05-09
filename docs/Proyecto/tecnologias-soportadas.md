# Tecnologías soportadas

Fireploy posee un número limitado de tecnologías disponibles para despliegue, existen algunas que requieren una sintaxis especial para sus variables de entorno.

## Frontend

### ReactJS

Se soporta ReactJS en conjunto con la herramienta de compilación Vite.

Debido a la incorporación de Vite, resulta indispensable agregar el prefijo `VITE` a cualquier variable de entorno. Por ejemplo si se quisiese añadir una variable NOMBRE_UNIVERSIDAD, quedaría de la siguiente manera:

```
    VITE_NOMBRE_UNIVERSIDAD = Universidad Francisco de Paula Santander
```

Para realizar el llamado a la variable de entorno usamos la siguiente notación `import.meta.env.NOMBRE_VARIABLE`:

```
    function printUniversity(){
        console.log(import.meta.env.VITE_NOMBRE_UNIVERSIDAD)
    }
```

### Angular

Se soporta ReactJS en conjunto con la herramienta de compilación Vite.

Debido a la incorporación de Vite, resulta indispensable agregar el prefijo `VITE` a cualquier variable de entorno. Por ejemplo si se quisiese añadir una variable NOMBRE_UNIVERSIDAD, quedaría de la siguiente manera:

```
    VITE_NOMBRE_UNIVERSIDAD = Universidad Francisco de Paula Santander
```