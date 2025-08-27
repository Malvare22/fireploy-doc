# Diferencia entre Firewall del Servicio en la Nube y Firewall de la Instancia

## Firewall del Servicio (a nivel de red/VPC)
- **Ubicación:** Se configura en la nube (VPC o reglas del proveedor).  
- **Alcance:** Aplica **antes** de que el tráfico llegue a la instancia.  
- **Objetivo:** Proteger todos los recursos dentro de la red virtual (instancias, balanceadores, etc.).  
- **Gestión:**  
  - Se maneja desde la **consola de nube** o la **CLI** del proveedor.  
  - Generalmente usa **tags, etiquetas o subredes** para aplicar reglas.  
- **Ejemplo:** Permitir tráfico HTTP (puerto 80) hacia todas las instancias con etiqueta `web-server`.  

---

## Firewall de la Instancia (a nivel de sistema operativo)
- **Ubicación:** Se ejecuta dentro del sistema operativo de la máquina virtual.  
- **Alcance:** Aplica **una vez que el tráfico ya entró a la instancia**.  
- **Objetivo:** Filtrar tráfico específico dentro del servidor (puertos, procesos, direcciones).  
- **Gestión:**  
  - En Linux: herramientas como **iptables** o **ufw**.  
  - En Windows: **Windows Defender Firewall**.  
- **Ejemplo:** Permitir solo conexiones SSH desde una IP específica (`192.168.1.10`) bloqueando todas las demás.  

---

## Comparación General

| Aspecto                  | Firewall del Servicio (VPC)                        | Firewall de la Instancia (SO)                  |
|---------------------------|---------------------------------------------------|------------------------------------------------|
| **Nivel**                 | Red / Virtual Private Cloud                       | Sistema operativo de la máquina virtual        |
| **Punto de control**      | Antes de llegar a la VM                           | Dentro de la VM                                |
| **Gestión**               | Consola / CLI del proveedor                       | Configuración del SO (iptables, ufw, Windows)  |
| **Alcance**               | Varias instancias o subredes                      | Una instancia en particular                    |
| **Caso de uso**           | Definir acceso global (ej. abrir puertos 80/443)  | Reglas finas por servicio o aplicación         |

---