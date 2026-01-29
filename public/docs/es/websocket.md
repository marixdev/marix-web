# Cliente WebSocket

Conéctate y prueba servicios WebSocket directamente desde Marix.

## ¿Qué es WebSocket?

WebSocket es un protocolo de comunicación que proporciona canales de comunicación full-duplex sobre una única conexión TCP. Es comúnmente usado para:
- Aplicaciones de chat en tiempo real
- Actualizaciones en vivo (precios de acciones, resultados deportivos)
- Juegos multijugador
- Paneles colaborativos
- Feeds de datos en streaming

## Crear una Conexión WebSocket

1. Ve a **Herramientas** → **Cliente WebSocket**
2. Ingresa la URL del WebSocket:
   - `ws://` para conexiones sin encriptar
   - `wss://` para conexiones seguras (SSL/TLS)
3. (Opcional) Añade encabezados personalizados
4. Haz clic en **Conectar**

## Interfaz de Conexión

### Panel de Estado
- **Conectado**: LED verde, conexión activa
- **Desconectado**: LED rojo, no hay conexión
- **Conectando**: LED amarillo, en proceso

### Historial de Mensajes
- Los mensajes enviados y recibidos se muestran en la línea de tiempo
- Los mensajes se distinguen por color:
  - **Enviados**: Alineados a la derecha
  - **Recibidos**: Alineados a la izquierda
- Marca de tiempo para cada mensaje

### Panel de Entrada
- Área de texto para componer mensajes
- Botón de enviar
- Selector de tipo de mensaje (texto/binario)

## Enviar Mensajes

### Mensaje de Texto
1. Escribe tu mensaje en el campo de entrada
2. Haz clic en **Enviar** o presiona Enter
3. El mensaje aparece en el historial

### Mensaje JSON
```json
{
  "action": "subscribe",
  "channel": "updates",
  "data": {
    "userId": 12345
  }
}
```

Marix formatea automáticamente JSON para legibilidad.

### Mensaje Binario
1. Cambia el tipo de mensaje a **Binario**
2. Ingresa datos en formato hexadecimal o base64
3. Envía el mensaje binario

## Encabezados Personalizados

Añade encabezados HTTP para autenticación u otros propósitos:

1. Antes de conectar, haz clic en **Encabezados**
2. Añade pares clave-valor:
   ```
   Authorization: Bearer tu-token-aqui
   X-API-Key: tu-clave-api
   ```
3. Los encabezados se incluyen en el handshake

## Subprotocolos

Especifica subprotocolos WebSocket si el servidor los requiere:

1. Haz clic en **Opciones Avanzadas**
2. Ingresa subprotocolos separados por coma:
   ```
   graphql-ws, subscriptions-transport-ws
   ```
3. El servidor selecciona el protocolo soportado

## Reconexión Automática

Configura comportamiento de reconexión:

1. Ve a **Configuración** de la conexión
2. Activa **Reconexión automática**
3. Configura:
   - **Retraso inicial**: Tiempo antes del primer intento
   - **Retraso máximo**: Límite de tiempo entre intentos
   - **Intentos máximos**: Número de reintentos (0 = infinito)

## Ping/Pong

Mantén la conexión activa con mensajes de control:

### Ping Automático
1. Activa **Keep-Alive** en configuración
2. Configura intervalo de ping (recomendado: 30 segundos)
3. Marix envía pings automáticamente

### Ping Manual
1. Haz clic en el botón **Ping**
2. Observa la respuesta pong
3. Útil para verificar latencia

## Historial de Conexiones

Marix guarda tus conexiones WebSocket recientes:

1. Ve a **Historial** en el cliente WebSocket
2. Ver conexiones anteriores con:
   - URL del servidor
   - Fecha de última conexión
   - Estado de la conexión
3. Haz clic para reconectar rápidamente

## Guardar Conexiones

Guarda configuraciones de conexión frecuentes:

1. Configura la conexión (URL, encabezados, etc.)
2. Haz clic en **Guardar**
3. Ingresa nombre descriptivo
4. La conexión aparece en tus guardadas

## Exportar Historial

Exporta el historial de mensajes:

1. Haz clic en **Exportar** en el historial
2. Elige formato:
   - **JSON**: Datos estructurados
   - **Texto**: Formato legible
3. Guarda el archivo

## Casos de Uso Comunes

### Probar API en Tiempo Real
```javascript
// Conectar a WebSocket
ws://api.ejemplo.com/realtime

// Mensaje de autenticación
{"type": "auth", "token": "tu-token"}

// Suscribirse a canal
{"type": "subscribe", "channel": "updates"}
```

### Depurar Conexiones
- Ver todos los mensajes entrantes y salientes
- Verificar formato de mensajes
- Probar respuestas del servidor
- Medir latencia de conexión

### Desarrollo de Aplicaciones
- Probar endpoints WebSocket durante desarrollo
- Simular clientes para pruebas de carga
- Verificar manejo de errores

## Solución de Problemas

### No Se Puede Conectar
- Verifica que la URL sea correcta
- Comprueba que el servidor WebSocket esté ejecutándose
- Verifica configuración de firewall
- Prueba con `ws://` si `wss://` falla

### Conexión Se Cierra Inmediatamente
- Puede requerir autenticación
- Verifica encabezados requeridos
- El servidor puede rechazar conexiones sin subprotocolo

### Mensajes No Se Reciben
- Verifica que estés suscrito al canal correcto
- Comprueba el formato del mensaje
- El servidor puede requerir mensaje inicial

### Error de Certificado SSL
- Para `wss://`, el certificado debe ser válido
- En desarrollo, puede ser necesario aceptar certificados autofirmados
- Verifica la fecha/hora del dispositivo

## Limitaciones

- Tamaño máximo de mensaje: 16 MB
- Conexiones simultáneas: Depende de recursos del dispositivo
- No soporta WebSocket sobre HTTP/2

## Comparación con Herramientas de Terminal

| Característica | Cliente WebSocket | Herramientas SSH |
|----------------|-------------------|------------------|
| Protocolo | WebSocket (ws/wss) | SSH |
| Tipo de conexión | Web | Terminal |
| Autenticación | Encabezados HTTP | Clave/Contraseña SSH |
| Uso típico | APIs en tiempo real | Administración de servidores |
