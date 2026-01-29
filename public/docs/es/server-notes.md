# Notas del Servidor

Adjunta notas adhesivas a cualquier servidor para mantener información importante al alcance.

## Añadir una Nota

1. Abre cualquier servidor en tu lista de Hosts
2. Haz clic en el icono de **Notas** en la barra de herramientas
3. Escribe tu nota en el editor
4. Las notas se guardan automáticamente

## Qué Guardar en las Notas

- **Credenciales de acceso** (contraseñas de root, claves API)
- **Información de configuración** (rutas de archivos, configuraciones)
- **Instrucciones** (comandos de despliegue, pasos de reinicio)
- **Contactos** (administrador de sistemas, info de soporte)
- **Recordatorios** (fechas de renovación, programación de mantenimiento)

## Formato de Notas

Las notas soportan texto simple con formato básico:
- Usa saltos de línea para separar secciones
- Crea listas con guiones o números
- Añade encabezados con # para organización

## Ejemplo de Nota

```
=== Servidor de Producción ===
Usuario Root: admin
Ubicación BD: /var/lib/mysql
Ruta de Respaldo: /backup/daily

Comandos:
- Reiniciar Apache: sudo systemctl restart apache2
- Ver logs: tail -f /var/log/apache2/error.log

Contacto: devops@empresa.com
Próximo mantenimiento: 15 de Marzo
```

## Acceso Rápido

- Las notas aparecen cuando abres los detalles del servidor
- Busca a través de todos los servidores para encontrar notas específicas
- Las notas se incluyen en exportaciones de respaldo

## Consejos de Seguridad

- Las notas se almacenan localmente en tu dispositivo
- Considera usar la característica [Bloqueo de App](/es/applock) para proteger datos sensibles
- Evita almacenar contraseñas de producción - usa un gestor de contraseñas en su lugar
- Las notas NO están encriptadas por defecto
