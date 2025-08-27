# Instancias en la nube

## ¿Qué es una instancia?

Una instancia es una máquina de cómputo que corre en la infraestructura del proveedor. Normalmente es una máquina virtual (VM) a la que tú eliges sistema operativo, tipo de máquina (vCPU y RAM), disco de arranque, red y reglas de firewall. Se administra através de una CLI o una API que suministra el proveedor.

Permite desplegar aplicaciones, almacenar datos, ejecutar procesos y conectarse en red de forma escalable y flexible.

## Pasos generales para crear una instancia

1. **Acceso a la plataforma**  
   - Ingresa a la consola del proveedor de nube o usa la línea de comandos (CLI).  
   - Selecciona el proyecto o cuenta donde crearás la instancia.  

2. **Configuración básica**  
   - Define un **nombre** para la instancia.  
   - Selecciona la **región** y **zona** donde se ejecutará (afecta latencia y costos).  

3. **Elección de recursos**  
   - Escoge el **tipo de máquina** (vCPUs y memoria).  
   - Selecciona el **sistema operativo** o imagen de arranque (Linux, Windows, etc.).  
   - Configura el **almacenamiento** (disco de arranque y discos adicionales si se requieren).  

4. **Configuración de red y seguridad**  
   - Asigna **IP interna** y opcionalmente **IP pública**.  
   - Define las **reglas de firewall** para habilitar puertos (ej. SSH, HTTP, HTTPS).  
   - Configura claves SSH o usuarios de acceso.  

5. **Revisión y creación**  
   - Verifica la configuración elegida.  
   - Haz clic en **Crear** (o ejecuta el comando en CLI).  
   - La instancia se aprovisiona y pasa a estar disponible para uso.  
