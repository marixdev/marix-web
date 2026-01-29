# SSH Port Forwarding (Tunnels)

สร้าง secure tunnels เพื่อเข้าถึงบริการระยะไกลหรือเปิดเผยบริการในเครื่อง

## หน้าจอ Port Forwarding

![หน้าจอ Port Forwarding](/portforwarding.png)

## ประเภทของ Port Forwarding

### Local Port Forwarding
Forward พอร์ตในเครื่องไปยังบริการระยะไกลผ่าน SSH

**Use Case:** เข้าถึงฐานข้อมูลระยะไกลบน localhost:3306

```
เครื่องคุณ:3306 → SSH Server → ฐานข้อมูลระยะไกล:3306
```

### Remote Port Forwarding
เปิดเผยบริการในเครื่องไปยังเซิร์ฟเวอร์ระยะไกล

**Use Case:** แชร์เว็บเซิร์ฟเวอร์ในเครื่องสู่อินเทอร์เน็ต

```
เครื่องคุณ:8080 ← SSH Server:80 ← อินเทอร์เน็ต
```

### Dynamic Port Forwarding (SOCKS Proxy)
สร้าง SOCKS proxy สำหรับการท่องเว็บแบบ dynamic

**Use Case:** เบราว์อินเทอร์เน็ตผ่านเซิร์ฟเวอร์ระยะไกล

## ตั้งค่า Port Forward

### ขั้นตอนที่ 1: เปิด Port Forwarding
1. เชื่อมต่อกับเซิร์ฟเวอร์
2. คลิก **"Port Forward"** ในเมนูเซิร์ฟเวอร์ หรือใช้แถบด้านข้าง

### ขั้นตอนที่ 2: เพิ่ม Forward ใหม่
คลิกปุ่ม **"เพิ่ม Forward"**

### ขั้นตอนที่ 3: กำหนดค่า

| ฟิลด์ | คำอธิบาย | ตัวอย่าง |
|-------|-------------|---------|
| ชื่อ | ป้ายบอก | "MySQL Database" |
| ประเภท | Local/Remote/Dynamic | Local |
| พอร์ตในเครื่อง | พอร์ตบนเครื่องคุณ | 3306 |
| Remote Host | เซิร์ฟเวอร์ปลายทาง | 127.0.0.1 |
| Remote Port | พอร์ตปลายทาง | 3306 |

### ขั้นตอนที่ 4: เริ่ม Forward
คลิก **"เริ่ม"** หรือ toggle สวิตช์

## ตัวอย่างทั่วไป

### เข้าถึง MySQL ระยะไกล
| การตั้งค่า | ค่า |
|---------|-------|
| ประเภท | Local |
| พอร์ตในเครื่อง | 3306 |
| Remote Host | localhost |
| Remote Port | 3306 |

จากนั้นเชื่อมต่อ: `mysql -h 127.0.0.1 -P 3306 -u user -p`

### เข้าถึง Redis ระยะไกล
| การตั้งค่า | ค่า |
|---------|-------|
| ประเภท | Local |
| พอร์ตในเครื่อง | 6379 |
| Remote Host | localhost |
| Remote Port | 6379 |

### Web Dashboard ภายใน
| การตั้งค่า | ค่า |
|---------|-------|
| ประเภท | Local |
| พอร์ตในเครื่อง | 8080 |
| Remote Host | 192.168.1.100 |
| Remote Port | 80 |

เข้าถึงที่: `http://localhost:8080`

### เปิดเผย Local Dev Server
| การตั้งค่า | ค่า |
|---------|-------|
| ประเภท | Remote |
| พอร์ตในเครื่อง | 3000 |
| Remote Port | 80 |

ผู้อื่นเข้าถึง dev server ผ่าน IP ของเซิร์ฟเวอร์

### SOCKS Proxy สำหรับการเบราว์
| การตั้งค่า | ค่า |
|---------|-------|
| ประเภท | Dynamic |
| พอร์ตในเครื่อง | 1080 |

กำหนดค่าเบราว์เซอร์ใช้ SOCKS5 proxy: `localhost:1080`

## จัดการ Forwards

### ดู Active Forwards
1. เปิดหน้า Port Forwarding
2. ดูรายการ active forwards ทั้งหมด
3. สถานะแสดง: Active (เขียว), Stopped (เทา)

### หยุด Forward
- คลิกปุ่ม **"หยุด"** ข้างๆ forward นั้น
- หรือ toggle สวิตช์ off

### ลบ Forward
- คลิกไอคอน **ถังขยะ**
- ยืนยันการลบ

## Auto-Start Forwards

เปิดใช้ auto-start เพื่อให้ forward เริ่มอัตโนมัติเมื่อเชื่อมต่อ:

1. แก้ไข port forward
2. เปิดใช้ **"Auto-start"**
3. บันทึก

## แก้ปัญหา

### Port Already in Use
```
Error: Address already in use
```
**วิธีแก้:** เลือกพอร์ตในเครื่องอื่น หรือหยุดบริการที่ใช้พอร์ตนั้น

### Connection Refused
```
Error: Connection refused
```
**วิธีแก้:** ตรวจสอบว่าบริการกำลังทำงานบน remote host/port

### Permission Denied
**วิธีแก้:** พอร์ตต่ำกว่า 1024 ต้องการสิทธิ์ root ใช้พอร์ตที่สูงกว่า

## Security Tips

1. **ใช้ชื่อ forward ที่มีความหมาย** เพื่อติดตามจุดประสงค์
2. **ปิด forwards เมื่อไม่ใช้** เพื่อลดพื้นที่การโจมตี
3. **ใช้ local binding** (127.0.0.1) แทน all interfaces (0.0.0.0)
4. **ตรวจสอบการเชื่อมต่อเป็นประจำ** เพื่อหา forwards ที่ไม่คาดคิด
