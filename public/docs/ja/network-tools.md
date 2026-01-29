# ネットワークツール

Marix に内蔵された包括的なネットワーク診断ツールスイート。

## ネットワークツールインターフェース

![Network Tools Interface](/loockup.png)

## ネットワークツールを開く

サイドバーの **「Lookup」** をクリック。

## 利用可能なツール

| ツール | 機能 | 入力例 |
|------|----------|---------------|
| A Record | IPv4 アドレスを取得 | example.com |
| AAAA Record | IPv6 アドレスを取得 | example.com |
| MX Lookup | メールサーバーを取得 | example.com |
| TXT Record | TXT レコードを取得 | example.com |
| SPF Check | SPF レコードを確認 | example.com |
| CNAME Lookup | 正規名を取得 | www.example.com |
| NS Lookup | ネームサーバーを取得 | example.com |
| SOA Record | SOA 詳細を取得 | example.com |
| PTR Lookup | 逆引き DNS | 8.8.8.8 |
| Ping | ホストに Ping | example.com |
| Traceroute | ネットワークパスをトレース | example.com |
| TCP Port | ポートが開いているかテスト | example.com |
| Web Check | Web サイトのステータスを確認 | example.com |
| Blacklist | IP ブラックリストを確認 | 1.2.3.4 |
| DNS Check | 完全な DNS 分析 | example.com |
| IP Info | IP 所有者情報を取得 | 8.8.8.8 |
| WHOIS | ドメイン登録情報 | example.com |

## ネットワークツールの使用

### ステップ 1: ツールを選択
左サイドバーからツールをクリック。

### ステップ 2: ターゲットを入力
- ドメイン名、IP アドレス、またはホスト名
- TCP Port の場合: ポート番号も入力

### ステップ 3: 実行
**「Run」** ボタンをクリックまたは Enter を押す。

### ステップ 4: 結果を表示
- **緑のバッジ** = 成功
- **赤のバッジ** = 失敗/エラー
- タイムスタンプで実行時刻を表示

## DNS ツール

### A Record
ドメインの IPv4 アドレスを返します。

```
example.com → 93.184.216.34
```

### AAAA Record
ドメインの IPv6 アドレスを返します。

```
example.com → 2606:2800:220:1:248:1893:25c8:1946
```

### MX Lookup
ドメインのメール交換サーバーを返します。

```
example.com →
  10 mail1.example.com
  20 mail2.example.com
```

### TXT Record
テキストレコードを返します（検証、SPF、DKIM によく使用）。

```
example.com → "v=spf1 include:_spf.google.com ~all"
```

### CNAME Lookup
サブドメインの正規名（エイリアス）を返します。

```
www.example.com → example.com
```

### NS Lookup
ドメインのネームサーバーを返します。

```
example.com →
  ns1.example.com
  ns2.example.com
```

### PTR Lookup（逆引き DNS）
IP アドレスのホスト名を返します。

```
8.8.8.8 → dns.google
```

## ネットワーク診断

### Ping
接続性をテストし、レイテンシを測定します。

```
Pinging example.com:
  Reply: 64 bytes, time=23ms
  Reply: 64 bytes, time=21ms
  Average: 22ms
```

### Traceroute
宛先へのネットワークパスをトレースします。

```
1  router.local (192.168.1.1) 1ms
2  isp-gateway (10.0.0.1) 5ms
3  backbone.isp.net 12ms
...
```

### TCP Port Test
特定のポートが開いているか確認します。

**クイックポートボタン:** SSH(22)、HTTP(80)、HTTPS(443)、MySQL(3306) など

```
example.com:443 → Open
example.com:22 → Closed/Filtered
```

### Web Check
HTTP/HTTPS の接続性とレスポンスをテストします。

```
https://example.com
  Status: 200 OK
  Response time: 145ms
  SSL: Valid
```

## IP ツール

### IP Info
IP の所有者と位置情報を取得します。

```
8.8.8.8 →
  Organization: Google LLC
  Country: United States
  ASN: AS15169
```

### Blacklist Check
IP がスパム/悪用ブラックリストに載っているか確認します。

```
Checking 1.2.3.4:
  ✅ Spamhaus: Clean
  ✅ Barracuda: Clean
  ⚠️ SORBS: Listed
```

## ドメインツール

### WHOIS
ドメイン登録情報を取得します。

```
example.com →
  Registrar: Example Registrar
  Created: 1995-08-14
  Expires: 2025-08-13
  Status: clientTransferProhibited
```

### DNS Check
包括的な DNS ヘルスチェック。

```
Checking example.com:
  ✅ NS records found
  ✅ A record resolves
  ✅ MX records configured
  ✅ SPF record valid
```

## ヒント

- `Ctrl+C` で**結果をコピー**
- 同じドメインで**複数のチェックを実行**
- 結果に**タイムスタンプ**が参照用に表示
- 不明な IP を調査するには **IP Info** を使用
