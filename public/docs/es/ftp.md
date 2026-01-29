# Transferencia de Archivos FTP/FTPS

Marix soporta los protocolos FTP y FTPS para conectarse a servidores de archivos que no soportan SSH.

## Diseño de la Interfaz

![Interfaz FTP](/ftp.png)

## Añadir un Servidor FTP

1. Haz clic en **"Añadir Nuevo Host"**
2. Selecciona **Protocolo**: FTP o FTPS
3. Completa:
   - **Host/IP**: Dirección del servidor FTP
   - **Puerto**: 21 (FTP) o 990 (FTPS)
   - **Usuario**: Nombre de usuario FTP
   - **Contraseña**: Contraseña FTP
4. Haz clic en **Crear**

## FTP vs FTPS

| Característica | FTP | FTPS |
|----------------|-----|------|
| Cifrado | Ninguno | TLS/SSL |
| Puerto Predeterminado | 21 | 990 |
| Seguridad | Baja | Alta |
| Caso de Uso | Sistemas heredados | Transferencias seguras |

> **Recomendación**: Usa FTPS cuando esté disponible para transferencias de archivos cifradas.

## Conectar a FTP

1. Haz doble clic en el servidor FTP en la lista de Hosts
2. La conexión se abre directamente en **modo navegador de archivos**
3. No hay terminal disponible (FTP es solo para transferencia de archivos)

## Operaciones de Archivos

Todas las operaciones de archivos funcionan igual que en SFTP:

### Transferir Archivos
- **Arrastrar y soltar** para transferir entre local y remoto
- **Clic derecho** → Descargar/Subir

### Gestión de Archivos
- **Crear carpetas**: Clic derecho → Nueva Carpeta
- **Renombrar archivos**: Clic derecho → Renombrar
- **Eliminar archivos**: Clic derecho → Eliminar

### Navegación
- Usa los botones de la barra de herramientas: Atrás, Adelante, Arriba, Inicio
- Haz doble clic en carpetas para entrar
- Usa la búsqueda para filtrar archivos

## Limitaciones

FTP no soporta:
- **chmod** (cambiar permisos)
- **Enlaces simbólicos**
- **Edición de archivos** (debes descargar, editar, volver a subir)

## Modo Pasivo vs Activo

Marix usa **modo pasivo** por defecto, que funciona mejor con:
- Routers NAT
- Firewalls
- La mayoría de las configuraciones de red modernas

## Solución de Problemas

### Tiempo de Conexión Agotado
- Verifica si el servidor permite tu IP
- Verifica las reglas del firewall en ambos extremos
- Prueba diferentes puertos si están configurados

### Autenticación Fallida
- Verifica usuario y contraseña
- Comprueba si el usuario FTP está habilitado en el servidor
- Algunos servidores requieren formatos de inicio de sesión específicos

### Transferencia Falla
- Verifica el espacio en disco disponible
- Verifica los permisos de archivos en el servidor
- Los archivos grandes pueden agotar el tiempo - verifica los límites del servidor
