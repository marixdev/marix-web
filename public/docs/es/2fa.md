# Autenticación de Dos Factores (2FA/TOTP)

Generador de códigos TOTP integrado, como Google Authenticator. Almacena tus secretos 2FA y obtén códigos sin necesidad de tu teléfono.

## Interfaz de 2FA

![Interfaz de 2FA](/2fa.png)

## Abrir 2FA

Haz clic en **"2FA"** en la barra lateral.

## Añadir una Nueva Cuenta 2FA

### Paso 1: Abrir Diálogo
Haz clic en el botón **"Añadir Cuenta"**

### Paso 2: Ingresar Detalles

| Campo | Descripción | Requerido |
|-------|-------------|-----------|
| Nombre de Cuenta | Etiqueta para esta cuenta (ej., "GitHub", "AWS") | No (se nombra automáticamente) |
| Clave Secreta | El secreto TOTP (de la página de configuración del código QR) | Sí |

### Paso 3: Guardar
Haz clic en **"Añadir"**

## Cómo Obtener la Clave Secreta

Al habilitar 2FA en un sitio web:

1. Busca **"¿No puedes escanear el código QR?"** o **"Entrada manual"**
2. Copia la clave secreta (generalmente letras mayúsculas y números)
3. Pégala en Marix

Ejemplo de formato de clave secreta:
```
JBSWY3DPEHPK3PXP
```

## Usar Códigos 2FA

1. Encuentra tu cuenta en la lista
2. El código de 6 dígitos se muestra junto a ella
3. Un temporizador de cuenta regresiva muestra los segundos hasta que el código se actualice
4. Haz clic en el botón **Copiar** para copiar el código al portapapeles

### Temporizador
- Los códigos se actualizan cada **30 segundos**
- Un indicador de progreso circular muestra el tiempo restante
- Espera un nuevo código si el actual está por expirar

## Editar Nombre de Cuenta

1. Haz clic en el botón **Editar** junto a la cuenta
2. Ingresa el nuevo nombre
3. Presiona Enter o haz clic en Guardar

## Eliminar una Cuenta 2FA

1. Haz clic en el botón **Eliminar** (icono de papelera)
2. Confirma la eliminación

> ⚠️ **Advertencia:** Eliminar borra el secreto. Asegúrate de tener acceso de respaldo a la cuenta asociada antes de eliminar.

## Servicios Comunes

Aquí hay algunos servicios populares que soportan TOTP:

| Servicio | Ubicación de Configuración 2FA |
|----------|-------------------------------|
| GitHub | Configuración → Contraseña y autenticación |
| AWS | IAM → Credenciales de seguridad |
| Google | Cuenta de Google → Seguridad |
| Microsoft | Configuración de seguridad → Verificación en dos pasos |
| Cloudflare | Perfil → Autenticación |
| DigitalOcean | Cuenta → Seguridad |
| Linode | Mi Perfil → Contraseña y Autenticación |

## Mejores Prácticas

1. **Respalda tus secretos** - Guarda las claves secretas de forma segura
2. **Conserva los códigos de recuperación** - Guarda los códigos de respaldo proporcionados por los servicios
3. **Usa nombres descriptivos** - Fácil de identificar cuentas rápidamente
4. **Prueba los códigos antes de depender de ellos** - Verifica que funcionen inmediatamente después de añadirlos
5. **Sincronización de hora** - Asegúrate de que el reloj de tu computadora sea preciso

## Solución de Problemas

### Códigos No Funcionan

1. **Verifica sincronización de hora** - El reloj de tu computadora debe ser preciso
2. **Verifica la clave secreta** - Vuelve a ingresarla si se copió incorrectamente
3. **Espera el próximo código** - El código actual puede estar expirando

### Pérdida de Acceso

Si pierdes acceso a Marix:
1. Usa los **códigos de recuperación** proporcionados por el servicio
2. Contacta al soporte del servicio para recuperación de cuenta
