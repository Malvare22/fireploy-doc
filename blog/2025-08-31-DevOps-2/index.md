---
title: "Repaso: Instancias, Redes y Firewalls en la Nube"
authors: [malaver]
tags: [tutorial]
---

<!-- truncate -->

# Repaso: Instancias, Redes y Firewalls en la Nube

## Introducción

Administrar recursos en la nube requiere comprensión de **instancias de cómputo**, **redes virtuales** y **firewalls**. En este artículo veremos qué son las instancias, cómo crearlas y administrarlas, y cómo asegurar la comunicación con redes y reglas de firewall, tanto a nivel de servicio como dentro de la propia máquina.

---

## Instancias en la Nube

### ¿Qué es una instancia?

Una **instancia** es una máquina de cómputo que corre en la infraestructura del proveedor de nube. Normalmente es una **máquina virtual (VM)** que puedes configurar con:
- Sistema operativo (Linux, Windows, etc.)
- Tipo de máquina (vCPU y RAM)
- Disco de arranque y almacenamiento adicional
- Red y reglas de firewall

Se administra mediante la **CLI** o la **API** del proveedor y permite:
- Desplegar aplicaciones
- Ejecutar procesos
- Almacenar y procesar datos
- Conectarse en red de manera flexible y escalable

### Pasos generales para crear una instancia

1. **Acceso a la plataforma**  
   - Ingresa a la consola o CLI del proveedor de nube.  
   - Selecciona el proyecto o cuenta donde crearás la instancia.

2. **Configuración básica**  
   - Define un **nombre** para la instancia.  
   - Selecciona la **región y zona** (latencia y costo dependen de esto).

3. **Elección de recursos**  
   - Tipo de máquina (vCPUs y memoria)
   - Sistema operativo o imagen de arranque
   - Almacenamiento (disco de arranque y opcionalmente discos adicionales)

4. **Configuración de red y seguridad**  
   - Asigna **IP interna** y opcional **IP pública**
   - Define reglas de firewall (ej. SSH, HTTP, HTTPS)
   - Configura claves SSH o usuarios de acceso

5. **Revisión y creación**  
   - Verifica la configuración y crea la instancia.  
   - La instancia pasa a estar disponible para uso.

### Estados de una instancia

| Estado        | Descripción                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **PROVISIONING** | Creación y asignación de recursos.                                           |
| **STAGING**      | Preparación para arrancar (carga del SO).                                    |
| **RUNNING**      | Instancia en ejecución y disponible.                                         |
| **STOPPING**     | Se está deteniendo; procesos se cierran parcialmente.                        |
| **STOPPED / TERMINATED** | Apagada; no usa CPU/RAM, pero discos/IPs pueden generar cargos.        |
| **DELETING**     | Instancia y recursos asociados están siendo eliminados.                      |

### Acciones de gestión de una instancia

| Acción        | Descripción                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **Crear**     | Lanzar la instancia con la configuración definida.                          |
| **Iniciar**   | Encender una instancia detenida.                                             |
| **Detener**   | Apagar instancia, mantiene discos y IPs activos.                             |
| **Reiniciar** | Apagar y encender la instancia nuevamente.                                   |
| **Conectar**  | Acceder mediante SSH, RDP u otro método.                                     |
| **Modificar** | Cambiar recursos (CPU, RAM, disco, red); algunas requieren detener la instancia. |
| **Eliminar**  | Borrar la instancia y liberar recursos y costos.                             |

---

## Redes Virtuales en la Nube

### ¿Qué es una VPC?

Una **VPC (Virtual Private Cloud)** es una red virtual que permite aislar y organizar los recursos de un proyecto. Dentro de ella, las instancias y servicios pueden conectarse de forma segura y escalable.

### Tutorial básico para VPC

1. **Crear la VPC**: define un nombre y rango de direcciones IP (ej. `10.0.0.0/16`).
2. **Crear subredes**: asigna rangos más pequeños dentro de la VPC (`10.0.1.0/24`).
3. **Conexión entre recursos**: instancias dentro de la misma VPC se comunican mediante IP interna. Para internet, asignar IP pública.
4. **Control de tráfico**: usar reglas de firewall y rutas de red.

---

## Firewalls

Los **firewalls** controlan el tráfico de red hacia y desde los recursos.

### Tipos de firewalls

#### Firewall del servicio (VPC)
- Nivel: red / VPC
- Controla el tráfico antes de llegar a la VM
- Gestión: consola o CLI del proveedor
- Alcance: varias instancias o subredes
- Caso de uso: abrir puertos globalmente (ej. 80/443)

#### Firewall de la instancia (SO)
- Nivel: sistema operativo
- Controla tráfico una vez que llega a la VM
- Gestión: Linux (`iptables`, `ufw`) / Windows (Windows Defender Firewall)
- Alcance: una sola instancia
- Caso de uso: reglas finas por servicio (ej. SSH desde IP específica)

### Comparación general

| Aspecto                  | Firewall del Servicio (VPC)                        | Firewall de la Instancia (SO)                  |
|---------------------------|---------------------------------------------------|------------------------------------------------|
| Nivel                     | Red / VPC                                        | Sistema operativo de la VM                     |
| Punto de control          | Antes de la VM                                   | Dentro de la VM                                |
| Gestión                   | Consola / CLI del proveedor                       | Configuración del SO                            |
| Alcance                   | Varias instancias/subredes                        | Una instancia                                  |
| Caso de uso               | Acceso global (ej. HTTP/HTTPS)                   | Reglas específicas por servicio               |

---

## Puertos y su liberación

Un **puerto** es un número lógico asociado a un servicio dentro de la instancia.
- 22: SSH
- 80: HTTP
- 443: HTTPS

### Abrir un puerto en la nube

1. Identificar puerto y protocolo (ej. TCP/80)
2. Crear regla de firewall (ingress) con origen `0.0.0.0/0` o rango específico
3. Asignar regla a la instancia (tags o subred)
4. Probar conectividad desde un navegador o cliente hacia la IP pública

---

## Conclusión

Comprender **instancias, redes y firewalls** es esencial para desplegar aplicaciones de manera segura y eficiente en la nube. La correcta configuración de VPC, reglas de firewall y gestión de instancias permite optimizar recursos, mejorar la seguridad y garantizar disponibilidad de los servicios.

