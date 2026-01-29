# Escritorio Remoto RDP

Conéctate a servidores y computadoras Windows usando el Protocolo de Escritorio Remoto (RDP).

## Añadir un Servidor RDP

1. Haz clic en **"Añadir Nuevo Host"**
2. Selecciona **Protocolo**: RDP
3. Completa:
   - **Host/IP**: Dirección del servidor Windows
   - **Puerto**: 3389 (predeterminado)
   - **Usuario**: Nombre de usuario de Windows
   - **Contraseña**: Contraseña de Windows
   - **Dominio**: (opcional) Nombre de dominio de Windows
4. Haz clic en **Crear**

## Importar desde Archivo .rdp

¿Ya tienes un archivo de configuración RDP?

1. En el diálogo de Añadir Servidor, haz clic en **"Importar archivo .rdp"**
2. Selecciona tu archivo `.rdp`
3. Los campos se auto-completan desde el archivo
4. Ajusta cualquier configuración si es necesario
5. Haz clic en **Crear**

## Conectar a RDP

1. Haz doble clic en el servidor RDP en la lista de Hosts
2. La ventana de escritorio remoto se abre dentro de la aplicación
3. Puedes interactuar con el escritorio de Windows normalmente

## Controles RDP

| Entrada | Comportamiento |
|---------|----------------|
| **Ratón** | Clic, arrastrar, desplazamiento funcionan normalmente |
| **Teclado** | Todas las teclas se envían al remoto |
| **Portapapeles** | Copiar/pegar entre local y remoto |

## Desconectar

- Haz clic en × en la pestaña de sesión
- O cierra la aplicación
- El estado de la sesión se preserva en el servidor remoto

## Requisitos en Linux

El soporte RDP en Linux requiere FreeRDP. Marix **detecta automáticamente** si FreeRDP está instalado.

### Auto-Instalación

Si no se encuentra FreeRDP:
1. Aparece una notificación cuando intentas conectar
2. Haz clic en el botón **"Instalar"**
3. Marix instala FreeRDP automáticamente
4. Reconecta después de que la instalación se complete

### Instalación Manual

Si prefieres instalar manualmente:

**Ubuntu/Debian**
```bash
sudo apt install freerdp3-x11 xdotool
```

**Fedora**
```bash
sudo dnf install freerdp xdotool
```

**Arch Linux**
```bash
sudo pacman -S freerdp xdotool
```

## Configuración de Pantalla

Las sesiones RDP se adaptan al tamaño de tu ventana. Para mejor experiencia:
- Maximiza la ventana para experiencia de escritorio completa
- Redimensiona la ventana para ajustar la resolución remota
- Modo pantalla completa disponible mediante controles de ventana

## Consejos de Rendimiento

- **Reduce la profundidad de color** para conexiones lentas
- **Deshabilita efectos visuales** en el lado de Windows
- Usa **conexión cableada** para mejor rendimiento
- Cierra aplicaciones innecesarias en la máquina remota

## Solución de Problemas

### Conexión Rechazada
- Verifica que Escritorio Remoto esté habilitado en Windows
- Comprueba que el Firewall de Windows permita RDP
- Confirma el puerto correcto (predeterminado 3389)

### Pantalla Negra
- Espera un momento - la conexión inicial puede tomar tiempo
- Intenta reconectar
- Verifica que la máquina remota no esté en modo suspensión

### Rendimiento Lento
- Baja la resolución de pantalla
- Reduce la profundidad de color
- Verifica la velocidad de red
- Cierra aplicaciones que consuman ancho de banda

### Autenticación Fallida
- Verifica el formato del nombre de usuario:
  - Local: `usuario`
  - Dominio: `DOMINIO\usuario` o `usuario@dominio.com`
- Verifica que la contraseña sea correcta
- Asegúrate de que la cuenta tenga derechos de acceso a Escritorio Remoto
