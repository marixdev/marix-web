# Terminal SSH

El emulador de terminal SSH de Marix proporciona acceso completo a la línea de comandos de tus servidores remotos.

## Conectar a un Servidor

1. Haz doble clic en cualquier servidor SSH en tu lista de Hosts
2. La conexión se establece automáticamente
3. La terminal se abre mostrando el prompt del shell

## Características de la Terminal

### Emulación Completa
- Emulación completa de terminal xterm-256color
- Soporte para colores ANSI
- Aplicaciones de pantalla completa (vim, htop, mc)
- Soporte Unicode para caracteres internacionales

### Pestañas Múltiples
- Abre múltiples sesiones de terminal
- Cambia entre pestañas con gestos o atajos
- Cada pestaña mantiene su propia sesión

### Copiar y Pegar
- **Copiar**: Selecciona texto para copiar automáticamente
- **Pegar**: Toca el botón de pegar o usa atajo de teclado
- Sincronización de portapapeles con el sistema

## Personalización

### Fuente
- Elige entre fuentes monoespaciadas
- Ajusta tamaño de fuente
- Las fuentes incluidas están optimizadas para terminal

### Colores
- Esquemas de color predefinidos
- Modo claro y oscuro
- Personaliza colores individuales

### Cursor
- Estilos: bloque, línea, subrayado
- Parpadeo activado/desactivado
- Color de cursor personalizable

## Funciones Avanzadas

### Búsqueda en Terminal
1. Abre la barra de búsqueda (Ctrl+F)
2. Escribe el texto a buscar
3. Navega entre resultados
4. Resaltado de coincidencias

### Desplazamiento
- Desliza hacia arriba para ver historial
- Barra de desplazamiento en el lateral
- Configura líneas de historial (búfer de retroceso)

### Redimensionamiento
- La terminal se ajusta automáticamente al tamaño de ventana
- Las aplicaciones reciben señal de cambio de tamaño
- Modo pantalla completa disponible

## Barra de Herramientas

La barra de herramientas proporciona acceso rápido a:

| Icono | Función |
|-------|---------|
| 📁 | Abrir gestor de archivos SFTP |
| 📝 | Notas del servidor |
| ⌨️ | Fragmentos de comandos |
| 🔗 | Reenvío de puertos |
| ⚙️ | Configuración de sesión |

## Entrada de Teclado

### Teclado Virtual
- Teclado en pantalla optimizado para terminal
- Teclas especiales: Ctrl, Alt, Tab, Esc, flechas
- Desliza para acceder a teclas adicionales

### Teclado Físico
- Soporte completo para teclados externos
- Todos los atajos de terminal funcionan
- Teclas de función (F1-F12) soportadas

## Gestos Táctiles

| Gesto | Acción |
|-------|--------|
| Toque | Posicionar cursor |
| Toque largo | Menú de contexto |
| Deslizar arriba/abajo | Desplazar historial |
| Pellizcar | Zoom de fuente |
| Deslizar horizontalmente | Cambiar pestaña |

## Mantener Conexión Viva

Para evitar desconexiones por inactividad:

1. Ve a **Configuración** → **Conexión**
2. Activa **Keep-Alive**
3. Configura intervalo (recomendado: 30-60 segundos)

Marix envía paquetes keep-alive automáticamente.

## Reconexión Automática

Si la conexión se pierde:
1. Marix detecta la desconexión
2. Intenta reconectar automáticamente
3. La sesión se restaura si es posible
4. Notificación del estado de conexión

## Registro de Sesión

### Activar Registro
1. Ve a configuración de la conexión
2. Activa **Registro de sesión**
3. Elige ubicación para guardar logs

### Ver Registros
- Los registros se guardan como archivos de texto
- Incluyen toda la salida de la terminal
- Útiles para auditoría y depuración

## Teclas Especiales

### Enviar Secuencias de Control
- **Ctrl+C**: Interrumpir proceso
- **Ctrl+D**: Cerrar sesión (EOF)
- **Ctrl+Z**: Suspender proceso
- **Ctrl+L**: Limpiar pantalla

### Teclas de Escape
Para enviar secuencias especiales:
1. Toca el botón ESC en la barra de herramientas
2. O presiona la tecla Esc en teclado físico

## Solución de Problemas

### Caracteres Incorrectos
- Verifica la codificación del servidor (UTF-8 recomendado)
- Comprueba la configuración de locale
- Prueba con diferente fuente de terminal

### Terminal Lenta
- Reduce el tamaño del búfer de retroceso
- Desactiva efectos visuales
- Verifica la velocidad de conexión

### Colores No Aparecen
- Asegúrate de que TERM está configurado como xterm-256color
- Verifica la configuración de la aplicación remota
- Reinicia la sesión de shell

### Aplicaciones No Funcionan Correctamente
- Verifica que la aplicación soporte xterm
- Ejecuta `reset` para restaurar la terminal
- Reconecta si el problema persiste
