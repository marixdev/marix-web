# ソースインストーラー

ソースインストーラーを使用すると、SSH 経由でリモートサーバーに人気のある Web フレームワークや CMS を直接インストールできます。

## ソースインストーラーインターフェース

![Source Installer Interface](/source.png)

---

## 対応フレームワーク

| カテゴリ | フレームワーク |
|----------|------------|
| **PHP** | Laravel, WordPress, Symfony, CodeIgniter 3/4 |
| **JavaScript** | Express.js, NestJS, Fastify, Vue.js, Nuxt.js, React, Next.js |
| **TypeScript** | TypeScript Node |

---

## はじめに

### 前提条件

- **PHP フレームワークの場合**: PHP と Composer がインストール済み
- **JavaScript フレームワークの場合**: Node.js と npm がインストール済み
- 適切な権限を持つ **SSH アクセス**

### ソースインストーラーへのアクセス

1. SSH 経由でサーバーに接続
2. **SFTP** タブに切り替え
3. ターゲットディレクトリに移動
4. 右クリックして **「Install Source Code」** を選択

---

## インストールプロセス

### ステップ 1: フレームワークを選択

カテゴリ別に整理された利用可能なフレームワークから選択。

### ステップ 2: バージョン選択

#### PHP フレームワーク

- サーバーの **PHP バージョンを自動検出**
- GitHub から**利用可能なバージョンをリアルタイムで取得**
- **互換性ステータスを表示**:
  - ✅ 互換性あり - PHP バージョンが要件を満たす
  - ❌ 非互換 - PHP バージョンが低すぎるか高すぎる
  - 🟢 LTS - 長期サポートバージョン

#### JavaScript/TypeScript フレームワーク

- npm レジストリからバージョンを取得
- デフォルトで最新の安定版を選択

### ステップ 3: 設定

| オプション | 説明 |
|--------|-------------|
| プロジェクト名 | 作成するフォルダ名 |
| 現在のディレクトリにインストール | 現在のフォルダに直接ファイルをインストール |
| データベース設定 | 必要なフレームワーク用 |

### ステップ 4: インストール

**「Install」** をクリックして開始。インストーラーは以下を実行:

1. 依存関係を確認（Composer/Node.js/npm）
2. フレームワークをダウンロード
3. プロジェクトを設定
4. リアルタイムのインストールログを表示

---

## フレームワーク詳細

### Laravel

| バージョン | PHP 要件 | ステータス |
|---------|-----------------|--------|
| Laravel 12 | PHP 8.3+ | 最新 |
| Laravel 11 | PHP 8.2+ | LTS |
| Laravel 10 | PHP 8.1+ | LTS |

### WordPress

- GitHub からバージョンを取得
- データベース認証情報で `wp-config.php` を自動設定

### Symfony

| バージョン | PHP 要件 |
|---------|-----------------|
| Symfony 8.x | PHP 8.3+ |
| Symfony 7.x | PHP 8.2+ |
| Symfony 6.4 | PHP 8.1+（LTS） |

### Node.js フレームワーク

- Express.js、NestJS、Fastify（Node.js 14+）
- Vue.js、Nuxt.js、React、Next.js（Node.js 16+）

---

## ダイナミックバージョン取得

インストーラーは利用可能なバージョンをリアルタイムで取得:

| フレームワーク | ソース |
|-----------|--------|
| Laravel, CodeIgniter | GitHub Releases API |
| WordPress | GitHub Tags API |
| Symfony | symfony.com API |
| Node.js フレームワーク | npm Registry |

新しいバージョンがリリースされると、自動的に表示されます。

---

## トラブルシューティング

### 「Composer not found」

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### 「Node.js not found」

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### 「PHP version incompatible」

PHP を確認してアップグレード:

```bash
php -v
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.3
```

### 「Permission denied」

```bash
sudo chown -R $USER:$USER /var/www/html
```

---

## ベストプラクティス

1. 再現可能なデプロイのために**本番環境では特定のバージョンを使用**
2. インストール前に**まず PHP 互換性を確認**
3. 時間を節約するために**インストール前にデータベースを設定**
4. 競合を避けるために**クリーンなディレクトリにインストール**
