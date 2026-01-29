# 源码安装器

源码安装器允许您通过 SSH 在远程服务器上直接安装流行的 Web 框架和 CMS。

## 源码安装器界面

![Source Installer Interface](/source.png)

---

## 支持的框架

| 类别 | 框架 |
|----------|------------|
| **PHP** | Laravel、WordPress、Symfony、CodeIgniter 3/4 |
| **JavaScript** | Express.js、NestJS、Fastify、Vue.js、Nuxt.js、React、Next.js |
| **TypeScript** | TypeScript Node |

---

## 开始使用

### 先决条件

- **PHP 框架**：需要安装 PHP 和 Composer
- **JavaScript 框架**：需要安装 Node.js 和 npm
- **SSH 访问**：具有适当权限

### 访问源码安装器

1. 通过 SSH 连接到您的服务器
2. 切换到 **SFTP** 标签
3. 导航到目标目录
4. 右键点击并选择 **"安装源代码"**

---

## 安装流程

### 步骤 1：选择框架

从按类别组织的可用框架中选择。

### 步骤 2：版本选择

#### PHP 框架

- **自动检测您服务器的 PHP 版本**
- **实时从 GitHub 获取可用版本**
- **显示兼容性状态**：
  - ✅ 兼容 - PHP 版本满足要求
  - ❌ 不兼容 - PHP 版本过低或过高
  - 🟢 LTS - 长期支持版本

#### JavaScript/TypeScript 框架

- 从 npm 注册表获取版本
- 默认选择最新稳定版本

### 步骤 3：配置

| 选项 | 描述 |
|--------|-------------|
| 项目名称 | 要创建的文件夹名称 |
| 在当前目录安装 | 直接在当前文件夹安装文件 |
| 数据库配置 | 对于需要的框架 |

### 步骤 4：安装

点击 **"安装"** 开始。安装器将：

1. 检查依赖项（Composer/Node.js/npm）
2. 下载框架
3. 配置项目
4. 显示实时安装日志

---

## 框架详情

### Laravel

| 版本 | PHP 要求 | 状态 |
|---------|-----------------|--------|
| Laravel 12 | PHP 8.3+ | 最新 |
| Laravel 11 | PHP 8.2+ | LTS |
| Laravel 10 | PHP 8.1+ | LTS |

### WordPress

- 从 GitHub 获取版本
- 自动配置 `wp-config.php` 数据库凭证

### Symfony

| 版本 | PHP 要求 |
|---------|-----------------|
| Symfony 8.x | PHP 8.3+ |
| Symfony 7.x | PHP 8.2+ |
| Symfony 6.4 | PHP 8.1+（LTS） |

### Node.js 框架

- Express.js、NestJS、Fastify（Node.js 14+）
- Vue.js、Nuxt.js、React、Next.js（Node.js 16+）

---

## 动态版本获取

安装器实时获取可用版本：

| 框架 | 来源 |
|-----------|--------|
| Laravel、CodeIgniter | GitHub Releases API |
| WordPress | GitHub Tags API |
| Symfony | symfony.com API |
| Node.js 框架 | npm Registry |

当发布新版本时，它们会自动出现。

---

## 故障排除

### "找不到 Composer"

```bash
curl -sS https://getcomposer.org/installer | php
sudo mv composer.phar /usr/local/bin/composer
```

### "找不到 Node.js"

```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
source ~/.bashrc
nvm install --lts
```

### "PHP 版本不兼容"

检查并升级 PHP：

```bash
php -v
sudo add-apt-repository ppa:ondrej/php
sudo apt update
sudo apt install php8.3
```

### "权限被拒绝"

```bash
sudo chown -R $USER:$USER /var/www/html
```

---

## 最佳实践

1. **生产环境使用特定版本** 以获得可重复部署
2. **先检查 PHP 兼容性** 再安装
3. **安装前配置数据库** 以节省时间
4. **在干净目录中安装** 以避免冲突
