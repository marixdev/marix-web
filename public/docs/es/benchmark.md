# Benchmark de Servidor

Prueba y mide el rendimiento de tu servidor directamente desde el terminal SSH con benchmarks completos de sistema, disco y red.

## Interfaz de Benchmark de Servidor

![Interfaz de Benchmark de Servidor](/benchmark.png)

## Descripción General

La función de Benchmark de Servidor proporciona un análisis completo del rendimiento de tu servidor remoto, incluyendo:

- **Información del Sistema**: Detalles de hardware y software
- **Rendimiento del Disco**: Velocidades de lectura/escritura secuencial, latencia I/O e IOPS aleatorios
- **Velocidad de Red**: Pruebas de velocidad multi-región con mediciones de descarga, carga y latencia

## Cómo Usar

### Iniciar un Benchmark

1. Conéctate a un servidor vía SSH
2. Haz clic en el botón **📊 Benchmark** en el pie del terminal
3. (Opcional) Marca **"Upload to paste.dev"** para compartir resultados en línea
4. Haz clic en **Start Benchmark**

### Fases del Benchmark

El benchmark se ejecuta en 4 fases:

| Fase | Descripción | Duración |
|------|-------------|----------|
| 1. Info del Sistema | Recopila info de OS, CPU, RAM, disco | ~2 segundos |
| 2. Prueba de Disco | Ejecuta pruebas dd, ioping y fio | ~45 segundos |
| 3. Prueba de Red | Prueba velocidad a 18 regiones globales | ~3-5 minutos |
| 4. Completado | Muestra resultados y opciones de exportación | - |

## Detalles del Benchmark

### Información del Sistema

Los datos recopilados incluyen:

| Campo | Descripción |
|-------|-------------|
| OS | Nombre y versión del sistema operativo |
| Kernel | Versión del kernel Linux |
| Architecture | Arquitectura de CPU (x86_64, arm64, etc.) |
| Hostname | Nombre del servidor |
| CPU Model | Nombre y especificaciones del procesador |
| CPU Cores | Número de núcleos de CPU |
| CPU Frequency | Frecuencia actual de CPU |
| Memory | RAM usada / total |
| Swap | Espacio swap usado / total |
| Disk | Espacio de disco usado / total |
| Uptime | Tiempo de actividad del servidor |
| Load Average | Promedios de carga 1/5/15 minutos |
| Virtualization | Tipo de VM (KVM, VMware, OpenVZ, etc.) |

### Rendimiento del Disco

#### Escritura/Lectura Secuencial (dd)

- **Método**: `dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync`
- **Ejecuciones**: 3 veces, promediadas para precisión
- **Ubicación de Prueba**: Directorio home (no /tmp para evitar tmpfs)
- **Mide**: Rendimiento secuencial en MB/s o GB/s

#### Latencia I/O (ioping)

- **Método**: `ioping -c 10 -q /`
- **Mide**: Tiempo de respuesta I/O del disco en microsegundos
- **Objetivo**: Sistema de archivos raíz para latencia real del disco

#### IOPS Aleatorios 4K (fio)

- **Método**: fio con lectura/escritura aleatoria 4K, profundidad de cola 64
- **Tiempo de ejecución**: 30 segundos
- **Mide**:
  - Read IOPS
  - Write IOPS
  - Read Bandwidth
  - Write Bandwidth

> **Nota**: Si `fio` o `ioping` no están instalados, el benchmark intentará instalarlos automáticamente.

### Velocidad de Red

Las pruebas se realizan contra servidores Speedtest.net en 18 regiones globales:

| Región | Ubicaciones |
|--------|-------------|
| Asia | Singapur, Tokio, Hong Kong, Seúl, Bombay |
| Europa | Londres, Fráncfort, París, Ámsterdam |
| Américas | Los Ángeles, Nueva York, Chicago, Toronto, São Paulo |
| Oceanía | Sídney, Auckland |
| Medio Oriente/África | Dubái, Johannesburgo |

Para cada servidor, el benchmark mide:
- **Velocidad de Descarga**: MB/s o Gbps
- **Velocidad de Carga**: MB/s o Gbps
- **Latencia**: Tiempo de ida y vuelta en milisegundos

## Opciones de Exportación

Después de completar el benchmark, puedes exportar resultados en múltiples formatos:

### 🌐 HTML

Archivo HTML independiente con diseño estilizado. Características:
- Diseño de tema oscuro
- Diseño responsive
- Todos los datos del benchmark en tarjetas
- Pie de página con enlaces de marix.dev y GitHub

### 📋 JSON

Datos JSON estructurados con:
- Resultados completos del benchmark
- Marcas de tiempo
- Objeto meta con enlaces de sitio web y GitHub
- Formato legible por máquina para automatización

### 🖼️ PNG

Captura de pantalla de imagen de alta resolución:
- Escala 2x para pantallas retina
- Colores RGB (compatible con html2canvas)
- Todas las secciones incluidas
- Pie de página con marca

