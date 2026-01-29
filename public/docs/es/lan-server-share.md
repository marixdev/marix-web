# Compartir Servidor LAN

Comparte las configuraciones de tus servidores con otros usuarios de Marix en la misma red local.

## Interfaz de Compartir Servidor LAN

![Interfaz de Compartir Servidor LAN](/servershare.png)

## Requisitos

> ⚠️ **Importante:** Tanto el emisor como el receptor deben tener **Descubrimiento LAN habilitado**.
> 
> Haz clic en el botón 🌐 en la barra de encabezado o usa `Ctrl+Shift+L` para activar/desactivar.

- Ambos dispositivos en la misma red (WiFi/LAN)
- Descubrimiento LAN habilitado en ambos dispositivos
- Marix ejecutándose en ambos dispositivos

## Casos de Uso

- Compartir acceso a servidores con miembros del equipo
- Configurar una nueva computadora rápidamente
- Transferir configuraciones entre dispositivos
- Incorporar nuevos miembros al equipo

## Abrir Compartir Servidor

### Método 1: Menú de Clic Derecho
1. En la lista de Hosts, haz clic derecho en un servidor
2. Selecciona **"Compartir en LAN"**

### Método 2: Selección Múltiple
1. Mantén presionado `Ctrl` (o `⌘` en Mac) y haz clic en múltiples servidores
2. Haz clic en el botón **"Compartir"** que aparece
3. O haz clic derecho y selecciona **"Compartir en LAN"**

## Compartir Servidores (Emisor)

### Paso 1: Habilitar Descubrimiento LAN
Haz clic en el icono **🌐** (globo) en la barra de encabezado.

### Paso 2: Seleccionar Servidores
- Clic derecho → "Compartir en LAN" para un solo servidor
- O selección múltiple de servidores y luego clic en Compartir

### Paso 3: Modal de Selección de Servidores
- Revisa los servidores seleccionados
- Haz clic en **"Seleccionar Todos"** para compartir todos los servidores
- Haz clic en **"Limpiar"** para deseleccionar todos
- Haz clic en etiquetas para seleccionar rápidamente servidores con esa etiqueta

### Paso 4: Haz Clic en el Botón "Compartir"

### Paso 5: Configurar Opciones

| Opción | Descripción |
|--------|-------------|
| Incluir datos sensibles ✅ | Compartir contraseñas y claves privadas |
| Incluir datos sensibles ❌ | Eliminar contraseñas/claves (el receptor las ingresa manualmente) |

### Paso 6: Anotar Código de Emparejamiento
El **Código de Emparejamiento** de 6 dígitos es válido por 5 minutos.

### Paso 7: Compartir Código
Dile al receptor tu código de emparejamiento.

### Paso 8: Enviar
Haz clic en **"Compartir en LAN"**

El estado muestra: "Enviado(s) X servidor(es). Esperando receptor..."

## Recibir Servidores (Receptor)

### Paso 1: Habilitar Descubrimiento LAN
Haz clic en el icono **🌐** (globo) en la barra de encabezado.

### Paso 2: Esperar Notificación
Aparece una ventana emergente cuando alguien te envía servidores.

O ve a Hosts → clic derecho en área vacía → "Recibir Servidores Compartidos"

### Paso 3: Ingresar Código de Emparejamiento
Ingresa el código de 6 dígitos del emisor.

### Paso 4: Importar
Haz clic en **"Descifrar e Importar"**

### Paso 5: ¡Listo!
Los servidores se importan con:
- Todas las configuraciones originales
- Una etiqueta automática **"LAN-Import"** añadida
- Contraseñas/claves (si el emisor las incluyó)

El estado muestra: "¡Importado(s) X servidor(es) exitosamente!"

## Seguridad

- Todas las transferencias están **cifradas**
- Se requiere código de emparejamiento de 6 dígitos
- Los códigos expiran después de 5 minutos
- Ningún dato pasa por servidores externos
- Transferencia directa de dispositivo a dispositivo

## Solución de Problemas

### No Aparecen Dispositivos

1. Ambos dispositivos en la **misma red** (WiFi/LAN)
2. **Descubrimiento LAN ACTIVADO** en ambos dispositivos
3. Haz clic en "Actualizar" para volver a escanear
4. Verifica que el firewall no esté bloqueando Marix

### Código de Emparejamiento Expirado

- Los códigos expiran después de 5 minutos
- El emisor puede hacer clic en "Regenerar" para un nuevo código

### Error "Código de Emparejamiento Incorrecto"

- Verifica el código con el emisor
- Los códigos distinguen mayúsculas y minúsculas
- Solicita un nuevo código si es necesario

### Faltan Contraseñas en los Servidores

- El emisor puede haber deshabilitado "Incluir datos sensibles"
- Ingresa las contraseñas manualmente después de importar
- Pide al emisor que vuelva a compartir con datos sensibles habilitados
