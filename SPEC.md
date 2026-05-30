# Loon 插件合集 — 开发规范与交接文档

> 目标：下一个 Marvis 打开此仓库就能立刻上手，无需翻阅对话历史。

---

## 仓库信息

| 项目 | 值 |
|------|-----|
| 仓库地址 | `https://github.com/m4a1dada/Loon-Plugin-Collection` |
| 默认分支 | `main` |
| 维护者 | Marvis / m4a1dada |
| 直链格式 | `https://cdn.jsdelivr.net/gh/m4a1dada/Loon-Plugin-Collection@main/文件名.plugin` |

**本地 Clone 命令：**
```bash
git clone https://<TOKEN>@github.com/m4a1dada/Loon-Plugin-Collection.git
```

> Token 由用户在对话中提供，格式为 `ghp_` 开头的 GitHub Personal Access Token。

---

## 插件核心规范（最高优先级）

### 元信息标签（必须全部包含）

每个 `.plugin` 文件头部必须包含以下标签，无一例外：

```
#!name = 应用名去广告
#!desc = 描述覆盖的广告类型（开屏/横幅/弹窗/信息流等）
#!icon = https://raw.githubusercontent.com/...  （必须 raw.githubusercontent.com 源）
#!author = Marvis
#!category = 去广告
#!tag = 应用名
```

### 图标规则

- `#!icon` 字段**必须**使用 `raw.githubusercontent.com` 源（Loon 原生识别，不乱码）
- **禁止**在 `#!icon` 中使用 `jsDelivr` 或任何 CDN 域名
- 图标 URL 示例：`https://raw.githubusercontent.com/m4a1dada/Loon-Plugin-Collection/main/icons/AppName.png`
- 图标文件统一放在仓库 `icons/` 目录下

> 注意区分：直链（README 表格中供 Loon 订阅的链接）用 jsDelivr CDN；`#!icon` 字段用 raw.githubusercontent.com。两者目的不同，不可混用。

### 零外部脚本

- **优先使用 Loon 原生规则**：`REJECT`（域名阻断）、`reject`（URL 重写）、`reject-dict`（响应体字段删除）
- **避免**依赖外部 JS 脚本下载
- **禁止**使用 `http-response` 脚本需要外部 URL 下载的模式
- 如果必须使用脚本，脚本内容应内嵌于 `.plugin` 文件中

### 国内网络兼容

- 所有资源域名必须国内可直连
- 直链使用 `raw.githubusercontent.com`（国内可访问）
- 图标、脚本等外部引用不得使用被墙域名

### 段名规范

统一使用以下段名（区分大小写）：

| 段名 | 用途 |
|------|------|
| `[General]` | 通用配置（bypass-tun, skip-proxy 等） |
| `[Rule]` | 域名级规则（DOMAIN-SUFFIX / DOMAIN-KEYWORD 等） |
| `[Rewrite]` | URL 重写规则（reject / reject-dict / script） |
| `[Mitm]` | MITM 主机名列表 |

**禁止使用**：`[URL Rewrite]`、`[MITM]` 等变体，一律用上述标准段名。

---

## 参考模板

`JD_remove_ads.plugin` 为基准模板，所有新插件参照此文件格式：

- 完整元信息标签（name / desc / icon / author / category / tag）
- 纯 Loon 原生规则（REJECT / reject / reject-dict），零外部脚本
- 注释分行清晰，使用 `# ── xxx ──` 分组
- `#!icon` 使用 raw.githubusercontent.com 源
- 直链使用 jsDelivr CDN（`cdn.jsdelivr.net/gh/...@main/...`）

新插件直接复制 JD_remove_ads.plugin 结构，修改元信息和规则即可。

---

## README 维护规范

### 插件列表表格格式

```
| App | 插件文件 | 直链 | 广告类型 |
|-----|---------|------|---------|
| 应用名 | [文件名.plugin](./文件名.plugin) | [Raw](https://raw.githubusercontent.com/m4a1dada/Loon-Plugin-Collection/main/文件名.plugin) | 类型1/类型2/类型3 |
```

### 新增插件时必做清单

- [ ] 创建 `.plugin` 文件，含完整元信息标签
- [ ] 图标放入 `icons/` 目录（如使用自定义图标）
- [ ] 在 README 表格中添加一行
- [ ] 更新 README 目录结构部分
- [ ] `git add . && git commit && git push`

### 修改插件时必做清单

- [ ] 修改 `.plugin` 文件
- [ ] 如广告类型有变，同步更新 README 表格
- [ ] `git add . && git commit && git push`

---

## 当前插件清单

| App | 文件名 | 广告类型 |
|-----|--------|---------|
| 驾考宝典 | `JiaKaoBaoDian_remove_ads.plugin` | 开屏/横幅/悬浮窗/弹窗/社区帖子/我的页面 |
| 京东 | `JD_remove_ads.plugin` | 首页3秒开屏/悬浮推广/物流/订单/个人页广告 |
| 中国移动 | `ChinaMobile.plugin` | 开屏/弹窗/首页促销/发现页广告 |

---

## Git 操作流程

```bash
cd <本地仓库路径>
git pull                          # 先拉取最新
# 编辑文件...
git add .
git commit -m "描述所做修改"
git push
```

---

## 用户偏好（来自长期规则）

- 生成视频内容时禁止添加水印、文字、人脸，避免画面抖动和频闪
- 基于参考素材创作时以原创方式重新设计，避免直接复刻
- 使用中文回复，保持简洁直接

---

*最后更新：2026-05-31*