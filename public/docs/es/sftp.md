# Gestor de Archivos SFTP

Navega, transfiere y gestiona archivos en servidores remotos usando SFTP (SSH File Transfer Protocol).

## Abrir el Gestor de Archivos

1. Conéctate a cualquier servidor SSH
2. Haz clic en el icono de **Archivos** en la barra de herramientas
3. El navegador de archivos se abre mostrando el directorio home remoto

## Navegación de Archivos

### Explorar Directorios
- Haz clic en carpetas para abrirlas
- Usa la ruta de navegación en la parte superior para retroceder
- Haz clic en el botón de inicio para ir a tu directorio home

### Cambiar Vista
- **Vista de lista**: Información detallada de archivos
- **Vista de cuadrícula**: Iconos de vista previa de miniaturas
- **Archivos ocultos**: Alternar visibilidad de archivos con punto

### Ordenar Archivos
Haz clic en encabezados de columna para ordenar por:
- Nombre
- Tamaño
- Fecha de modificación
- Tipo

## Operaciones de Archivo

### Subir Archivos
1. Haz clic en el botón **Subir**
2. Selecciona archivos de tu dispositivo
3. Los archivos se suben al directorio actual
4. La barra de progreso muestra el estado de la transferencia

### Descargar Archivos
1. Selecciona archivo(s) que quieras descargar
2. Haz clic en **Descargar**
3. Elige ubicación de guardado
4. Los archivos se transfieren a tu dispositivo

### Crear Nueva Carpeta
1. Haz clic en **Nueva Carpeta**
2. Ingresa el nombre de la carpeta
3. Presiona Enter para crear

### Crear Nuevo Archivo
1. Haz clic en **Nuevo Archivo**
2. Ingresa el nombre del archivo
3. El archivo vacío se crea en el directorio actual

### Renombrar
1. Mantén presionado o haz clic derecho en un archivo/carpeta
2. Selecciona **Renombrar**
3. Ingresa nuevo nombre
4. Presiona Enter para confirmar

### Eliminar
1. Selecciona archivo(s) o carpeta(s)
2. Haz clic en **Eliminar**
3. Confirma la eliminación
4. Los elementos se mueven a la papelera o se eliminan permanentemente

### Mover/Copiar
1. Selecciona archivo(s)
2. Haz clic en **Cortar** o **Copiar**
3. Navega al directorio destino
4. Haz clic en **Pegar**

## Edición de Archivos

### Editor Integrado
1. Toca cualquier archivo de texto para abrirlo
2. Edita el contenido en el editor integrado
3. Guarda cambios directamente al servidor
4. Soporta resaltado de sintaxis para código

### Archivos Soportados
- Archivos de texto (.txt, .md, .log)
- Archivos de código (.py, .js, .php, .sh, etc.)
- Archivos de configuración (.conf, .yaml, .json, .xml)
- Archivos web (.html, .css)

## Comprimir y Extraer

### Comprimir Archivos
1. Selecciona archivo(s) o carpeta(s)
2. Haz clic en el menú **Más opciones** (⋮)
3. Elige **Comprimir**
4. Selecciona formato:
   - **ZIP** - Compatible con todo
   - **TAR.GZ** - Estándar de Linux
   - **TAR.BZ2** - Mejor compresión
5. Ingresa nombre del archivo
6. El archivo comprimido se crea en el directorio actual

### Extraer Archivos
1. Selecciona un archivo comprimido (.zip, .tar.gz, .tar.bz2, .7z)
2. Haz clic en el menú **Más opciones** (⋮)
3. Elige **Extraer**
4. Selecciona directorio destino
5. Los archivos se extraen en la ubicación

### Formatos Soportados
| Formato | Comprimir | Extraer |
|---------|-----------|---------|
| ZIP | ✓ | ✓ |
| TAR.GZ | ✓ | ✓ |
| TAR.BZ2 | ✓ | ✓ |
| 7Z | ✗ | ✓ |
| RAR | ✗ | ✓ |

## Permisos de Archivo

### Ver Permisos
- Los permisos se muestran en vista de lista
- Formato: `rwxr-xr-x` o numérico `755`

### Cambiar Permisos
1. Mantén presionado o haz clic derecho en archivo/carpeta
2. Selecciona **Propiedades** o **Permisos**
3. Modifica permisos de lectura/escritura/ejecución
4. Aplica cambios

### Cambiar Propietario
1. Abre propiedades del archivo
2. Cambia campos de usuario/grupo
3. Requiere privilegios apropiados

## Operaciones Múltiples

### Seleccionar Múltiples Archivos
- Mantén Ctrl/Cmd y haz clic en archivos individuales
- Mantén Shift y haz clic para seleccionar rango
- Usa **Seleccionar Todo** para todos los archivos

### Operaciones por Lotes
Los archivos seleccionados pueden ser:
- Descargados como archivo ZIP
- Movidos/copiados juntos
- Eliminados en una operación
- Comprimidos en un archivo

## Progreso de Transferencia

### Cola de Transferencias
- Múltiples transferencias se ponen en cola automáticamente
- La barra de progreso muestra archivo actual
- Ver todas las transferencias activas en el panel de transferencias

### Transferencias en Segundo Plano
- Las transferencias continúan mientras usas otras funciones
- La notificación aparece cuando se completa
- Las transferencias fallidas pueden reintentarse

### Reanudar Transferencia
- Las transferencias grandes pueden reanudarse si se interrumpen
- Marix detecta transferencias parciales
- Opción de reanudar o reiniciar

## Consejos de Rendimiento

- **Archivos grandes**: Usa compresión antes de transferir
- **Muchos archivos**: Comprime en archivo primero
- **Conexión lenta**: Evita archivos de vista previa
- **Timeout**: Aumenta tiempo de espera de conexión en configuración

## Solución de Problemas

### Permiso Denegado
- Verifica permisos de archivo en el servidor
- Puede que necesites privilegios sudo
- Verifica propiedad del directorio

### Transferencia Fallida
- Verifica espacio en disco en el servidor
- Verifica estabilidad de la conexión de red
- Intenta archivos más pequeños primero

### Archivos No Visibles
- Activa mostrar archivos ocultos
- Actualiza el listado del directorio
- Verifica permisos del directorio
