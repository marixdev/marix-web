# Gestor de DNS de Cloudflare

Gestiona tus registros DNS de Cloudflare directamente desde Marix.

## Interfaz del Gestor de DNS de Cloudflare

![Interfaz del Gestor de DNS de Cloudflare](/cf.png)

## Configuración

### Paso 1: Obtener Token API

1. Ve al [Panel de Cloudflare](https://dash.cloudflare.com)
2. Navega a Perfil → Tokens API
3. Haz clic en "Crear Token"
4. Usa la plantilla "Editar zona DNS" o crea una personalizada con:
   - Zone.DNS: Editar
   - Zone.Zone: Leer
5. Copia el token

### Paso 2: Configurar en Marix

1. Ve a **Configuración** en la barra lateral
2. Encuentra la sección **"Token API de Cloudflare"**
3. Haz clic en **"Añadir Token"**
4. Pega tu token
5. Haz clic en **"Guardar"**

## Usar Cloudflare DNS

1. Haz clic en **"Cloudflare"** en la barra lateral
2. Tus dominios se cargan en un menú desplegable
3. Selecciona un dominio
4. Aparecen los registros DNS de ese dominio

## Ver Registros DNS

La tabla muestra:

| Columna | Descripción |
|---------|-------------|
| Tipo | Tipo de registro (A, AAAA, CNAME, MX, TXT, etc.) |
| Nombre | Nombre del registro/subdominio |
| Contenido | Valor del registro (IP, hostname, texto) |
| TTL | Tiempo de vida (Auto o segundos) |
| Proxy | Proxificado a través de Cloudflare o solo DNS |

## Añadir un Registro DNS

### Paso 1: Abrir Diálogo
Haz clic en el botón **"Añadir Registro"**

### Paso 2: Completar Detalles

| Campo | Descripción |
|-------|-------------|
| Tipo | Selecciona: A, AAAA, CNAME, MX, TXT, SRV, etc. |
| Nombre | Subdominio (ej., "www") o "@" para raíz |
| Contenido | El valor (IP para A, hostname para CNAME, etc.) |
| TTL | Tiempo de vida: Auto o segundos personalizados |
| Proxy | Activar: Proxificado (nube naranja) o solo DNS (gris) |
| Comentario | Nota opcional |

### Paso 3: Crear
Haz clic en **"Crear"**

## Tipos de Registro Comunes

### Registro A
Apunta un dominio a una dirección IPv4.

| Campo | Ejemplo |
|-------|---------|
| Tipo | A |
| Nombre | @ (o www) |
| Contenido | 192.168.1.100 |

### Registro AAAA
Apunta un dominio a una dirección IPv6.

| Campo | Ejemplo |
|-------|---------|
| Tipo | AAAA |
| Nombre | @ |
| Contenido | 2001:db8::1 |

### Registro CNAME
Crea un alias a otro dominio.

| Campo | Ejemplo |
|-------|---------|
| Tipo | CNAME |
| Nombre | www |
| Contenido | example.com |

### Registro MX
Especifica servidores de correo.

| Campo | Ejemplo |
|-------|---------|
| Tipo | MX |
| Nombre | @ |
| Contenido | mail.example.com |
| Prioridad | 10 |

### Registro TXT
Almacena datos de texto (SPF, DKIM, verificación).

| Campo | Ejemplo |
|-------|---------|
| Tipo | TXT |
| Nombre | @ |
| Contenido | v=spf1 include:_spf.google.com ~all |

## Editar un Registro DNS

1. Encuentra el registro en la tabla
2. Haz clic en el botón **Editar** (icono de lápiz)
3. Modifica los campos
4. Haz clic en **"Guardar"**

## Eliminar un Registro DNS

1. Encuentra el registro
2. Haz clic en el botón **Eliminar** (icono de papelera)
3. Confirma la eliminación

## Estado del Proxy

| Icono | Estado | Efecto |
|-------|--------|--------|
| 🟠 Nube naranja | Proxificado | El tráfico pasa por el CDN de Cloudflare |
| ⚪ Nube gris | Solo DNS | Conexión directa al origen |

### Cuándo Usar el Proxy

**Proxificado (Naranja):**
- Servidores web (HTTP/HTTPS)
- Quieres protección DDoS
- Quieres caché CDN

**Solo DNS (Gris):**
- Servidores SSH, FTP, correo
- Servicios no HTTP
- Necesitas conexión directa a la IP

## Actualizar Registros

Haz clic en el botón **Actualizar** junto al menú desplegable de dominios para recargar los registros.

## Consejos

- **TTL Auto** es recomendado para la mayoría de los casos
- **Prueba los cambios** usando herramientas de consulta DNS
- **Respalda los registros** antes de hacer cambios importantes
- La **propagación** puede tomar hasta 48 horas globalmente
