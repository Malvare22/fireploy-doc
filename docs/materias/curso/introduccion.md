# Introducción

## ¿Qué es un curso?

Los cursos son grupos administrados principalmente por un usuario de tipo docente. Son fundamentales para vincular los proyectos de un estudiante con un curso del programa académico de su carrera.

## Estructura visual

| Id                                     | Descripción                                                | Semestre                                           | Estado                    | Docente | Estudiantes                                  | Secciones                          |
|---------------------------------------|------------------------------------------------------------|---------------------------------------------------|---------------------------|---------|----------------------------------------------|-------------------------------------|
| Es una letra identificadora del curso | Un texto descriptivo del contenido del curso, no superior a 512 caracteres | Usuario de tipo docente que administra el curso   | El estado actual (Habilitado o Deshabilitado) | Docente encargado de la administración del curso | Grupo de usuarios de tipo Estudiantes| Una agrupación de tipo [Sección](#sección)|

:::note[Nota]

Un curso puede crearse sin la necesidad de vincularle un docente

:::

## Sección

Corresponden a agrupaciones de proyectos, las cuales permiten a un estudiante tener más de un proyecto vinculado a un curso, y son útiles para que el docente tenga un orden de los diferentes proyectos de su curso.

| Id | Título | Descripción | Fecha de Inicio | Fecha de Cierra | Proyectos |
|----------|----------|----------|----------|----------|----------|
| Es el identificador único de la sección, es asignado automáticamente por el sistema e inmutable | Texto referente al encabezado de la sección, no puede ser superior a 50 caracteres | Un texto descriptivo del contenido de la sección, no superior a 512 caracteres  | Fecha desde la que se permite la vinculación de proyectos a esta sección | Fecha hasta la que se permite la vinculación de proyectos a esta sección | Un grupo de `Proyectos` |
