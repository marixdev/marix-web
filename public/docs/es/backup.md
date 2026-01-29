# Copia de Seguridad y Restauración

Protege tus datos con copias de seguridad cifradas. Marix soporta 6 proveedores de respaldo, todos usando cifrado Argon2id.

> 💡 **Consejo:** Una vez que conectes una cuenta en la nube para respaldo, no necesitas reconectarla para restaurar en el mismo dispositivo. Tu autenticación se guarda localmente.

## Interfaz de Copia de Seguridad y Restauración

### Copia de Seguridad
![Interfaz de Copia de Seguridad](/backup.png)

### Restauración
![Interfaz de Restauración](/restore.png)

## Qué se Respalda

- Todos los servidores y credenciales (contraseñas, claves privadas)
- Claves SSH del Llavero
- Configuraciones de reenvío de puertos
- Secretos 2FA/TOTP
- Configuración de la aplicación
- Token API de Cloudflare

## Requisitos de Contraseña

| Requisito | Descripción |
|-----------|-------------|
| Longitud | Al menos 10 caracteres |
| Mayúsculas | Incluir letras mayúsculas |
| Minúsculas | Incluir letras minúsculas |
| Números | Incluir al menos un número |
| Especiales | Incluir caracteres especiales |

> ⚠️ **Advertencia:** No podemos recuperar tu contraseña. Si la olvidas, tu copia de seguridad será permanentemente inaccesible.

## Copia de Seguridad Local

Guarda un archivo de respaldo cifrado en tu computadora.

### Crear Copia de Seguridad Local

1. Ve a **Configuración** → Haz clic en **"Crear Copia de Seguridad"**
2. Selecciona la pestaña **Local** (icono de carpeta)
3. Ingresa una **contraseña fuerte** (10+ caracteres)
4. Confirma la contraseña
5. Haz clic en **"Crear Copia de Seguridad"**
6. Elige dónde guardar el archivo `.marix`
7. Almacena este archivo de forma segura

### Restaurar desde Copia de Seguridad Local

1. Ve a **Configuración** → Haz clic en **"Restaurar Copia de Seguridad"**
2. Selecciona la pestaña **Local**
3. Haz clic en **"Seleccionar Archivo"** y elige tu archivo de respaldo `.marix`
4. Ingresa la **contraseña** que usaste al crear la copia de seguridad
5. Haz clic en **"Restaurar"**
6. La aplicación se reinicia con todos los datos restaurados

## Google Drive

Sincroniza tu copia de seguridad con Google Drive.

### Conectar

1. Selecciona la pestaña **Google Drive**
2. Haz clic en **"Conectar"**
3. Inicia sesión en tu cuenta de Google
4. Concede permiso a Marix
5. Verás "Conectado" con tu correo electrónico

### Crear Copia de Seguridad

1. Después de conectar, ingresa una contraseña fuerte
2. Confirma la contraseña
3. Haz clic en **"Crear Copia de Seguridad"**
4. El estado muestra: "Copia de seguridad creada exitosamente"

### Restaurar

1. Si ya estás conectado, tu cuenta se recuerda
2. Si existe una copia de seguridad, verás "Última copia de seguridad: [fecha]"
3. Ingresa la contraseña
4. Haz clic en **"Restaurar"**

## GitHub

Almacena tu copia de seguridad en un Gist privado de GitHub.

### Conectar

1. Selecciona la pestaña **GitHub**
2. Haz clic en **"Conectar"**
3. Aparece un **Código de Dispositivo** (ej., `ABCD-1234`)
4. Ve a: https://github.com/login/device
5. Ingresa el código
6. Autoriza Marix

### Crear Copia de Seguridad

1. Ingresa una contraseña fuerte
2. Confirma la contraseña
3. Haz clic en **"Crear Copia de Seguridad"**
4. La copia de seguridad se almacena como un Gist privado

### Restaurar

