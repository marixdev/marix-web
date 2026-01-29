# Solución de Problemas

Soluciones a problemas comunes que puedes encontrar al usar Marix.

## Problemas de Conexión

### No Se Puede Conectar al Servidor

**Síntomas**: La conexión falla inmediatamente o después de un tiempo de espera.

**Soluciones**:
1. **Verificar dirección del servidor**: Asegúrate de que el hostname/IP es correcto
2. **Verificar puerto**: Confirma que el puerto SSH es correcto (predeterminado: 22)
3. **Verificar red**: Asegúrate de tener conexión a internet
4. **Verificar firewall**: El firewall del servidor puede estar bloqueando conexiones
5. **Verificar servicio SSH**: Asegúrate de que SSH está ejecutándose en el servidor

```bash
# En el servidor, verificar que SSH está ejecutándose
sudo systemctl status sshd

# Verificar que el puerto está abierto
sudo netstat -tlnp | grep :22
```

### Conexión Rechazada

**Síntomas**: Error "Connection refused".

**Soluciones**:
- SSH no está ejecutándose en el servidor
- Puerto incorrecto especificado
- El servidor no está escuchando en ese puerto
- Firewall bloqueando la conexión

### Tiempo de Espera Agotado

**Síntomas**: La conexión se congela y eventualmente falla.

**Soluciones**:
1. Verifica la conectividad de red
2. El servidor puede estar sobrecargado
3. Problemas de enrutamiento de red
4. Intenta desde diferente red (móvil vs WiFi)

### Conexión Cerrada Inesperadamente

**Síntomas**: La sesión se desconecta sin advertencia.

**Soluciones**:
1. Activa **Keep-Alive** en configuración
2. Aumenta el intervalo de keep-alive
3. Verifica estabilidad de red
4. El servidor puede tener tiempo de espera de inactividad

## Problemas de Autenticación

### Contraseña Rechazada

**Síntomas**: "Authentication failed" con contraseña correcta.

**Soluciones**:
1. Verifica que la contraseña sea correcta (sensible a mayúsculas)
2. El usuario puede estar deshabilitado en el servidor
3. Autenticación por contraseña puede estar deshabilitada
4. Verifica `/etc/ssh/sshd_config`:
   ```bash
   PasswordAuthentication yes
   ```

### Clave SSH Rechazada

**Síntomas**: "Permission denied (publickey)".

**Soluciones**:
1. Verifica que la clave pública está en el servidor
2. Comprueba permisos:
   ```bash
   chmod 700 ~/.ssh
   chmod 600 ~/.ssh/authorized_keys
   ```
3. Verifica propiedad del directorio .ssh
4. La clave puede haber expirado o sido revocada

### Frase de Paso Incorrecta

**Síntomas**: No se puede desbloquear la clave privada.

**Soluciones**:
1. Verifica que ingresas la frase de paso correcta
2. Las frases de paso son sensibles a mayúsculas
3. Si olvidaste la frase de paso, genera una nueva clave

### 2FA No Funciona

**Síntomas**: El código TOTP es rechazado.

**Soluciones**:
1. Verifica que el reloj de tu dispositivo esté sincronizado
2. Los códigos TOTP tienen ventana de 30 segundos
3. Verifica que estás usando la clave correcta
4. Regenera el secreto 2FA si es necesario

## Problemas de Terminal

### Caracteres Incorrectos o Corruptos

**Síntomas**: Caracteres extraños, símbolos incorrectos.

**Soluciones**:
1. Verifica codificación del servidor:
   ```bash
   echo $LANG
   # Debería ser algo como: en_US.UTF-8
   ```
2. Configura locale UTF-8:
   ```bash
   export LANG=en_US.UTF-8
   export LC_ALL=en_US.UTF-8
   ```
3. Prueba con diferente fuente de terminal

### Colores No Aparecen

**Síntomas**: Terminal sin colores, solo blanco y negro.

**Soluciones**:
1. Verifica variable TERM:
   ```bash
   echo $TERM
   # Debería ser: xterm-256color
   ```
2. Configura TERM si es necesario:
   ```bash
   export TERM=xterm-256color
   ```
3. Reinicia la sesión de shell

### Aplicaciones No Funcionan (vim, htop, etc.)

**Síntomas**: Interfaz corrupta, teclas no responden.

**Soluciones**:
1. Ejecuta `reset` para restaurar terminal
2. Verifica configuración de TERM
3. Reconecta a la sesión
4. Verifica que la aplicación soporte xterm

### Tamaño de Terminal Incorrecto

**Síntomas**: Líneas se cortan o envuelven incorrectamente.

**Soluciones**:
1. Redimensiona la ventana para forzar actualización
2. Ejecuta:
   ```bash
   stty rows 24 cols 80
   # O para detectar automáticamente:
   resize
   ```

## Problemas de SFTP

### No Se Puede Subir/Descargar

**Síntomas**: Transferencias fallan con error.

**Soluciones**:
1. Verifica permisos del directorio destino
2. Verifica espacio en disco disponible
3. Verifica estabilidad de conexión
4. Intenta con archivos más pequeños

### Permiso Denegado

**Síntomas**: No se puede escribir en directorio.

**Soluciones**:
1. Verifica permisos del directorio:
   ```bash
   ls -la /ruta/del/directorio
   ```
2. Puede necesitar privilegios sudo
3. Verifica propiedad del directorio

### Archivos No Visibles

**Síntomas**: Directorio aparece vacío pero tiene archivos.

**Soluciones**:
1. Activa mostrar archivos ocultos
2. Actualiza listado del directorio
3. Verifica permisos de lectura del directorio

## Problemas de Rendimiento

### Conexión Lenta

**Síntomas**: Latencia alta, respuesta lenta.

**Soluciones**:
1. Verifica velocidad de red
2. El servidor puede estar sobrecargado
3. Reduce tamaño del búfer de terminal
4. Usa conexión cableada si es posible

### Alto Consumo de Batería

**Síntomas**: Marix consume mucha batería.

**Soluciones**:
1. Desconecta sesiones cuando no las uses
2. Reduce frecuencia de keep-alive
3. Cierra pestañas innecesarias
4. Desactiva animaciones

## Problemas de Sincronización

### Respaldo No Funciona

**Síntomas**: Los datos no se sincronizan entre dispositivos.

**Soluciones**:
1. Verifica conexión a internet
2. Verifica que el respaldo en nube está activado
3. Verifica credenciales del servicio de nube
4. Intenta forzar sincronización manual

### Conflictos de Datos

**Síntomas**: Datos diferentes en dispositivos.

**Soluciones**:
1. Marix usa el cambio más reciente
2. Exporta datos de cada dispositivo
3. Importa la versión que quieras mantener

## Obtener Ayuda

Si los problemas persisten:

1. **Revisa los logs**: Configuración → Logs de Depuración
2. **Busca en la documentación**: https://docs.marix.app
3. **Reporta un problema**: GitHub Issues
4. **Contacta soporte**: support@marix.app

### Información para Reportar Problemas

Al reportar un problema, incluye:
- Versión de Marix
- Sistema operativo y versión
- Descripción del problema
- Pasos para reproducir
- Mensajes de error (si hay)
- Logs relevantes
