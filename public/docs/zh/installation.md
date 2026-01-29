# 安装

下载并为您的操作系统安装 Marix。

## Windows

1. 下载 **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)**
2. 运行安装程序并按照向导操作
3. 从开始菜单启动 Marix

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. 下载 **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)**
2. 解压并将 `Marix.app` 拖到应用程序文件夹
3. 首次启动：右键点击 → 打开（绕过 Gatekeeper）

### Intel Mac

1. 下载 **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)**
2. 解压并将 `Marix.app` 拖到应用程序文件夹
3. 首次启动：右键点击 → 打开（绕过 Gatekeeper）

## Linux

### AppImage（推荐）

无需安装即可在大多数 Linux 发行版上运行。

1. 下载 **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)**
2. 添加执行权限：`chmod +x Marix-{{VERSION}}.AppImage`
3. 运行：`./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. 下载 **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)**
2. 安装：`sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. 下载 **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)**
2. 安装：`sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## 验证安装

启动 Marix。您应该能看到主窗口，侧边栏中有"主机"部分。

## 下一步

- [快速入门](quickstart.md) - 添加您的第一台服务器
- [SSH 终端](ssh-terminal.md) - 了解终端功能
