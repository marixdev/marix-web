# WebSocket Client

Connect to WebSocket servers for real-time bidirectional communication. Perfect for testing APIs, debugging live feeds, or monitoring WebSocket services.

## WebSocket Client Interface

![WebSocket Interface](/websocket.png)

## Adding a WebSocket Server

1. Click **"Add New Host"**
2. Select **Protocol**: WebSocket (WSS)
3. Fill in:
   - **Name**: Display name for the connection
   - **URL**: WebSocket server address
   - **Headers**: (optional) Custom headers for authentication
4. Click **Create**

### URL Format

| Format | Example |
|--------|---------|
| With protocol | `wss://api.example.com/ws` |
| Without protocol | `api.example.com/ws` (auto-adds `wss://`) |
| With port | `wss://localhost:8080/socket` |
| With path | `wss://stream.example.com/v1/feed` |

> **Note:** If no protocol is specified, Marix automatically adds `wss://` for secure WebSocket connections.

## Connecting

1. Double-click the WebSocket server in Hosts list
2. Wait for connection (timeout: 15 seconds)
3. Status indicator shows connection state

### Connection Status

| Status | Indicator | Description |
|--------|-----------|-------------|
| Connecting | 🟡 Yellow | Establishing connection |
| Connected | 🟢 Green | Ready to send/receive |
| Disconnected | ⚪ Gray | Connection closed |
| Error | 🔴 Red | Connection failed |

## Sending Messages

1. Type your message in the input area at the bottom
2. Press **Enter** or click **Send**
3. Sent messages appear with ↑ arrow (green)

### Supported Message Formats

- Plain text
- JSON (will be formatted for readability)
- Any string data

## Receiving Messages

- Incoming messages appear automatically with ↓ arrow (purple)
- JSON messages are auto-formatted with proper indentation
- Timestamp shows when each message was received
- Message history keeps up to 1000 messages per session

## Controls

| Control | Function |
|---------|----------|
| **Send** | Send message to server |
| **Clear** | Clear all messages from view |
| **Disconnect** | Close the connection |
| **Reconnect** | Reconnect after disconnect/error |
| **Theme Selector** | Change viewer color theme |

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Enter` | Send message |
| `Shift+Enter` | New line in message |

## Features

### Auto-Scroll

- Enabled by default
- Automatically scrolls to newest messages
- Toggle off to review older messages
- Message count displayed at bottom

### Theme Support

- 400+ terminal themes available
- Click theme selector in header
- Theme applies to entire viewer
- Colors adapt to light/dark themes

### JSON Formatting

When receiving JSON messages:
```json
{"event":"update","data":{"id":1,"value":"test"}}
```

Marix automatically formats it as:
```json
{
  "event": "update",
  "data": {
    "id": 1,
    "value": "test"
  }
}
```

## Use Cases

### API Testing

Test WebSocket APIs during development:
- Send test payloads
- Monitor responses
- Debug connection issues

### Live Data Monitoring

Monitor real-time feeds:
- Stock price updates
- Chat applications
- IoT sensor data
- Game server events

### Debugging

Debug WebSocket implementations:
- Verify message format
- Check connection stability
- Test reconnection logic

## Troubleshooting

### Connection Timeout

- Check URL is correct
- Verify server is running
- Check firewall/proxy settings
- Try with explicit `wss://` protocol

### Connection Refused

- Server may not accept connections
- Wrong port number
- SSL/TLS certificate issues
- Server requires authentication headers

### Messages Not Sending

- Check connection status is "Connected"
- Verify message format matches server expectations
- Check server logs for errors

### Disconnected Unexpectedly

- Server may have closed connection
- Network interruption
- Idle timeout on server side
- Click **Reconnect** to restore connection
