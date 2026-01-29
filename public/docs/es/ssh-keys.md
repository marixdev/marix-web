# Gestor de Claves SSH

Genera, importa y gestiona claves SSH para autenticación segura sin contraseña.

## ¿Qué son las Claves SSH?

Las claves SSH proporcionan una forma más segura de iniciar sesión en servidores que las contraseñas tradicionales:
- **Clave Privada**: Se mantiene en secreto en tu dispositivo
- **Clave Pública**: Se copia a los servidores a los que quieres acceder
- **Autenticación**: El servidor verifica que tienes la clave privada correspondiente

## Generar una Nueva Clave

1. Ve a **Configuración** → **Claves SSH**
2. Haz clic en **"Generar Nueva Clave"**
3. Configura opciones de la clave:
   - **Nombre**: Nombre descriptivo para la clave
   - **Tipo**: Ed25519 (recomendado) o RSA
   - **Bits**: 4096 para RSA (predeterminado)
   - **Frase de paso**: (opcional) Protección adicional
4. Haz clic en **Generar**
5. Tu nuevo par de claves está listo para usar

## Tipos de Clave

| Tipo | Seguridad | Compatibilidad | Recomendado |
|------|-----------|----------------|-------------|
| **Ed25519** | Muy Alta | Servidores modernos | ✓ Sí |
| **RSA 4096** | Alta | Universal | Para sistemas antiguos |
| **ECDSA** | Alta | La mayoría de servidores | Alternativa |

## Importar Claves Existentes

### Desde Archivo
1. Ve a **Configuración** → **Claves SSH**
2. Haz clic en **"Importar Clave"**
3. Selecciona tu archivo de clave privada (ej: `id_ed25519`, `id_rsa`)
4. Ingresa frase de paso si la clave está protegida
5. Haz clic en **Importar**

### Desde Portapapeles
1. Copia el contenido de tu clave privada
2. Haz clic en **"Importar desde Portapapeles"**
3. Pega el contenido de la clave
4. Ingresa frase de paso si es necesario
5. Haz clic en **Importar**

## Añadir Clave Pública al Servidor

### Método Automático
1. Selecciona una clave de tu lista
2. Haz clic en **"Desplegar al Servidor"**
3. Elige el servidor de destino
4. Ingresa credenciales del servidor (una vez)
5. La clave pública se añade a `~/.ssh/authorized_keys`

### Método Manual
1. Copia tu clave pública
2. Conéctate al servidor
3. Añade al archivo authorized_keys:

```bash
# Crear directorio .ssh si no existe
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Añadir clave pública
echo "tu-clave-publica-aqui" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
```

## Usar Claves para Conexión

### Asignar Clave a Servidor
1. Edita la configuración del servidor
2. En **Autenticación**, selecciona **Clave SSH**
3. Elige la clave de la lista desplegable
4. Guarda la configuración

### Conexión Automática
Cuando te conectes:
1. Marix usa automáticamente la clave asignada
2. Si la clave tiene frase de paso, se te pedirá ingresarla
3. Opción de recordar la frase de paso

## Gestionar Claves

### Ver Detalles de Clave
- **Huella digital**: Identificador único de la clave
- **Tipo**: Algoritmo usado
- **Fecha de creación**: Cuándo se generó
- **Servidores**: Dónde está desplegada

### Exportar Clave Pública
1. Selecciona la clave
2. Haz clic en **"Copiar Clave Pública"**
3. Pega donde sea necesario (GitHub, GitLab, etc.)

### Eliminar Clave
1. Selecciona la clave
2. Haz clic en **Eliminar**
3. Confirma la eliminación
4. **Nota**: Esto no elimina la clave de los servidores

## Uso con GitHub/GitLab

### Añadir a GitHub
1. Copia tu clave pública
2. Ve a GitHub → Settings → SSH Keys
3. Haz clic en "New SSH key"
4. Pega la clave y guarda

### Añadir a GitLab
1. Copia tu clave pública
2. Ve a GitLab → Preferences → SSH Keys
3. Pega la clave
4. Haz clic en "Add key"

## Seguridad de Claves

### Mejores Prácticas
- **Usa frase de paso**: Añade protección extra a claves importantes
- **Una clave por propósito**: Usa claves separadas para trabajo/personal
- **Rota regularmente**: Genera nuevas claves periódicamente
- **No compartas claves privadas**: Nunca envíes tu clave privada

### Protección con Frase de Paso
- Las claves con frase de paso requieren desbloqueo
- Marix puede recordar frases de paso durante la sesión
- Considera usar frases de paso fuertes

## Respaldo de Claves

### Exportar Claves
1. Ve a **Configuración** → **Respaldo**
2. Incluye claves SSH en el respaldo
3. Guarda en ubicación segura

### Recuperar Claves
1. Restaura desde respaldo
2. O importa archivos de clave guardados
3. Las claves públicas pueden regenerarse desde claves privadas

## Solución de Problemas

### Clave Rechazada
- Verifica que la clave pública esté en el servidor
- Comprueba permisos de `~/.ssh` y `authorized_keys`
- Asegúrate de que el servidor permite autenticación por clave

### Frase de Paso Incorrecta
- Verifica que ingresas la frase de paso correcta
- Las frases de paso son sensibles a mayúsculas/minúsculas
- Si olvidaste la frase de paso, genera una nueva clave

### Permisos de Clave
En el servidor, verifica:
```bash
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/id_*
chmod 644 ~/.ssh/id_*.pub
```
