# Introducción

Las materias son un elemento organizativo para la agrupación de cursos, a su vez, los cursos poseen un grupo de secciones, en los cuales vinculan los diferentes proyectos desplegados en el aplicativo.

Los atributos de una materia se organizan de la siguiente manera a nivel de vistas:

| Id                                              | Nombre                            | Semestre                                 | Grupos                         | Estado            |
| ----------------------------------------------- | --------------------------------- | ---------------------------------------- | ------------------------------ | ----------------- |
| Un valor numérico que diferencia a cada materia | Texto no superior a 50 caracteres | Valor numérico entre el intervalo [1-10] | Varios valores de tipo `Grupo` | Activo o Inactivo |

El valor de Id es inmutable y se asigna de manera automática por el sistema.