### 📄 TXT

Archivo de texto con formato de arte ASCII:
- Caracteres de dibujo de caja para tablas
- Fácil de copiar y pegar
- Salida estilo terminal
- Pie de página con enlaces

## Integración con paste.dev

Comparte tus resultados de benchmark en línea con un clic:

### Cómo Funciona

1. Marca **"Upload to paste.dev"** antes de iniciar el benchmark
2. Ejecuta el benchmark
3. Al completar, los resultados se suben automáticamente
4. Aparece un enlace compartible con botones **Copy** y **Open**

### Características

- **Carga Automática**: Formato TXT subido cuando el benchmark se completa
- **Copiar Enlace**: Haz clic en 📋 Copy para copiar URL al portapapeles
- **Abrir Enlace**: Haz clic en 🔗 Open para ver en el navegador
- **Compartir Público**: Cualquiera con el enlace puede ver los resultados

## Requisitos

### Requisitos del Servidor

| Herramienta | Propósito | Auto-Instalación |
|-------------|-----------|------------------|
| `dd` | Velocidad de escritura/lectura del disco | Generalmente preinstalado |
| `ioping` | Medición de latencia I/O | ✅ Sí |
| `fio` | Pruebas de IOPS aleatorios | ✅ Sí |
| `curl` | Pruebas de velocidad de red | Generalmente preinstalado |

### Gestores de Paquetes Soportados

La auto-instalación funciona con:
- **apt** (Debian, Ubuntu)
- **yum** (CentOS, RHEL)
- **dnf** (Fedora)
- **pacman** (Arch Linux)
- **apk** (Alpine Linux)
- **zypper** (openSUSE)

## Solución de Problemas

### La Prueba de Disco Muestra Velocidades Irreales (5+ GB/s)

**Causa**: `/tmp` está montado como tmpfs (disco RAM)

**Solución**: El benchmark detecta esto automáticamente y usa el directorio home en su lugar.

### La Prueba de Red Tarda Demasiado

**Causa**: Algunas regiones pueden ser lentas o inaccesibles

**Solución**: El benchmark prueba múltiples regiones. Las regiones lentas tendrán timeout después de 30 segundos.

### "Permission Denied" al Instalar Herramientas

**Causa**: El usuario no tiene acceso sudo

**Solución**: Pide a tu administrador del servidor que instale `fio` e `ioping`:

```bash
# Debian/Ubuntu
sudo apt install fio ioping

# CentOS/RHEL
sudo yum install fio ioping

# Fedora
sudo dnf install fio ioping
```

### Error de Exportación PNG "oklch"

**Causa**: html2canvas no soporta el formato de color oklch

**Solución**: Corregido en v1.0.19. PNG ahora usa colores RGB hexadecimales.

## Ejemplo de Salida

### Muestra de Formato TXT

```
════════════════════════════════════════════════════════════
  MARIX SERVER BENCHMARK - my-server.com
  1/29/2026, 10:30:45 AM
════════════════════════════════════════════════════════════

┌────────────────────────────────────────────────────────────┐
│                    SYSTEM INFORMATION                      │
└────────────────────────────────────────────────────────────┘
  OS            : Ubuntu 22.04.3 LTS
  CPU           : AMD EPYC 7B13 64-Core Processor
  CPU Cores     : 4
  Memory        : 2.1 GB / 8.0 GB (26%)
  Disk          : 45 GB / 160 GB (28%)
  Virtualization: KVM

┌────────────────────────────────────────────────────────────┐
│                    DISK PERFORMANCE                        │
└────────────────────────────────────────────────────────────┘
  Sequential Write : 580 MB/s
  Sequential Read  : 1.2 GB/s
  I/O Latency      : 227 µs

  Random 4K IOPS (fio):
    Read IOPS   : 45,230
    Write IOPS  : 15,076
    Read BW     : 176.7 MB/s
    Write BW    : 58.9 MB/s

┌────────────────────────────────────────────────────────────┐
│                    NETWORK SPEED                           │
└────────────────────────────────────────────────────────────┘
  Singapore    : ↓ 892 Mbps  ↑ 456 Mbps  (12ms)
  Tokyo        : ↓ 756 Mbps  ↑ 389 Mbps  (45ms)
  Frankfurt    : ↓ 234 Mbps  ↑ 178 Mbps  (156ms)
  ...

────────────────────────────────────────────────────────────
  marix.dev | https://github.com/marixdev/marix
  Generated by Marix SSH Client v1.0.19
────────────────────────────────────────────────────────────
```

## Notas de Seguridad

- El benchmark ejecuta comandos en el servidor remoto vía SSH
- No se envían datos a servidores externos excepto Speedtest.net (para pruebas de velocidad)
- Las cargas a paste.dev son opcionales e iniciadas por el usuario
- Los archivos de prueba temporales se limpian automáticamente después del benchmark
