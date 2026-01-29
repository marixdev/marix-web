# Fragmentos de Comandos

Guarda y reutiliza comandos usados frecuentemente con la función de Fragmentos.

## Crear un Fragmento

1. Ve a **Configuración** → **Fragmentos**
2. Haz clic en **"Añadir Fragmento"**
3. Completa:
   - **Nombre**: Nombre descriptivo
   - **Comando**: El comando real a ejecutar
   - **Descripción**: (opcional) Qué hace el comando
   - **Categoría**: (opcional) Agrupa fragmentos relacionados
4. Haz clic en **Guardar**

## Usar un Fragmento

### Desde la Terminal
1. Haz clic en el icono de **Fragmentos** en la barra de herramientas
2. Busca o navega fragmentos
3. Toca un fragmento para insertarlo en la terminal
4. Presiona Enter para ejecutar

### Tecla de Acceso Rápido
1. Mientras estás en la terminal, presiona el atajo de acceso rápido configurado
2. La lista de fragmentos aparece como menú desplegable
3. Selecciona un fragmento para insertar

## Organizar Fragmentos

### Categorías
Agrupa fragmentos relacionados en categorías:
- **Sistema** - Comandos de administración del sistema
- **Git** - Comandos de control de versiones
- **Docker** - Gestión de contenedores
- **Base de Datos** - Consultas y respaldos de BD
- **Redes** - Diagnósticos de red

### Búsqueda
- Busca por nombre, comando o descripción
- Los resultados se filtran mientras escribes
- Los fragmentos recientes aparecen primero

## Variables de Fragmento

Usa marcadores de posición para valores dinámicos:

```bash
# Sintaxis de marcador de posición
ssh ${usuario}@${host}

# Con valores predeterminados
mysqldump -u ${usuario:root} ${basedatos}

# Fragmento de selección múltiple
git checkout ${rama:main|develop|staging}
```

### Tipos de Variables

| Sintaxis | Comportamiento |
|----------|----------------|
| `${nombre}` | Solicita entrada |
| `${nombre:predeterminado}` | Usa predeterminado si está vacío |
| `${nombre:op1\|op2\|op3}` | Muestra selector de opciones |
| `${fecha}` | Inserta fecha actual |
| `${hora}` | Inserta hora actual |

## Fragmentos de Ejemplo

### Gestión de Sistema
```bash
# Ver uso de disco
df -h

# Verificar uso de memoria
free -m

# Listar procesos principales por CPU
ps aux --sort=-%cpu | head -20

# Seguir logs del sistema
tail -f /var/log/syslog
```

### Administración Web
```bash
# Reiniciar Nginx
sudo systemctl restart nginx

# Probar configuración de Nginx
sudo nginx -t

# Ver logs de acceso
tail -f /var/log/nginx/access.log
```

### Base de Datos
```bash
# Respaldo de MySQL
mysqldump -u ${usuario:root} -p ${basedatos} > respaldo_$(date +%Y%m%d).sql

# Estado de PostgreSQL
sudo systemctl status postgresql

# Consola de Redis
redis-cli
```

### Docker
```bash
# Listar contenedores en ejecución
docker ps

# Ver logs de contenedor
docker logs -f ${nombre_contenedor}

# Entrar a contenedor
docker exec -it ${nombre_contenedor} /bin/bash

# Limpieza de Docker
docker system prune -af
```

## Importar/Exportar

### Exportar Fragmentos
1. Ve a **Configuración** → **Fragmentos**
2. Haz clic en **Exportar**
3. Guarda archivo JSON en tu dispositivo

### Importar Fragmentos
1. Ve a **Configuración** → **Fragmentos**
2. Haz clic en **Importar**
3. Selecciona archivo JSON de fragmentos
4. Los fragmentos se fusionan con los existentes

## Sincronización de Fragmentos

Los fragmentos se sincronizan a través de dispositivos cuando el respaldo en la nube está habilitado:
- Los cambios se sincronizan automáticamente
- La resolución de conflictos prefiere los cambios más recientes
- Los fragmentos eliminados se eliminan en todos los dispositivos

## Consejos

- **Nombra claramente**: Usa nombres descriptivos para encontrar fragmentos rápidamente
- **Añade descripciones**: Documenta qué hace cada comando
- **Usa categorías**: Organiza fragmentos por propósito
- **Variables para flexibilidad**: Haz fragmentos reutilizables con marcadores de posición
- **Respaldo regular**: Exporta fragmentos periódicamente
