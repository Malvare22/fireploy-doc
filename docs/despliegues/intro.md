# Introducción

### ¿Qué es un Despliegue?
Un **despliegue** (deployment) es el proceso mediante el cual una aplicación, servicio o sistema se **pone en funcionamiento en un entorno específico** (servidor, nube, contenedor, etc.).  
El despliegue incluye:
- Copiar el código de la aplicación al servidor o instancia.
- Configurar dependencias (bases de datos, librerías, servicios externos).
- Asegurar que la aplicación pueda ejecutarse correctamente.
- Monitorear su estado y garantizar su disponibilidad.

---

### ¿Qué es DevOps?
**DevOps** es una cultura y conjunto de prácticas que une a **Desarrollo (Dev)** y **Operaciones (Ops)** con el objetivo de:
- Automatizar procesos de construcción, pruebas y despliegues.
- Reducir errores manuales.
- Acelerar la entrega de software a los usuarios.
- Garantizar confiabilidad, escalabilidad y seguridad en los sistemas.

Se apoya en:
- **Integración Continua (CI)**: cada cambio de código se integra y prueba automáticamente.
- **Entrega/Despliegue Continuo (CD)**: los cambios validados se despliegan de forma automática y segura.
- **Infraestructura como código (IaC)**: gestionar servidores y redes con herramientas declarativas (ej. Terraform, Ansible).
- **Monitoreo y retroalimentación continua**: detectar problemas y mejorar procesos.

---

## Relación entre Despliegue y DevOps
- El **despliegue** es la acción de llevar software al entorno de producción o pruebas.  
- **DevOps** es la filosofía y el conjunto de herramientas que hacen que ese despliegue sea:
  - Más rápido
  - Más seguro
  - Más repetible
  - Más confiable  

---

En los siguientes apartados, aplicaremos estos conceptos directamente a **Google Cloud (Compute Engine)** para ver **cómo crear instancias y desplegar aplicaciones** siguiendo buenas prácticas de DevOps, es necesario mencionar que los diferentes proveedores de servicios en la nube, suelen seguir algunos esquemas y procesos de manera general.
