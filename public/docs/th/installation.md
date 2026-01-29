# การติดตั้ง

ดาวน์โหลดและติดตั้ง Marix สำหรับระบบปฏิบัติการของคุณ

## Windows

1. ดาวน์โหลด **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. รันตัวติดตั้งและทำตามวิซาร์ด
3. เปิด Marix จาก Start Menu

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. ดาวน์โหลด **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. แตกไฟล์และลาก `Marix.app` ไปยัง Applications
3. เปิดครั้งแรก: คลิกขวา → Open (เพื่อข้าม Gatekeeper)

### Intel Mac

1. ดาวน์โหลด **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. แตกไฟล์และลาก `Marix.app` ไปยัง Applications
3. เปิดครั้งแรก: คลิกขวา → Open (เพื่อข้าม Gatekeeper)

## Linux

### AppImage (แนะนำ)

ใช้งานได้บน Linux distributions ส่วนใหญ่โดยไม่ต้องติดตั้ง

1. ดาวน์โหลด **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. ทำให้ executable: `chmod +x Marix-{{VERSION}}.AppImage`
3. รัน: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. ดาวน์โหลด **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. ติดตั้ง: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. ดาวน์โหลด **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. ติดตั้ง: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## ตรวจสอบการติดตั้ง

เปิด Marix คุณควรเห็นหน้าต่างหลักที่มีส่วน "Hosts" ในแถบด้านข้าง

## ขั้นตอนถัดไป
