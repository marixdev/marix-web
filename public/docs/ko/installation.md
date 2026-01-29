# 설치

운영체제에 맞는 Marix를 다운로드하고 설치하세요.

## Windows

1. **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)** 다운로드
2. 설치 프로그램을 실행하고 마법사를 따라 진행
3. 시작 메뉴에서 Marix 실행

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)** 다운로드
2. 압축을 풀고 `Marix.app`을 응용 프로그램으로 드래그
3. 처음 실행 시: 마우스 오른쪽 클릭 → 열기 (Gatekeeper 우회)

### Intel Mac

1. **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)** 다운로드
2. 압축을 풀고 `Marix.app`을 응용 프로그램으로 드래그
3. 처음 실행 시: 마우스 오른쪽 클릭 → 열기 (Gatekeeper 우회)

## Linux

### AppImage (권장)

대부분의 Linux 배포판에서 설치 없이 작동합니다.

1. **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)** 다운로드
2. 실행 권한 부여: `chmod +x Marix-{{VERSION}}.AppImage`
3. 실행: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)** 다운로드
2. 설치: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)** 다운로드
2. 설치: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## 설치 확인

Marix를 실행하세요. 사이드바에 "Hosts" 섹션이 있는 메인 창이 표시됩니다.

## 다음 단계

- [빠른 시작](quickstart.md) - 첫 번째 서버 추가
- [SSH 터미널](ssh-terminal.md) - 터미널 기능 배우기
