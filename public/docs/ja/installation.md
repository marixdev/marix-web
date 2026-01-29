# インストール

お使いのオペレーティングシステムに Marix をダウンロードしてインストールします。

## Windows

1. **[Marix.Setup.{{VERSION}}.exe](https://github.com/marixdev/marix/releases/latest/download/Marix.Setup.{{VERSION}}.exe)** をダウンロード
2. インストーラーを実行し、ウィザードに従う
3. スタートメニューから Marix を起動

## macOS

### Apple Silicon (M1/M2/M3/M4)

1. **[Marix-{{VERSION}}-arm64-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-arm64-mac.zip)** をダウンロード
2. 解凍して `Marix.app` をアプリケーションフォルダにドラッグ
3. 初回起動時: 右クリック → 開く（Gatekeeper を回避するため）

### Intel Mac

1. **[Marix-{{VERSION}}-mac.zip](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}-mac.zip)** をダウンロード
2. 解凍して `Marix.app` をアプリケーションフォルダにドラッグ
3. 初回起動時: 右クリック → 開く（Gatekeeper を回避するため）

## Linux

### AppImage（推奨）

ほとんどの Linux ディストリビューションでインストールなしで動作します。

1. **[Marix-{{VERSION}}.AppImage](https://github.com/marixdev/marix/releases/latest/download/Marix-{{VERSION}}.AppImage)** をダウンロード
2. 実行可能にする: `chmod +x Marix-{{VERSION}}.AppImage`
3. 実行: `./Marix-{{VERSION}}.AppImage`

### Debian/Ubuntu (.deb)

1. **[marix_{{VERSION}}_amd64.deb](https://github.com/marixdev/marix/releases/latest/download/marix_{{VERSION}}_amd64.deb)** をダウンロード
2. インストール: `sudo dpkg -i marix_{{VERSION}}_amd64.deb`

### Fedora/RHEL (.rpm)

1. **[marix-{{VERSION}}.x86_64.rpm](https://github.com/marixdev/marix/releases/latest/download/marix-{{VERSION}}.x86_64.rpm)** をダウンロード
2. インストール: `sudo dnf install ./marix-{{VERSION}}.x86_64.rpm`

## インストールの確認

Marix を起動します。サイドバーに「Hosts」セクションがあるメインウィンドウが表示されるはずです。

## 次のステップ

- [クイックスタート](quickstart.md) - 最初のサーバーを追加
- [SSH ターミナル](ssh-terminal.md) - ターミナル機能を学ぶ