1. Si ya estás conectado, tu cuenta se recuerda
2. Si existe una copia de seguridad, verás "Última copia de seguridad: [fecha]"
3. Ingresa la contraseña
4. Haz clic en **"Restaurar"**

### ¿Dónde Está Mi Copia de Seguridad?

Ve a https://gist.github.com → Tus gists privados → Busca "marix-backup"

## GitLab

Almacena tu copia de seguridad en un Snippet de GitLab.

### Conectar

1. Selecciona la pestaña **GitLab**
2. Haz clic en **"Conectar"**
3. Inicia sesión en GitLab
4. Autoriza Marix

### Crear Copia de Seguridad

1. Ingresa una contraseña fuerte
2. Confirma la contraseña
3. Haz clic en **"Crear Copia de Seguridad"**
4. La copia de seguridad se almacena como un Snippet privado

### Restaurar

1. Si ya estás conectado, tu cuenta se recuerda
2. Si existe una copia de seguridad, verás "Última copia de seguridad: [fecha]"
3. Ingresa la contraseña
4. Haz clic en **"Restaurar"**

## Box.net

Almacena tu copia de seguridad en el almacenamiento en la nube de Box.

### Conectar

1. Selecciona la pestaña **Box.net**
2. Haz clic en **"Conectar a Box.net"**
3. Inicia sesión en tu cuenta de Box.net
4. Autoriza Marix

### Crear Copia de Seguridad

1. Ingresa una contraseña fuerte
2. Confirma la contraseña
3. Haz clic en **"Crear Copia de Seguridad"**

### Restaurar

1. Si ya estás conectado, tu cuenta se recuerda
2. Si existe una copia de seguridad, verás "Última copia de seguridad: [fecha]"
3. Ingresa la contraseña
4. Haz clic en **"Restaurar"**

## OneDrive

Sincroniza tu copia de seguridad con Microsoft OneDrive.

### Conectar

1. Selecciona la pestaña **OneDrive**
2. Haz clic en **"Conectar"**
3. Inicia sesión en tu cuenta de Microsoft
4. Concede permiso a Marix
5. Verás "Conectado" con tu correo electrónico

### Crear Copia de Seguridad

1. Después de conectar, ingresa una contraseña fuerte
2. Confirma la contraseña
3. Haz clic en **"Crear Copia de Seguridad"**
4. El estado muestra: "Copia de seguridad creada exitosamente"

### Restaurar

1. Si ya estás conectado, tu cuenta se recuerda
2. Si existe una copia de seguridad, verás "Última copia de seguridad: [fecha]"
3. Ingresa la contraseña
4. Haz clic en **"Restaurar"**

## Comparación de Proveedores

| Proveedor | Ubicación de Almacenamiento | Ventajas | Desventajas |
|-----------|----------------------------|----------|-------------|
| **Local** | Tu computadora | Control total, sin conexión | Debes gestionar el archivo manualmente |
| **Google Drive** | Nube de Google | Auto-sincronización, muy usado | Requiere cuenta de Google |
| **OneDrive** | Nube de Microsoft | Integrado con Windows | Requiere cuenta de Microsoft |
| **GitHub** | GitHub Gist | Gratis, control de versiones | Requiere cuenta de GitHub |
| **GitLab** | GitLab Snippet | Gratis, opción auto-alojada | Requiere cuenta de GitLab |
| **Box.net** | Nube de Box.net | Amigable para empresas | Requiere cuenta de Box |

## Mejores Prácticas

1. **Usa contraseñas diferentes** para diferentes proveedores
2. **Almacena tu contraseña** en un gestor de contraseñas
3. **Prueba la restauración** periódicamente para asegurar que la copia de seguridad funcione
4. **Mantén una copia local** como opción secundaria
5. **No compartas** archivos de respaldo - contienen datos sensibles
6. **Actualiza las copias de seguridad** regularmente después de añadir nuevos servidores
