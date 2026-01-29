# Herramientas de Red

Un conjunto completo de herramientas de diagnóstico de red integradas en Marix.

## Interfaz de Herramientas de Red

![Interfaz de Herramientas de Red](/loockup.png)

## Abrir Herramientas de Red

Haz clic en **"Consulta"** en la barra lateral.

## Herramientas Disponibles

| Herramienta | Función | Ejemplo de Entrada |
|-------------|---------|-------------------|
| Registro A | Obtener dirección IPv4 | example.com |
| Registro AAAA | Obtener dirección IPv6 | example.com |
| Consulta MX | Obtener servidores de correo | example.com |
| Registro TXT | Obtener registros TXT | example.com |
| Verificar SPF | Verificar registro SPF | example.com |
| Consulta CNAME | Obtener nombre canónico | www.example.com |
| Consulta NS | Obtener servidores de nombres | example.com |
| Registro SOA | Obtener detalles SOA | example.com |
| Consulta PTR | DNS inverso | 8.8.8.8 |
| Ping | Hacer ping a un host | example.com |
| Traceroute | Trazar ruta de red | example.com |
| Puerto TCP | Probar si el puerto está abierto | example.com |
| Verificar Web | Verificar estado del sitio web | example.com |
| Lista Negra | Verificar listas negras de IP | 1.2.3.4 |
| Verificar DNS | Análisis completo de DNS | example.com |
| Info IP | Obtener información de propiedad de IP | 8.8.8.8 |
| WHOIS | Información de registro de dominio | example.com |

## Usar una Herramienta de Red

### Paso 1: Seleccionar Herramienta
Haz clic en una herramienta de la barra lateral izquierda.

### Paso 2: Ingresar Objetivo
- Nombre de dominio, dirección IP o hostname
- Para Puerto TCP: también ingresa número de puerto

### Paso 3: Ejecutar
Haz clic en el botón **"Ejecutar"** o presiona Enter.

### Paso 4: Ver Resultados
- **Insignia verde** = Éxito
- **Insignia roja** = Fallido/Error
- La marca de tiempo muestra cuándo se ejecutó

## Herramientas DNS

### Registro A
Devuelve la(s) dirección(es) IPv4 de un dominio.

```
example.com → 93.184.216.34
```

### Registro AAAA
Devuelve la(s) dirección(es) IPv6 de un dominio.

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### Consulta MX
Devuelve los servidores de intercambio de correo de un dominio.

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### Registro TXT
Devuelve registros de texto (a menudo usados para verificación, SPF, DKIM).

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### Consulta CNAME
Devuelve el nombre canónico (alias) de un subdominio.

```
www.example.com → example.com
```

### Consulta NS
Devuelve los servidores de nombres de un dominio.

```
example.com →
  ns1.example.com
  ns2.example.com
```

### Consulta PTR (DNS Inverso)
Devuelve el hostname de una dirección IP.

```
8.8.8.8 → dns.google
```

## Diagnósticos de Red

### Ping
Prueba la conectividad y mide la latencia.

```
Haciendo ping a example.com:
  Respuesta: 64 bytes, tiempo=23ms
  Respuesta: 64 bytes, tiempo=21ms
  Promedio: 22ms
```

### Traceroute
Traza la ruta de red hacia un destino.

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### Prueba de Puerto TCP
Verifica si un puerto específico está abierto.

**Botones rápidos de puerto:** SSH(22), HTTP(80), HTTPS(443), MySQL(3306), etc.

```
example.com:443 → Abierto
example.com:22 → Cerrado/Filtrado
```

### Verificar Web
Prueba la conectividad HTTP/HTTPS y la respuesta.

```
https://example.com
  Estado: 200 OK
  Tiempo de respuesta: 145ms
  SSL: Válido
```

## Herramientas de IP

### Info IP
Obtiene información de propiedad y ubicación de una IP.

```
8.8.8.8 →
  Organización: Google LLC
  País: Estados Unidos
  ASN: AS15169
```

### Verificar Lista Negra
Verifica si una IP está en listas negras de spam/abuso.

```
Verificando 1.2.3.4:
  ✅ Spamhaus: Limpio
  ✅ Barracuda: Limpio
  ⚠️ SORBS: Listado
```

## Herramientas de Dominio

### WHOIS
Obtiene información de registro de dominio.

```
example.com →
  Registrador: Example Registrar
  Creado: 1995-08-14
  Expira: 2025-08-13
  Estado: clientTransferProhibited
```

### Verificar DNS
Verificación completa de salud de DNS.

```
Verificando example.com:
  ✅ Registros NS encontrados
  ✅ Registro A resuelve
  ✅ Registros MX configurados
  ✅ Registro SPF válido
```

## Consejos

- **Copia los resultados** seleccionando y usando `Ctrl+C`
- **Ejecuta múltiples verificaciones** en el mismo dominio
- Los resultados muestran **marcas de tiempo** como referencia
- Usa **Info IP** para investigar IPs desconocidas
- **Verificar lista negra** antes de enviar correos desde una nueva IP
