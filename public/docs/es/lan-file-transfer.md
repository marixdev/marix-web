# Transferencia de Archivos LAN

Transfiere archivos entre dispositivos en la misma red local sin necesidad de un servidor.

## Interfaz de Transferencia de Archivos LAN

![Interfaz de Transferencia de Archivos LAN](/sendfile.png)

## Requisitos

> ⚠️ **Importante:** Tanto el emisor como el receptor deben tener **Descubrimiento LAN habilitado**.
> 
> Haz clic en el botón 🌐 en la barra de encabezado o usa `Ctrl+Shift+L` para activar/desactivar.

- Ambos dispositivos en la misma red (WiFi/LAN)
- Descubrimiento LAN habilitado en ambos dispositivos
- Marix ejecutándose en ambos dispositivos

## Abrir Transferencia de Archivos LAN

Haz clic en **"Enviar Archivos"** en la barra lateral.

## Enviar Archivos

### Paso 1: Habilitar Descubrimiento LAN
Haz clic en el icono **🌐** (globo) en la barra de encabezado.

### Paso 2: Seleccionar Archivos
1. Ve a Enviar Archivos → pestaña **Enviar**
2. Haz clic en **"Seleccionar Archivos"** o **"Seleccionar Carpeta"**
3. Los elementos seleccionados aparecen en la lista
4. Haz clic en × para eliminar un elemento

### Paso 3: Obtener Código de Emparejamiento
Anota el **Código de Emparejamiento** de 6 dígitos que se muestra.

### Paso 4: Compartir Código
Dile al receptor tu código de emparejamiento (verbalmente o por mensaje).

### Paso 5: Iniciar Envío
1. Haz clic en **"Iniciar Envío"**
2. Estado: "Esperando receptor..."
3. La transferencia comienza cuando el receptor se conecta

## Recibir Archivos

### Paso 1: Habilitar Descubrimiento LAN
Haz clic en el icono **🌐** (globo) en la barra de encabezado.

### Paso 2: Conectar
1. Ve a Enviar Archivos → pestaña **Recibir**
2. Ingresa el código de emparejamiento de 6 dígitos del emisor
3. Haz clic en **"Conectar"**

### Paso 3: Recibir
- Los dispositivos se conectan automáticamente
- La transferencia comienza inmediatamente
- Los archivos se guardan en tu carpeta de Descargas

## Progreso de Transferencia

Durante la transferencia verás:
- Barra de progreso con porcentaje de completado
- Indicador de velocidad (ej., "5.2 MB/s")
- Archivo actual siendo transferido

## Cancelar Transferencia

Haz clic en el botón **"Cancelar"** para detener la transferencia en cualquier momento.

## Solución de Problemas

### No Encuentra al Emisor/Receptor

1. Asegúrate de que ambos dispositivos tengan **Descubrimiento LAN ACTIVADO** (icono 🌐 activo)
2. Ambos dispositivos deben estar en la **misma red local**
3. Verifica que el firewall no esté bloqueando Marix
4. Intenta actualizar la conexión

### Transferencia Falla

- Los archivos grandes pueden tomar tiempo - sé paciente
- Asegura una conexión de red estable
- Intenta reenviar con un nuevo código de emparejamiento
- Verifica el espacio en disco disponible en el receptor

### Velocidad de Transferencia Lenta

- Usa Ethernet cableado para transferencias más rápidas
- Reduce la congestión de red
- Cierra aplicaciones que usen mucho ancho de banda
- Verifica el rendimiento del router/red

## Seguridad

- Las transferencias usan **cifrado de extremo a extremo**
- El código de emparejamiento de 6 dígitos asegura que solo el destinatario previsto reciba los archivos
- Ningún dato pasa por servidores externos
- Los archivos se transfieren directamente entre dispositivos
