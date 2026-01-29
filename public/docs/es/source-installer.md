# Instalador de Código Fuente

Despliega rápidamente frameworks y aplicaciones web populares en tus servidores.

## Frameworks Soportados

### Frameworks PHP
- **Laravel** - Framework PHP para artesanos web
- **WordPress** - Sistema de gestión de contenidos
- **Drupal** - Plataforma CMS empresarial
- **Joomla** - Sistema de gestión de contenidos
- **CodeIgniter** - Framework PHP ligero
- **Symfony** - Framework de aplicaciones web

### Frameworks JavaScript
- **Node.js** - Entorno de ejecución JavaScript
- **Express** - Framework web minimalista para Node.js
- **Next.js** - Framework React para producción
- **Nuxt.js** - Framework Vue.js intuitivo
- **Nest.js** - Framework Node.js progresivo

### Frameworks Python
- **Django** - Framework web Python de alto nivel
- **Flask** - Micro framework web
- **FastAPI** - Framework API moderno y rápido

### Otros
- **Ruby on Rails** - Framework de aplicaciones web
- **Go/Gin** - Framework web HTTP de Go

## Usar el Instalador

1. Conéctate a tu servidor vía SSH
2. Abre el **Instalador de Código Fuente** desde la barra de herramientas
3. Selecciona un framework de la lista
4. Configura opciones de instalación:
   - **Directorio de destino**: Dónde instalar
   - **Versión**: Versión del framework a instalar
   - **Opciones adicionales**: Configuraciones específicas del framework
5. Haz clic en **Instalar**
6. Espera a que la instalación se complete

## Instalación de Laravel

### Configuración Básica
1. Selecciona **Laravel** de la lista de frameworks
2. Especifica el directorio de destino (ej: `/var/www/miapp`)
3. Elige la versión de Laravel
4. Haz clic en **Instalar**

### Lo Que Se Instala
- Estructura de proyecto Laravel
- Dependencias de Composer
- Archivo .env con configuración básica
- Clave de aplicación generada

### Después de la Instalación
```bash
# Configurar base de datos en .env
# Ejecutar migraciones
php artisan migrate

# Iniciar servidor de desarrollo
php artisan serve
```

## Instalación de WordPress

### Configuración Básica
1. Selecciona **WordPress** de la lista
2. Especifica directorio de destino
3. Ingresa información de base de datos:
   - Host de BD
   - Nombre de BD
   - Usuario de BD
   - Contraseña de BD
4. Haz clic en **Instalar**

### Lo Que Se Instala
- Archivos core de WordPress
- wp-config.php configurado
- Estructura de base de datos

### Después de la Instalación
1. Abre tu sitio en el navegador
2. Completa el instalador de WordPress
3. Crea usuario administrador

## Instalación de Node.js

### Configuración Básica
1. Selecciona **Node.js** de la lista
2. Elige versión de Node.js (LTS recomendado)
3. Especifica directorio del proyecto

### Lo Que Se Instala
- Node.js y npm
- Inicialización del proyecto (package.json)
- Dependencias básicas

### Después de la Instalación
```bash
# Instalar dependencias
npm install

# Iniciar aplicación
npm start
```

## Opciones de Configuración

### Configuración de Base de Datos
Para frameworks que requieren base de datos:
- **Tipo de BD**: MySQL, PostgreSQL, SQLite
- **Host**: Servidor de base de datos
- **Puerto**: Puerto de BD (predeterminado varía)
- **Nombre de BD**: Nombre de la base de datos
- **Usuario**: Usuario de base de datos
- **Contraseña**: Contraseña de BD

### Configuración de Servidor Web
- **Document Root**: Directorio público del framework
- **Configuración de Virtual Host**: Generación automática de configuración de Nginx/Apache

## Registro de Instalación

El instalador mantiene un registro de todas las acciones:
- Comandos ejecutados
- Archivos creados
- Errores encontrados
- Duración de instalación

Ver el registro si la instalación falla para diagnosticar problemas.

## Requisitos

### Requisitos del Servidor
- SSH acceso con sudo o root
- Conexión a internet en el servidor
- Suficiente espacio en disco

### Requisitos por Framework
| Framework | PHP | Node.js | Python | Composer |
|-----------|-----|---------|--------|----------|
| Laravel | ✓ | - | - | ✓ |
| WordPress | ✓ | - | - | - |
| Express | - | ✓ | - | - |
| Django | - | - | ✓ | - |
| Next.js | - | ✓ | - | - |

## Solución de Problemas

### Error de Permisos
- Verifica que tu usuario SSH tenga acceso sudo
- Verifica permisos del directorio de destino
- Ejecuta el instalador como root si es necesario

### Fallo de Instalación de Dependencias
- Verifica conectividad a internet
- Verifica versiones de PHP/Node.js/Python
- Revisa el registro de instalación para errores específicos

### Problemas de Conexión a Base de Datos
- Verifica credenciales de base de datos
- Asegúrate de que el servidor de BD esté ejecutándose
- Verifica configuración del firewall

## Consejos

- **Respaldo primero**: Siempre respalda antes de instalar en producción
- **Usa versiones estables**: Elige versiones LTS para servidores de producción
- **Revisa requisitos**: Asegúrate de que el servidor cumple los requisitos del framework
- **Configura correctamente**: Actualiza archivos de configuración después de la instalación
- **Asegura la instalación**: Cambia credenciales predeterminadas y configura permisos
