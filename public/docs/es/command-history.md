# Historial de Comandos (Recuperación de Comandos)

Marix proporciona una función de **Historial de Comandos** que almacena y recupera comandos ejecutados previamente para cada servidor. Esto te ayuda a volver a ejecutar comandos comunes rápidamente sin escribirlos de nuevo.

## Interfaz del Historial de Comandos

![Interfaz del Historial de Comandos](/cmh.png)

## Características

- **Historial por Servidor**: Cada servidor mantiene su propio historial de comandos
- **Solo Almacenamiento Local**: Los comandos se almacenan localmente, nunca se sincronizan ni respaldan
- **Filtrado de Datos Sensibles**: Filtra automáticamente comandos que contienen contraseñas, tokens o secretos
- **Poda LRU**: Elimina automáticamente comandos antiguos (máximo 50 por servidor)
- **Contador de Ejecución**: Rastrea cuántas veces se ha usado cada comando
- **Búsqueda**: Filtra rápidamente comandos con búsqueda difusa

## Cómo Habilitar

El Historial de Comandos está **deshabilitado por defecto** por privacidad. Para habilitarlo:

1. Abre **Configuración** (icono de engranaje en la barra lateral)
2. Navega a la sección **Terminal**
3. Activa **Habilitar Recuperación de Comandos**

## Uso

### Abrir el Historial de Comandos

Cuando estés en una sesión de terminal, presiona:
- Tecla **`Tab`** cuando la entrada del terminal esté vacía (cursor en línea vacía)
- O haz clic en el botón **Historial** en la barra de herramientas del terminal

### Atajos de Teclado

| Tecla | Acción |
|-------|--------|
| `Tab` (entrada vacía) | Abrir popup de recuperación de comandos |
| `↑` / `↓` | Navegar entre comandos |
| `Enter` | Ejecutar comando seleccionado |
| `Escape` | Cerrar popup |
| `Delete` / `Backspace` | Eliminar comando seleccionado |

### Acciones del Popup

- **Haz clic** en un comando para ejecutarlo inmediatamente
- **Busca** escribiendo en el cuadro de búsqueda
- **Elimina** comandos individuales con el icono de papelera
- **Guardar como Fragmento** para convertir un comando en un fragmento reutilizable

## Privacidad y Seguridad

### Comandos Filtrados

Los comandos que coinciden con estos patrones **nunca se almacenan**:

- Comandos que contienen `password`, `passwd`, `secret`, `token`
- Comandos con `api_key` o `apikey`
- Comandos MySQL con la bandera `-p` (contraseña)
- `sudo -S` (contraseña por stdin)
- Comandos usando `sshpass` o `expect` con contraseña
- Exportaciones de variables de entorno con valores sensibles

### Almacenamiento de Datos

- Almacenado en el `localStorage` del navegador
- **Nunca sincronizado** con servicios en la nube
- **Nunca incluido** en copias de seguridad
- Se borra cuando limpias los datos del navegador

### Limpiar Historial

Para limpiar el historial de comandos:

1. Abre **Configuración** → **Terminal**
2. Haz clic en **Limpiar Historial de Comandos**

O limpia por servidor desde el popup de recuperación de comandos.

## Límites

| Límite | Valor |
|--------|-------|
| Máximo de comandos por servidor | 50 |
| Longitud mínima del comando | 2 caracteres |

## Preguntas Frecuentes

### ¿Por qué algunos comandos no se guardan?

Los comandos que contienen patrones sensibles (contraseñas, tokens, etc.) se filtran automáticamente por seguridad.

### ¿Puedo exportar mi historial de comandos?

No, el historial de comandos es intencionalmente solo local y no exportable por razones de privacidad.

### ¿El historial de comandos se sincroniza entre dispositivos?

No, el historial de comandos se almacena localmente y nunca se sincroniza.
