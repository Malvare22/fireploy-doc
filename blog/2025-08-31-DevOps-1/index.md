---
title: "Repaso: Introducción despliegue, DevOps y Computación en la Nube"
authors: [malaver]
tags: [tutorial]
---

<!-- truncate -->

# Repaso: despliegue, DevOps y Computación en la Nube

## Introducción

En la actualidad, desplegar aplicaciones y servicios en la nube es una habilidad esencial para desarrolladores y equipos de operaciones. En este artículo, exploraremos **qué es un despliegue**, la filosofía **DevOps**, los conceptos de **computación en la nube** y los principales **proveedores de servicios en la nube**, con un enfoque práctico para aplicar buenas prácticas en entornos modernos.

---

## ¿Qué es un Despliegue?

Un **despliegue** (deployment) es el proceso mediante el cual una aplicación, servicio o sistema se **pone en funcionamiento en un entorno específico** (servidor, nube, contenedor, etc.).  

El despliegue incluye:

- Copiar el código de la aplicación al servidor o instancia.  
- Configurar dependencias (bases de datos, librerías, servicios externos).  
- Asegurar que la aplicación pueda ejecutarse correctamente.  
- Monitorear su estado y garantizar su disponibilidad.

---

## ¿Qué es DevOps?

**DevOps** es una cultura y conjunto de prácticas que une a **Desarrollo (Dev)** y **Operaciones (Ops)** con el objetivo de:

- Automatizar procesos de construcción, pruebas y despliegues.  
- Reducir errores manuales.  
- Acelerar la entrega de software a los usuarios.  
- Garantizar confiabilidad, escalabilidad y seguridad en los sistemas.

Se apoya en conceptos clave:

- **Integración Continua (CI):** cada cambio de código se integra y prueba automáticamente.  
- **Entrega/Despliegue Continuo (CD):** los cambios validados se despliegan de forma automática y segura.  
- **Infraestructura como código (IaC):** gestionar servidores y redes con herramientas declarativas (ej. Terraform, Ansible).  
- **Monitoreo y retroalimentación continua:** detectar problemas y mejorar procesos.

---

## Relación entre Despliegue y DevOps

- El **despliegue** es la acción de llevar software al entorno de producción o pruebas.  
- **DevOps** es la filosofía y el conjunto de herramientas que hacen que ese despliegue sea:  
  - Más rápido  
  - Más seguro  
  - Más repetible  
  - Más confiable  

En los siguientes apartados, aplicaremos estos conceptos a **Google Cloud (Compute Engine)** y a otros proveedores de nube, mostrando cómo crear instancias y desplegar aplicaciones siguiendo buenas prácticas DevOps.

---

## Computación en la Nube

### ¿Qué es la Computación en la Nube?

La **computación en la nube (Cloud Computing)** es un modelo que permite acceder a recursos tecnológicos (servidores, almacenamiento, bases de datos, redes, software, etc.) a través de internet, bajo demanda y pagando solo por lo que se usa.  

En lugar de comprar y mantener servidores físicos, los equipos usan **infraestructura remota gestionada por un proveedor de nube** (como Google Cloud, AWS o Azure).

---

### Modelos de Servicio

| Modelo        | Descripción                                                                 | Responsabilidad del Proveedor                     | Responsabilidad del Cliente                      | Ejemplos                 |
|---------------|-----------------------------------------------------------------------------|--------------------------------------------------|-------------------------------------------------|--------------------------|
| **IaaS** (Infrastructure as a Service) | Proporciona infraestructura básica: servidores, redes, almacenamiento. | Hardware, virtualización, red, almacenamiento.   | Sistema operativo, aplicaciones, datos, seguridad. | AWS EC2, Google Compute Engine, Azure VM |
| **PaaS** (Platform as a Service)       | Ofrece una plataforma lista para desarrollar, desplegar y administrar apps. | Hardware, red, SO, middleware, runtime.          | Aplicaciones y datos.                           | Heroku, Google App Engine, AWS Elastic Beanstalk |
| **SaaS** (Software as a Service)       | Aplicaciones listas para usar, accesibles por internet.                     | Toda la infraestructura, seguridad, software.    | Uso de la aplicación y gestión de datos.         | Gmail, Dropbox, Salesforce, Microsoft 365 |
| **FaaS** (Functions as a Service / Serverless) | Ejecuta funciones bajo demanda sin preocuparse de servidores. | Infraestructura, escalado automático, ejecución. | Código de las funciones y su lógica de negocio. | AWS Lambda, Google Cloud Functions, Azure Functions |

---

## Principales Proveedores de Nube

En la actualidad, los servicios en la nube son fundamentales para la transformación digital de empresas y organizaciones. Estos servicios permiten acceder a recursos de infraestructura, plataformas y aplicaciones a través de internet, eliminando la necesidad de mantener hardware físico costoso y ofreciendo mayor **flexibilidad, escalabilidad y seguridad**.

### Amazon Web Services (AWS)

Es el líder del mercado y ofrece servicios bajo modelos IaaS, PaaS, SaaS y FaaS. Sus soluciones más destacadas incluyen **EC2**, **S3**, **RDS** y **Lambda**. Su principal ventaja es la gran escalabilidad y cobertura global.

### Microsoft Azure

Reconocido por su integración con entornos empresariales de Microsoft. Ofrece **Azure Virtual Machines**, **Azure SQL Database**, **Azure Functions** y **Power BI**. Ideal para organizaciones que ya usan el ecosistema Microsoft.

### Google Cloud Platform (GCP)

Se destaca en **análisis de datos**, **inteligencia artificial** y **machine learning**, con tecnologías como **BigQuery**, **Cloud Storage**, **Compute Engine** y **Cloud Functions**. Es competitivo en proyectos de big data y analítica avanzada.

### IBM Cloud

Enfocado en **IA (Watson)**, **blockchain** y **Kubernetes administrado**, además de sus **Cloud Pak** para industrias específicas. Atractivo para sectores regulados como salud y finanzas.

### Oracle Cloud Infrastructure (OCI)

Especializado en bases de datos y aplicaciones empresariales. Servicios clave: **Oracle Autonomous Database**, **OCI Compute** y **Fusion Cloud Apps**.

### Alibaba Cloud

Proveedor líder en Asia, ofrece **Elastic Compute Service**, **MaxCompute** y **Function Compute**, con precios competitivos y respaldo del ecosistema Alibaba.

### Huawei Cloud

Ofrece **Elastic Cloud Server**, **GaussDB** y **ModelArts**, destacando en inteligencia artificial y redes 5G, con fuerte expansión en Asia y Europa.

### DigitalOcean

Enfocado en startups y desarrolladores que buscan simplicidad y bajos costos. Ofrece **Droplets**, **Kubernetes administrado (DOKS)** y almacenamiento con **Spaces & Volumes**. Ideal para pequeños proyectos y emprendedores.

## Conclusión

Comprender los conceptos de despliegue, DevOps y computación en la nube es fundamental para cualquier profesional que desee administrar y entregar software de manera eficiente y segura. Saber qué es un despliegue, cómo aplicar la filosofía DevOps y conocer los distintos modelos de servicio (IaaS, PaaS, SaaS, FaaS) permite tomar decisiones informadas sobre la infraestructura y los procesos.

Además, conocer los principales proveedores de nube y sus fortalezas facilita la selección de la plataforma más adecuada según las necesidades del proyecto, optimizando costos, rendimiento y escalabilidad. Con estas bases, los equipos pueden implementar aplicaciones más rápidas, confiables y seguras, alineadas con las mejores prácticas de la industria.


