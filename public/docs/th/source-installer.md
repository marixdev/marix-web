# ตัวติดตั้ง Source

ติดตั้ง frameworks และ libraries ยอดนิยมบนเซิร์ฟเวอร์ได้อย่างง่ายดาย

## หน้าจอตัวติดตั้ง Source

![หน้าจอตัวติดตั้ง Source](/sourceinstaller.png)

## ภาพรวม

ตัวติดตั้ง Source ช่วยให้คุณติดตั้ง frameworks, CMS, และ libraries ยอดนิยมบนเซิร์ฟเวอร์ได้ด้วยคลิกเดียว โดยไม่ต้องจำคำสั่งหรือดาวน์โหลดไฟล์ด้วยตนเอง

## เปิดตัวติดตั้ง

1. เชื่อมต่อกับเซิร์ฟเวอร์
2. คลิก **"Source Installer"** ในเมนูเซิร์ฟเวอร์

## Frameworks และ Tools ที่รองรับ

### PHP Frameworks
| Framework | คำอธิบาย |
|-----------|-------------|
| Laravel | PHP framework ยอดนิยมสำหรับ web applications |
| Symfony | Full-stack PHP framework |
| CodeIgniter | Lightweight PHP framework |
| Yii | High-performance PHP framework |

### JavaScript Frameworks
| Framework | คำอธิบาย |
|-----------|-------------|
| Node.js | JavaScript runtime |
| Express.js | Web framework สำหรับ Node.js |
| React | UI library สำหรับ frontend |
| Vue.js | Progressive JavaScript framework |
| Next.js | React framework สำหรับ production |
| Nuxt.js | Vue framework สำหรับ production |

### CMS
| CMS | คำอธิบาย |
|-----|-------------|
| WordPress | CMS ยอดนิยมที่สุดในโลก |
| Joomla | Open source CMS |
| Drupal | Enterprise-level CMS |

### Python
| Tool | คำอธิบาย |
|------|-------------|
| Django | Python web framework |
| Flask | Lightweight Python framework |
| FastAPI | Modern Python framework สำหรับ APIs |

### อื่นๆ
| Tool | คำอธิบาย |
|------|-------------|
| Composer | PHP dependency manager |
| npm | Node.js package manager |
| Git | Version control system |

## วิธีติดตั้ง

### ขั้นตอนที่ 1: เลือก Source
1. เปิดตัวติดตั้ง Source
2. เรียกดูหมวดหมู่หรือค้นหา
3. คลิก source ที่ต้องการ

### ขั้นตอนที่ 2: กำหนดค่า

| ตัวเลือก | คำอธิบาย |
|---------|-------------|
| เวอร์ชัน | เลือกเวอร์ชันที่ต้องการ |
| ตำแหน่งติดตั้ง | โฟลเดอร์ปลายทาง |
| ตัวเลือกเพิ่มเติม | การตั้งค่าเฉพาะแต่ละ source |

### ขั้นตอนที่ 3: ติดตั้ง
1. คลิก **"ติดตั้ง"**
2. รอการดาวน์โหลดและติดตั้ง
3. ดูความคืบหน้าและ logs

### ขั้นตอนที่ 4: เสร็จสิ้น
เมื่อติดตั้งเสร็จ:
- ดูข้อมูลสรุป
- คัดลอกคำสั่งเพิ่มเติม (ถ้ามี)
- เข้าถึงโฟลเดอร์ที่ติดตั้ง

## ตัวอย่างการติดตั้ง

### ติดตั้ง Laravel
1. เลือก **Laravel**
2. กำหนดโฟลเดอร์: `/var/www/myapp`
3. เลือกเวอร์ชัน: Latest
4. คลิก **"ติดตั้ง"**

### ติดตั้ง WordPress
1. เลือก **WordPress**
2. กำหนดโฟลเดอร์: `/var/www/wordpress`
3. เลือกภาษา: Thai
4. คลิก **"ติดตั้ง"**

### ติดตั้ง Node.js
1. เลือก **Node.js**
2. เลือกเวอร์ชัน: LTS
3. คลิก **"ติดตั้ง"**

## ดูประวัติการติดตั้ง

1. เปิดตัวติดตั้ง Source
2. คลิก **"ประวัติ"**
3. ดูรายการที่ติดตั้ง:
   - วันที่
   - Source ที่ติดตั้ง
   - ตำแหน่ง
   - สถานะ

## แก้ปัญหา

### การติดตั้งล้มเหลว
- ตรวจสอบพื้นที่ดิสก์
- ยืนยันการเชื่อมต่ออินเทอร์เน็ตของเซิร์ฟเวอร์
- ตรวจสอบสิทธิ์การเขียนโฟลเดอร์

### ไม่พบ Source
- รีเฟรชรายการ
- ค้นหาด้วยคำอื่น
- ตรวจสอบการอัปเดตแอปพลิเคชัน

### เวอร์ชันไม่ถูกต้อง
- ตรวจสอบ requirements ของ source
- ยืนยันเวอร์ชัน PHP/Node.js บนเซิร์ฟเวอร์

## เคล็ดลับ

1. **เลือกเวอร์ชัน LTS** สำหรับ production
2. **ตรวจสอบ requirements** ก่อนติดตั้ง
3. **สำรองข้อมูล** ก่อนติดตั้งบนเซิร์ฟเวอร์ที่มีอยู่
4. **ดู logs** เมื่อมีปัญหา
5. **อัปเดตเป็นประจำ** เพื่อความปลอดภัย
