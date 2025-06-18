# [ADMIN] Módulo de Administración de Usuarios

El sistema permite a los administradores gestionar los usuarios registrados en el aplicativo. Desde esta sección es posible visualizar los usuarios, activar, desactivar y realizar carga masiva de registros.

:::note Importante
Solo los usuarios con el rol de **administrador** tienen acceso a este módulo.
:::

## Funcionalidades

- Visualización de usuarios registrados
- Activación / desactivación de usuarios
- Carga masiva de usuarios desde archivo Excel (.xlsx)

## Navegación

1. Inicia sesión con un usuario administrador.
2. En la barra lateral, selecciona **Usuarios**.
3. El sistema muestra las siguientes opciones:
   - Listar usuarios
   - Carga masiva de usuarios

---

# Listar usuarios

En esta sección puedes visualizar todos los usuarios del sistema en formato de tabla.

## Campos mostrados en la tabla

| Campo | Descripción |
| ----- | ----------- |
| Nombre completo | Nombre del usuario |
| Correo electrónico | Correo asociado al usuario |
| Rol | Rol del usuario (Estudiante, Docente, Administrador) |
| Estado | Activo / Inactivo |
| Acciones | Habilitar / Deshabilitar |

# Activar o desactivar usuarios

Los usuarios pueden ser activados o desactivados desde la tabla de usuarios.

## Cómo deshabilitar un usuario

1. En la fila del usuario deseado, pulsa el botón **Deshabilitar**.
2. Se mostrará un modal de confirmación:


3. Si confirmas la acción, el usuario quedará inhabilitado y no podrá acceder al sistema.

---

# Carga masiva de usuarios

Desde esta opción puedes importar múltiples usuarios al sistema mediante un archivo en formato **Excel (.xlsx)**.

## Requisitos del archivo Excel

:::info Formato del archivo
El archivo debe contener las siguientes columnas:
:::

| Columna | Descripción |
| ------- | ----------- |
| Nombre completo | Nombre del usuario |
| Correo electrónico | Email de usuario |
| Rol | Estudiante / Docente / Administrador |

### Ejemplo de archivo

```markdown
| Nombre completo | Correo electrónico     | Rol          |
| ----------------|------------------------|--------------|
| Ana Gómez       | ana.gomez@correo.com    | Estudiante   |
| Pedro Martínez  | pedro.martinez@correo.com| Docente      |
