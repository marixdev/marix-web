# Reenvío de Puertos (Túneles SSH)

Los túneles SSH enrutan el tráfico de forma segura a través de una conexión SSH.

## Interfaz de Reenvío de Puertos

![Interfaz de Reenvío de Puertos](/portfoward.png)

## Tipos de Reenvío de Puertos

| Tipo | Dirección | Caso de Uso |
|------|-----------|-------------|
| **Local** | Remoto → Local | Acceder a servicio remoto a través de puerto local |
| **Remoto** | Local → Remoto | Exponer servicio local a red remota |
| **Dinámico** | Proxy SOCKS | Crear un proxy SOCKS a través de SSH |

## Abrir Reenvío de Puertos

Haz clic en **"Reenvío de Puertos"** en la barra lateral.

## Crear un Reenvío de Puerto

### Paso 1: Abrir Diálogo
Haz clic en el botón **"Añadir Reenvío"**

### Paso 2: Configurar

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| Nombre | Nombre descriptivo | "MySQL a localhost" |
| Tipo | Local, Remoto o Dinámico | Local |
| Servidor | Servidor SSH para hacer el túnel | Mi VPS |
| Host Local | Dirección local de enlace | 127.0.0.1 |
| Puerto Local | Número de puerto local | 3307 |
| Host Remoto | Destino remoto | 127.0.0.1 |
| Puerto Remoto | Puerto remoto | 3306 |

### Paso 3: Guardar
Haz clic en **"Añadir"** o **"Guardar"**

## Ejemplos de Casos de Uso

### Reenvío Local: Acceder a MySQL Remoto

Accede a la base de datos MySQL de tu servidor desde tu máquina local:

| Configuración | Valor |
|---------------|-------|
| Tipo | Local |
| Local | 127.0.0.1:3307 |
| Remoto | 127.0.0.1:3306 |

**Uso:** Conéctate a `localhost:3307` para llegar al MySQL del servidor.

### Reenvío Remoto: Exponer App Local

Permite que el servidor acceda a tu servidor de desarrollo local:

| Configuración | Valor |
|---------------|-------|
| Tipo | Remoto |
| Local | 127.0.0.1:3000 |
| Remoto | 0.0.0.0:8080 |

**Uso:** El puerto 8080 del servidor se conecta a tu localhost:3000.

### Dinámico: Proxy SOCKS

Crea un proxy SOCKS5 para navegar a través del servidor:

| Configuración | Valor |
|---------------|-------|
| Tipo | Dinámico |
| Local | 127.0.0.1:1080 |

**Uso:** Configura aplicaciones para usar proxy SOCKS5 en `localhost:1080`.

## Gestionar Reenvíos de Puerto

### Iniciar
1. Encuentra el reenvío en la lista
2. Haz clic en el botón **Iniciar** (▶)
3. El estado cambia a "Conectado"

### Detener
1. Encuentra el reenvío en ejecución
2. Haz clic en el botón **Detener** (■)
3. El estado cambia a "Desconectado"

### Editar
1. **Detén** el reenvío si está en ejecución
2. Haz clic en el botón **Editar** (lápiz)
3. Modifica la configuración
4. Haz clic en **Guardar**

### Eliminar
1. Detén el reenvío si está en ejecución
2. Haz clic en el botón **Eliminar** (papelera)
3. Confirma la eliminación

## Monitorear Estado

La lista muestra:
- **Indicador de estado**: Verde = conectado, Rojo = error
- **Cuenta de conexiones**: Conexiones activas
- **Bytes transferidos**: Tráfico entrante/saliente

## Casos de Uso Comunes

| Servicio | Puerto Local | Puerto Remoto | Tipo |
|----------|-------------|---------------|------|
| MySQL | 3307 | 3306 | Local |
| PostgreSQL | 5433 | 5432 | Local |
| Redis | 6380 | 6379 | Local |
| MongoDB | 27018 | 27017 | Local |
| App Web | 8080 | 80 | Local |
| Jupyter | 8889 | 8888 | Local |

## Solución de Problemas

### Puerto Ya en Uso
- Elige un puerto local diferente
- Verifica si otra aplicación está usando ese puerto
- Detén servicios en conflicto

### Conexión Rechazada
- Verifica que el servicio remoto esté ejecutándose
- Comprueba el firewall en el servidor
- Asegúrate de que el host/puerto remoto sean correctos

### El Túnel se Cae
- Verifica la estabilidad de la conexión SSH
- El servidor puede tener configuraciones de timeout
- Considera usar keep-alive
