# Cliente de Base de Datos

Marix incluye un cliente de base de datos integrado para conectarse y gestionar servidores de bases de datos directamente desde la aplicación.

## Interfaz del Cliente de Base de Datos

![Interfaz del Cliente de Base de Datos](/database.png)

---

## Bases de Datos Soportadas

| Base de Datos | Protocolo | Características |
|---------------|-----------|-----------------|
| **MySQL / MariaDB** | `mysql` | Editor de consultas, navegador de tablas, visor de datos, inspector de estructura |
| **PostgreSQL** | `postgresql` | Editor de consultas, navegador de tablas, visor de datos, inspector de estructura |
| **MongoDB** | `mongodb` | Navegador de colecciones, visor de documentos, interfaz de consultas |
| **Redis** | `redis` | Navegador clave-valor, interfaz de comandos |
| **SQLite** | `sqlite` | Soporte de archivos locales, editor SQL completo |

---

## Añadir un Servidor de Base de Datos

1. Haz clic en el botón **+ Añadir** en la barra lateral
2. Selecciona la pestaña **Base de Datos** (o el icono de base de datos)
3. Elige tu tipo de base de datos

### MySQL / MariaDB / PostgreSQL

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Nombre | Nombre para mostrar | `MySQL Producción` |
| Host | Hostname o IP del servidor | `db.example.com` |
| Puerto | Puerto de la base de datos | `3306` (MySQL) / `5432` (PostgreSQL) |
| Usuario | Usuario de la base de datos | `root` |
| Contraseña | Contraseña del usuario | `••••••••` |
| Base de Datos | Base de datos predeterminada (opcional) | `miapp_produccion` |
| SSL | Habilitar SSL/TLS | ☑️ Habilitado |

### MongoDB

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Nombre | Nombre para mostrar | `MongoDB Atlas` |
| Cadena de Conexión | URI completo de MongoDB | `mongodb+srv://usuario:pass@cluster.mongodb.net/` |
| Host | Hostname del servidor | `localhost` |
| Puerto | Puerto de MongoDB | `27017` |
| Base de Datos | Base de datos predeterminada | `miapp` |

### Redis

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Nombre | Nombre para mostrar | `Redis Cache` |
| Host | Hostname del servidor | `redis.example.com` |
| Puerto | Puerto de Redis | `6379` |
| Contraseña | Contraseña de autenticación (opcional) | `••••••••` |
| Base de Datos | Número de base de datos | `0` |

### SQLite

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Nombre | Nombre para mostrar | `SQLite Local` |
| Ruta del Archivo | Ruta al archivo .db | `/home/usuario/app.db` |

---

## Interfaz del Cliente de Base de Datos

### 📊 Pestaña Datos

Navega y visualiza datos de tablas:

- **Selecciona base de datos** del menú desplegable (si hay múltiples)
- **Haz clic en una tabla** en la barra lateral para ver sus datos
- **Paginación** - Navega entre filas (100 por página por defecto)
- **Ordenar columnas** - Haz clic en los encabezados de columna para ordenar
- **Filtro rápido** - Busca dentro de los datos mostrados

### ⚡ Pestaña Consulta

Escribe y ejecuta consultas SQL con:

- **Resaltado de sintaxis** - Palabras clave SQL, cadenas, números
- **Ejecutar** - Ejecuta consulta con `Ctrl+Enter` o botón Ejecutar
- **Cuadrícula de resultados** - Ve resultados de consulta en una tabla
- **Exportar** - Descarga resultados como CSV o JSON
- **Tiempo de ejecución** - Ve cuánto tardan las consultas

### 🏗️ Pestaña Estructura

Inspecciona esquemas de tablas mostrando:

- Nombres de columnas y tipos de datos
- Claves primarias, claves foráneas, restricciones únicas
- Columnas nulables y valores predeterminados
- Configuraciones de auto-incremento

### 🔗 Pestaña ERD

Ver Diagrama Entidad-Relación:

- Representación visual de tablas y relaciones
- Conexiones de claves foráneas mostradas como líneas
- Arrastrar y hacer zoom para navegar esquemas grandes
- Exportar como imagen (PNG)

---

## Atajos de Teclado

| Atajo | Acción |
|-------|--------|
| `Ctrl/Cmd + Enter` | Ejecutar consulta |
| `Ctrl/Cmd + S` | Guardar consulta en archivo |
| `Ctrl/Cmd + O` | Abrir consulta desde archivo |
| `Ctrl/Cmd + Shift + F` | Formatear SQL |
| `Escape` | Cancelar consulta en ejecución |

---

## Seguridad de Conexión

### Cifrado SSL/TLS

Habilita la casilla **SSL** al añadir servidor. Para certificados personalizados:

- Ruta del certificado CA
- Ruta del certificado de cliente (opcional)
- Ruta de la clave de cliente (opcional)

### Túnel SSH

Conectar a través de un túnel SSH:

1. Primero añade un servidor SSH en Marix
2. Al añadir la base de datos, habilita **Túnel SSH**
3. Selecciona el servidor SSH a través del cual hacer el túnel

---

## Mejores Prácticas

1. **Usa Cuentas de Solo Lectura** - Crea usuarios de base de datos con permisos limitados
2. **Limita los Conjuntos de Resultados** - Siempre usa `LIMIT` para evitar cargar demasiados datos
3. **Prueba Antes de Ejecutar** - Para `UPDATE` o `DELETE`, primero ejecuta un `SELECT`
4. **Usa Transacciones** - Para operaciones críticas, envuélvelas en transacciones

---

## Solución de Problemas

| Problema | Solución |
|----------|----------|
| Conexión Fallida | Verifica host/puerto, credenciales, firewall, configuración SSL |
| Tiempo de Espera de Consulta | Añade LIMIT, verifica índices, verifica carga del servidor |
| Permiso Denegado | Verifica permisos, acceso a base de datos, contacta al administrador |
| Error de Certificado SSL | Deshabilita SSL, verifica validez del certificado, añade certificado CA |
