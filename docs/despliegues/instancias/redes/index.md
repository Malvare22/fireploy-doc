# Redes Virtuales, Firewalls y Puertos en la Nube

## Redes Virtuales (VPC)

Una **red virtual (VPC: Virtual Private Cloud)** es una red definida por software que los proveedores de nube crean para aislar y organizar los recursos de un proyecto.  
Permite conectar instancias, balanceadores, bases de datos y otros servicios de manera segura, como si estuvieran en una red privada dentro de un centro de datos, pero con la flexibilidad de la nube.

### Tutorial básico
1. **Creación de la VPC**  
   - Desde la consola de la nube, crea una VPC con un **nombre** y un **rango de direcciones IP** (ej. `10.0.0.0/16`).  
2. **Subredes**  
   - Define **subredes** dentro de la VPC (ej. `10.0.1.0/24` para una zona específica).  
   - Las subredes determinan dónde se desplegarán las instancias.  
3. **Conexión entre recursos**  
   - Todas las instancias dentro de la misma VPC pueden comunicarse usando **IP interna**.  
   - Para exponerlas a internet se asigna una **IP pública**.  
4. **Control de tráfico**  
   - El tráfico entre instancias y hacia afuera se controla con **reglas de firewall** y rutas de red.  

---

## Firewalls

Un **firewall en la nube** es un conjunto de reglas que permiten o bloquean el tráfico de red hacia o desde los recursos en una VPC.  
Se aplican a las instancias a través de **etiquetas** o directamente a toda la red, y son esenciales para garantizar la seguridad y segmentación del tráfico.

### Tutorial básico
1. **Reglas de entrada (ingress)**  
   - Controlan el tráfico que entra a una instancia (ej. permitir SSH por el puerto 22).  
2. **Reglas de salida (egress)**  
   - Controlan el tráfico que sale de una instancia (ej. restringir acceso a internet).  
3. **Componentes de una regla**  
   - **Dirección:** ingreso o salida.  
   - **Protocolo/puerto:** TCP, UDP, ICMP, etc.  
   - **Origen/destino:** rango de IPs (ej. `0.0.0.0/0` significa internet).  
   - **Acción:** permitir o denegar.  
4. **Aplicación**  
   - Asigna la regla a instancias mediante **tags de red** o a toda la VPC.  

---

## Puertos y su liberación

Un **puerto** es un número lógico asociado a un servicio o aplicación dentro de una máquina.  
Por ejemplo:  
- Puerto **22**: acceso remoto por **SSH**.  
- Puerto **80**: tráfico web **HTTP**.  
- Puerto **443**: tráfico seguro **HTTPS**.  

En la nube, "liberar un puerto" significa **permitir conexiones entrantes** hacia ese puerto en la instancia, configurando una regla de firewall.

### Tutorial básico
1. **Identificar el puerto y protocolo**  
   - Ejemplo: abrir **HTTP (TCP/80)** o **HTTPS (TCP/443)**.  
2. **Crear una regla de firewall**  
   - Especifica: dirección = *ingress*, protocolo = *TCP*, puerto = *80*.  
   - Origen: `0.0.0.0/0` para internet o un rango específico para mayor seguridad.  
3. **Asignar la regla a la instancia**  
   - Usar tags o seleccionar directamente la red/subred.  
4. **Probar conectividad**  
   - Acceder desde un navegador o cliente hacia la IP pública de la instancia en el puerto liberado.
