# Bloqueo de Aplicación

Protege tu aplicación Marix con el Bloqueo de Aplicación. Cuando está habilitado, la aplicación se bloquea automáticamente después de un período de inactividad, evitando el acceso no autorizado a tus servidores y credenciales.

## Interfaz de Bloqueo de Aplicación

![Interfaz de Bloqueo de Aplicación](/applock.png)

## Habilitar el Bloqueo de Aplicación

1. Abre **Configuración** (icono de engranaje en la barra lateral)
2. Encuentra la sección **Seguridad**
3. Activa **Habilitar Bloqueo de Aplicación**

## Métodos de Bloqueo

Elige cómo debe bloquearse la aplicación:

| Método | Descripción | Nivel de Seguridad |
|--------|-------------|-------------------|
| **Desenfoque** | Desenfoca el contenido de la pantalla | Bajo - solo privacidad visual |
| **PIN** | Requiere PIN de 4-6 dígitos para desbloquear | Medio |
| **Contraseña** | Requiere contraseña para desbloquear | Alto |

### Modo Desenfoque

- El contenido de la pantalla se vuelve borroso
- Haz clic en cualquier lugar para desbloquear
- Mejor para privacidad rápida en entornos de oficina

### Modo PIN

- Establece un PIN numérico de 4-6 dígitos
- Ingresa el PIN para desbloquear
- Buen equilibrio entre seguridad y conveniencia

### Modo Contraseña

- Establece una contraseña personalizada
- Ingresa la contraseña para desbloquear
- Nivel de seguridad más alto

## Configurar PIN o Contraseña

Al cambiar al modo PIN o Contraseña:

1. Selecciona el método de bloqueo
2. Aparece un diálogo para establecer tu credencial
3. Ingresa tu PIN/Contraseña
4. Confirma ingresándolo de nuevo
5. Haz clic en **Guardar**

> **Nota:** Si olvidas tu PIN/Contraseña, necesitarás reiniciar la aplicación. Tus datos del servidor permanecen seguros.

## Tiempo de Espera del Bloqueo

Configura cuánto tiempo espera la aplicación antes de bloquearse:

| Tiempo de Espera | Caso de Uso |
|------------------|-------------|
| 1 minuto | Seguridad máxima |
| 2 minutos | Seguridad alta |
| 5 minutos | Predeterminado, equilibrado |
| 10 minutos | Seguridad moderada |
| 15 minutos | Uso casual |
| 30 minutos | Seguridad baja |
| 60 minutos | Protección mínima |

El temporizador se reinicia con cualquier movimiento del ratón, entrada de teclado o clic.

## Desbloquear

### Modo Desenfoque
- Haz clic en cualquier lugar de la pantalla
- Mueve el ratón

### Modo PIN/Contraseña
1. Ingresa tu PIN o Contraseña
2. Presiona **Enter** o haz clic en **Desbloquear**
3. La aplicación se desbloquea inmediatamente

## Cambiar Credenciales

Para cambiar tu PIN o Contraseña:

1. Ve a **Configuración** → **Seguridad**
2. Haz clic en **Cambiar PIN** o **Cambiar Contraseña**
3. Ingresa tu nueva credencial
4. Confirma y guarda

## Borrar Credenciales

Para eliminar PIN/Contraseña y volver al Desenfoque:

1. Ve a **Configuración** → **Seguridad**
2. Haz clic en **Borrar Credencial**
3. El método de bloqueo vuelve a Desenfoque

## Cómo Funciona

1. **Seguimiento de Actividad**: Marix monitorea eventos del ratón, teclado y clics
2. **Temporizador de Inactividad**: Después de no haber actividad durante el tiempo establecido, la aplicación se bloquea
3. **Bloqueo Instantáneo**: También puedes bloquear manualmente (si está implementado)
4. **Almacenamiento Seguro**: PIN/Contraseña almacenados de forma segura usando el llavero del sistema

## Consideraciones de Seguridad

### Qué Protege el Bloqueo de Aplicación

- ✅ Acceso visual a tu lista de servidores
- ✅ Ver credenciales guardadas
- ✅ Acceder a sesiones de terminal activas
- ✅ Navegar gestores de archivos SFTP

### Qué NO Protege el Bloqueo de Aplicación

- ❌ Conexiones SSH ya establecidas (permanecen activas)
- ❌ Datos en disco (usa cifrado del sistema para eso)
- ❌ Tráfico de red (usa SSH/TLS para eso)

## Mejores Prácticas

1. **Usa el modo Contraseña** para entornos sensibles
2. **Establece tiempos de espera más cortos** en espacios de trabajo compartidos
3. **Usa credenciales únicas** - no reutilices contraseñas
4. **Bloquea antes de salir** de tu computadora
5. **Combina con bloqueo del SO** para máxima seguridad

## Solución de Problemas

### Olvidé el PIN/Contraseña

- Reinicia la aplicación
- El Bloqueo de Aplicación se reinicia al reiniciar
- Tus datos del servidor se preservan

### La Aplicación se Bloquea Muy Rápido

- Aumenta el tiempo de espera en Configuración
- Verifica si tienes sesiones activas que puedan prevenir la detección de actividad

### La Aplicación No se Bloquea

- Asegúrate de que el Bloqueo de Aplicación esté habilitado
- Verifica la configuración del tiempo de espera
- Verifica que la ventana de la aplicación tenga el foco
