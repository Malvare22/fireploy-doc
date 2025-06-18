# Errores en despliegues

Al momento de realizar el despliegue de un aplicativo pueden presentarse alguno de los siguientes errores:

| Código de error | Descripción                                                                 |
|-----------------|-----------------------------------------------------------------------------|
| 000             | Falta información en el repositorio (tecnología, URL, versión, framework)    |
| 001             | El repositorio no se encuentra accesible o sigue una estructura no permitida |
| 002             | El lenguaje de programación no se encuentra soportado por Fireploy          |
| 003             | Error al ejecutar el Docker                                                 |
| 004             | Error al generar el Docker Compose                                          |
| 005             | Error al recargar el Nginx                                                  |
| 006             | La información de base de datos se encuentra incompleta (nombre, usuario o contraseña)  |
| 007             | Error creando la base de datos SQL                                          |
| 008             | Error deteniendo un container                                               |
| 009             | Error iniciando un container                                                |
| 010             | Error deteniendo un Compose                                                 |
| 011             | Error iniciando un Compose                                                  |
| 012             | Error creando la base de datos NoSQL                                        |
| 013             | Error creando la base de datos Postgres                                     |
| 014             | Error creando la base de datos MariaDB                                      |
| 015             | La imagen se crea pero falla al crear el contenedor                         |
