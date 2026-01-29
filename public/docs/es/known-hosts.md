# Hosts Conocidos

Hosts Conocidos almacena las huellas digitales de los servidores para detectar si la identidad de un servidor cambia (posible problema de seguridad).

## Interfaz de Hosts Conocidos

![Interfaz de Hosts Conocidos](/knowhosts.png)

## ¿Qué son los Hosts Conocidos?

Cuando te conectas por primera vez a un servidor SSH, el servidor presenta su huella digital. Marix la almacena para:
- Verificar la identidad del servidor en conexiones futuras
- Detectar ataques de intermediario (man-in-the-middle)
- Alertarte si una clave de servidor cambia inesperadamente

## Abrir Hosts Conocidos

Haz clic en **"Hosts Conocidos"** en la barra lateral.

## Ver Hosts Conocidos

La lista muestra:

| Columna | Descripción |
|---------|-------------|
| Host | Hostname/IP del servidor |
| Puerto | Puerto SSH |
| Tipo de Clave | Algoritmo de clave SSH (ED25519, RSA, ECDSA) |
| Huella Digital | Identificador único del servidor |
| Añadido | Cuándo se confió en el host |

## Buscar Hosts Conocidos

1. Usa el cuadro de búsqueda en la parte superior
2. Busca por hostname, IP o huella digital

## Filtrar por Tipo de Clave

1. Usa el filtro desplegable
2. Selecciona: Todos, ED25519, RSA o ECDSA

## Importar Host desde Servidor

Añade manualmente la huella digital de un servidor sin conectarte:

1. Haz clic en el botón **"Importar desde Host"**
2. Ingresa:
   - Hostname o IP
   - Puerto (predeterminado 22)
3. Haz clic en **"Importar"**
4. La huella digital del servidor se obtiene y almacena

## Eliminar un Host Conocido

1. Encuentra el host en la lista
2. Haz clic en el botón **Eliminar** (icono de papelera)
3. Confirma la eliminación

### Cuándo Eliminar

- El servidor fue reinstalado y tiene una nueva clave
- La IP/hostname del servidor cambió
- Ya no te conectas a este servidor

## Verificación de Clave de Host

Al conectarte a un nuevo servidor:
1. Marix obtiene la huella digital del servidor
2. Se te pide verificar y confiar en ella
3. Después de aceptar, se almacena en Hosts Conocidos
4. Las conexiones futuras se verifican automáticamente

## Advertencias de Seguridad

### "La clave del host ha cambiado"
Esta advertencia aparece cuando la huella digital de un servidor difiere de la almacenada.

**Posibles causas:**
- El servidor fue reinstalado
- La clave SSH del servidor fue regenerada
- ⚠️ **Ataque de intermediario** (raro pero posible)

**Qué hacer:**
1. Verifica con el administrador del servidor si la clave cambió legítimamente
2. Si se confirma, elimina la entrada antigua de Hosts Conocidos
3. Reconéctate y acepta la nueva huella digital
4. Si es sospechoso, no te conectes

## Mejores Prácticas

1. **Verifica las huellas digitales** al conectarte a nuevos servidores
2. **No ignores las advertencias** sobre claves de host cambiadas
3. **Revisa regularmente** tu lista de Hosts Conocidos
4. **Elimina entradas antiguas** de servidores que ya no usas
