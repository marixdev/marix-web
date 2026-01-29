# Snippets

บันทึกและใช้งานคำสั่งที่ใช้บ่อยซ้ำได้ง่าย

## หน้าจอ Snippets

![หน้าจอ Snippets](/snippets.png)

## ภาพรวม

Snippets ช่วยให้คุณบันทึกคำสั่งที่ใช้บ่อยเพื่อนำกลับมาใช้ได้อย่างรวดเร็ว ไม่ต้องพิมพ์ใหม่ทุกครั้ง

## เปิดตัวจัดการ Snippets

คลิก **"Snippets"** ในเมนูแถบด้านข้าง

## สร้าง Snippet ใหม่

### ขั้นตอนที่ 1: เปิดตัวสร้าง
คลิกปุ่ม **"เพิ่ม Snippet"**

### ขั้นตอนที่ 2: กรอกรายละเอียด

| ฟิลด์ | คำอธิบาย | ตัวอย่าง |
|-------|-------------|---------|
| ชื่อ | ชื่อเพื่อระบุ snippet | "รีสตาร์ท Nginx" |
| คำสั่ง | คำสั่งที่ต้องการบันทึก | `sudo systemctl restart nginx` |
| คำอธิบาย | หมายเหตุเพิ่มเติม (ไม่บังคับ) | "รีสตาร์ท web server" |
| หมวดหมู่ | จัดกลุ่ม snippet | "Web Server" |

### ขั้นตอนที่ 3: บันทึก
คลิก **"บันทึก"**

## ประเภท Snippet

### Snippet บรรทัดเดียว
```bash
sudo systemctl restart nginx
```

### Snippet หลายบรรทัด
```bash
sudo apt update
sudo apt upgrade -y
sudo apt autoremove -y
```

### Snippet พร้อมตัวแปร
```bash
docker exec -it {{container_name}} bash
```

เมื่อใช้งาน ระบบจะถาม `container_name`

## ใช้งาน Snippet

### วิธีที่ 1: จากตัวจัดการ
1. เปิดตัวจัดการ Snippets
2. คลิก snippet ที่ต้องการ
3. คลิก **"Run"** หรือ **"คัดลอก"**

### วิธีที่ 2: จาก Terminal
1. เปิด Terminal
2. กด **Ctrl+Shift+S** (หรือปุ่มลัดที่กำหนด)
3. เลือก snippet
4. กด Enter

### วิธีที่ 3: ค้นหา
1. ใช้ช่องค้นหา
2. พิมพ์ชื่อหรือคำสำคัญ
3. เลือก snippet จากผลลัพธ์

## แก้ไข Snippet

1. ค้นหา snippet ในรายการ
2. คลิกไอคอน **แก้ไข** (ดินสอ)
3. แก้ไขข้อมูล
4. คลิก **"บันทึก"**

## ลบ Snippet

1. ค้นหา snippet ในรายการ
2. คลิกไอคอน **ถังขยะ**
3. ยืนยันการลบ

## จัดหมวดหมู่

### สร้างหมวดหมู่ใหม่
1. คลิก **"จัดการหมวดหมู่"**
2. คลิก **"เพิ่มหมวดหมู่"**
3. ใส่ชื่อ
4. คลิก **"บันทึก"**

### ย้าย Snippet ไปหมวดหมู่อื่น
1. แก้ไข snippet
2. เปลี่ยนหมวดหมู่
3. บันทึก

## ตัวอย่าง Snippets ที่มีประโยชน์

### ตรวจสอบระบบ
```bash
# ชื่อ: ตรวจสอบระบบ
htop && df -h && free -m
```

### ดู Logs
```bash
# ชื่อ: ดู Nginx Logs
sudo tail -f /var/log/nginx/access.log
```

### Docker Commands
```bash
# ชื่อ: รายการ Docker Containers
docker ps -a
```

### Git Commands
```bash
# ชื่อ: Git Status และ Pull
git status && git pull origin main
```

### สำรองข้อมูล
```bash
# ชื่อ: สำรองฐานข้อมูล
mysqldump -u root -p {{database}} > backup_$(date +%Y%m%d).sql
```

## Import/Export Snippets

### Export
1. คลิก **"Export"**
2. เลือก snippets ที่ต้องการ export
3. บันทึกไฟล์ JSON

### Import
1. คลิก **"Import"**
2. เลือกไฟล์ JSON
3. ยืนยันการ import

## เคล็ดลับ

1. **ใช้ชื่อที่ชัดเจน** เพื่อค้นหาง่าย
2. **จัดหมวดหมู่** เพื่อจัดระเบียบ
3. **ใช้ตัวแปร** สำหรับคำสั่งที่ต้องเปลี่ยนค่า
4. **เพิ่มคำอธิบาย** สำหรับคำสั่งที่ซับซ้อน
5. **สำรอง snippets** โดย export เป็นไฟล์
