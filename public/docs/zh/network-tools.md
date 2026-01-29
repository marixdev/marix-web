# 网络工具

Marix 内置的综合网络诊断工具套件。

## 网络工具界面

![Network Tools Interface](/loockup.png)

## 打开网络工具

在侧边栏中点击 **"查询"**。

## 可用工具

| 工具 | 功能 | 输入示例 |
|------|----------|---------------|
| A 记录 | 获取 IPv4 地址 | example.com |
| AAAA 记录 | 获取 IPv6 地址 | example.com |
| MX 查询 | 获取邮件服务器 | example.com |
| TXT 记录 | 获取 TXT 记录 | example.com |
| SPF 检查 | 验证 SPF 记录 | example.com |
| CNAME 查询 | 获取规范名称 | www.example.com |
| NS 查询 | 获取名称服务器 | example.com |
| SOA 记录 | 获取 SOA 详情 | example.com |
| PTR 查询 | 反向 DNS | 8.8.8.8 |
| Ping | Ping 主机 | example.com |
| 路由追踪 | 追踪网络路径 | example.com |
| TCP 端口 | 测试端口是否开放 | example.com |
| 网站检查 | 检查网站状态 | example.com |
| 黑名单 | 检查 IP 黑名单 | 1.2.3.4 |
| DNS 检查 | 完整 DNS 分析 | example.com |
| IP 信息 | 获取 IP 归属信息 | 8.8.8.8 |
| WHOIS | 域名注册信息 | example.com |

## 使用网络工具

### 步骤 1：选择工具
在左侧边栏点击一个工具。

### 步骤 2：输入目标
- 域名、IP 地址或主机名
- TCP 端口：还需输入端口号

### 步骤 3：运行
点击 **"运行"** 按钮或按 Enter。

### 步骤 4：查看结果
- **绿色徽章** = 成功
- **红色徽章** = 失败/错误
- 时间戳显示运行时间

## DNS 工具

### A 记录
返回域名的 IPv4 地址。

```
example.com → 93.184.216.34
```

### AAAA 记录
返回域名的 IPv6 地址。

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### MX 查询
返回域名的邮件交换服务器。

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### TXT 记录
返回文本记录（通常用于验证、SPF、DKIM）。

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### CNAME 查询
返回子域名的规范名称（别名）。

```
www.example.com → example.com
```

### NS 查询
返回域名的名称服务器。

```
example.com →
  ns1.example.com
  ns2.example.com
```

### PTR 查询（反向 DNS）
返回 IP 地址的主机名。

```
8.8.8.8 → dns.google
```

## 网络诊断

### Ping
测试连通性和测量延迟。

```
Ping example.com:
  回复：64 字节，时间=23ms
  回复：64 字节，时间=21ms
  平均：22ms
```

### 路由追踪
追踪到目标的网络路径。

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### TCP 端口测试
检查特定端口是否开放。

**快速端口按钮：** SSH(22)、HTTP(80)、HTTPS(443)、MySQL(3306) 等。

```
example.com:443 → 开放
example.com:22 → 关闭/被过滤
```

### 网站检查
测试 HTTP/HTTPS 连通性和响应。

```
https://example.com
  状态：200 OK
  响应时间：145ms
  SSL：有效
```

## IP 工具

### IP 信息
获取 IP 的归属和位置信息。

```
8.8.8.8 →
  组织：Google LLC
  国家：美国
  ASN：AS15169
```

### 黑名单检查
检查 IP 是否在垃圾邮件/滥用黑名单中。

```
检查 1.2.3.4：
  ✅ Spamhaus：干净
  ✅ Barracuda：干净
  ⚠️ SORBS：已列入
```

## 域名工具

### WHOIS
获取域名注册信息。

```
example.com →
  注册商：Example Registrar
  创建日期：1995-08-14
  到期日期：2025-08-13
  状态：clientTransferProhibited
```

### DNS 检查
综合 DNS 健康检查。

```
检查 example.com：
  ✅ 找到 NS 记录
  ✅ A 记录可解析
  ✅ MX 记录已配置
  ✅ SPF 记录有效
```

## 提示

- **复制结果**：选择文本并使用 `Ctrl+C`
- **对同一域名运行多次检查**
- 结果显示 **时间戳** 供参考
- 使用 **IP 信息** 调查未知 IP
- 从新 IP 发送邮件前 **检查黑名单**
