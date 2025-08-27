# Estados y Operaciones

### Estados de una Instancia

Las instancias en la nube atraviesan distintos **estados operativos** durante su ciclo de vida. Estos estados representan la situación actual del recurso, desde su creación inicial hasta su eliminación definitiva. Comprenderlos permite interpretar mejor el comportamiento de la infraestructura, anticipar costos asociados y tomar decisiones sobre cuándo iniciar, detener o eliminar una máquina virtual.  

| Estado        | Descripción                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **PROVISIONING** | El proveedor está creando y asignando los recursos de la instancia.         |
| **STAGING**      | La instancia se prepara para arrancar (carga del sistema operativo).        |
| **RUNNING**      | La instancia está en ejecución y disponible para su uso.                   |
| **STOPPING**     | La instancia se está deteniendo (cierres de procesos y liberación parcial). |
| **STOPPED / TERMINATED** | La instancia está apagada; no usa CPU/RAM, pero puede generar cargos por discos o IPs. |
| **DELETING**     | La instancia y sus recursos asociados están siendo eliminados.    

### Acciones de Gestión sobre una Instancia

La administración de instancias se realiza a través de un conjunto de **acciones de gestión** que controlan su funcionamiento. Estas acciones permiten crear, modificar, detener, reiniciar o eliminar instancias según las necesidades del proyecto. Conocer cada una es fundamental para optimizar recursos, mantener la seguridad y asegurar que las aplicaciones en la nube funcionen de manera eficiente.  

| Acción        | Descripción                                                                 |
|---------------|-----------------------------------------------------------------------------|
| **Crear**     | Definir configuración (nombre, región, tipo de máquina, disco, red) y lanzar la instancia. |
| **Iniciar**   | Encender una instancia que estaba detenida para volver a usarla.             |
| **Detener**   | Apagar la instancia para dejar de consumir cómputo (pero discos/IPs siguen activos). |
| **Reiniciar** | Reinicia la instancia (se apaga y enciende nuevamente).                      |
| **Conectar**  | Acceder a la instancia mediante SSH, RDP u otro método.                      |
| **Modificar** | Ajustar recursos (CPU, RAM, disco, red); algunas modificaciones requieren detener la instancia. |
| **Eliminar**  | Borrar la instancia de forma definitiva para liberar recursos y costos.       |