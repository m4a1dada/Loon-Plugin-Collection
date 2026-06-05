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
| 肯德基 | `KFC_remove_ads.plugin` | 去除开屏广告及内部广告 |
| 微信小程序 | `WexinMiniPrograms_Remove_ads.plugin` | 40+ 小程序开屏/弹窗/横幅/信息流广告 |

---

## Loon 插件图标踩坑总结

### 图标格式规范
- 图标必须 120×120 RGB PNG（RGBA 模式不显示）
- 图标文件头必须以 `89504e47` 开头（真 PNG，ICO 伪装不行）
- 必须去除 ICC Profile（Loon 解析带 ICC Profile 的 PNG 时图标不显示）
- `#!icon` 使用 `jsDelivr CDN` 源（`raw.githubusercontent.com` 在 Loon 内部下载时直连被 GFW 阻断，导致下载失败回退到文字图标；用户 Safari 走代理能打开不代表 Loon 自身能下载）
- 插件直链使用 jsDelivr CDN

### Loon 图标缓存终极难题（KFC 经验）

Loon 对插件的图标存在**多层顽固缓存**，以下方案按尝试顺序排列，**实际只有最后一条生效**：

| 尝试方案 | 效果 |
|----------|------|
| 覆盖图标文件（同名 PNG） | 无效 |
| 换图标文件名（KFC.png → KFC_icon.png）+ 更新 #!icon | 无效 |
| 切换 CDN 源（raw → jsDelivr） | 无效（解决的是 GFW 阻断问题，不是缓存问题） |
| 删除插件 + 杀 Loon 进程 + 重新添加 | 无效（Loon 对已知插件 ID 保留图标映射） |
| **换插件文件名**（KFC_remove_ads.plugin → KFC_adblock.plugin） | ✅ 唯一生效 |

**根因**：Loon 以插件文件名为 key 缓存图标。改图标文件、换 icon URL、杀进程重启，都不会触发 Loon 清掉旧缓存。只有换一个全新的插件文件名，Loon 才会把它当作全新插件，重新解析 `#!icon` 并下载图标。

**结论**：当图标频繁修改需要刷新时，直接换插件文件名，不要浪费时间在其他方案上。

### 源文件追溯

- 如果用户提供过原始素材（jpg/png 等），必须直接用原始素材重新生成图标
- 不要假设本地仓库中的旧文件是正确的，尤其在经过多轮修改后
- 本次根因之一就是 `KFC.png` 在仓库中一直是早期红底白字版本，从未被正确覆盖

## KFC 插件开发要点

- KFC App（v6.29.0 iOS）不使用第三方广告 SDK，广告由百胜自有系统投放
- 核心广告域名：`res.kfc.com.cn/CRM/kfcad/`（开屏广告预加载）、`dynamicad.kfc.com.cn`（动态广告 API）、`sares.kfc.com.cn`（广告 CDN）
- 直接给用户 jsDelivr URL，用户自行在 Loon 中添加

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

## 微信小程序去广告插件开发全流程

### 模板来源

插件基于 kelee.one 社区模板创建，原模板地址：
```
https://kelee.one/Tool/Loon/Lpx/WexinMiniPrograms_Remove_ads.lpx
```

> kelee.one 对普通 User-Agent 返回 403 反爬，必须使用 Loon 客户端 UA 抓取：
> `Loon/1.0 CFNetwork/1496 Darwin/23.5.0`

### 新增小程序规则的标准流程

当用户提供某个小程序的 Loon 抓包数据（.zip 文件）要求新增广告规则时：

1. **解压抓包**：遍历所有 `request_header_raw.txt`，提取 `Host` 头统计唯一域名
2. **锁定广告域名**：搜索请求/响应体中的广告特征关键词（`advert`、`adunit`、`ad_id`、`ad_type`、`pm_id=adunit-xxx`、`sdk_ver` 等）
3. **检查主业务 API**：确认广告字段是否夹杂在业务接口的响应体中（关键词 `banner`、`popup`、`广告`、`推广` 等）
4. **添加规则**：
   - 广告专用域名 → `[Rule]` 中添加 `DOMAIN-SUFFIX, xxx.com, REJECT`
   - 广告字段在业务 API 中 → `[Rewrite]` 中用 `reject-dict` 或 `response-body-json-del` 处理
5. **更新 MITM**：将新域名加入 `[MitM]` hostname 列表（用 `DOMAIN-SUFFIX` 拦截的域名同时加入以便后续分析）
6. **推送并交付**：`commit + push` 后，直接给用户 jsDelivr 直链，不附带解释或操作说明

### 常见广告 SDK 特征

| 特征 | 说明 |
|------|------|
| `wxmini-events.8ziben.com` | 广告 SDK 事件上报域名 |
| 请求体含 `appid=Z9694...`、`ad_id=J5...` | 第三方广告 SDK 初始化参数 |
| `pm_id=adunit-xxx` | 广告位标识 |
| `sdk_ver=1.0.16` | SDK 版本号 |

### DNS 拦截局限

- 广告 SDK 的弹窗容器由小程序本地代码创建，网络层拦截只能阻止广告内容加载，不能消除弹窗空壳
- 如弹窗仍然出现但内容黑屏，说明网络拦截生效但客户端容器无法消除
- 需要用户在广告弹窗出现**之前**就开始抓包，才能捕获 SDK 初始化请求

### 文件说明

| 文件 | 用途 |
|------|------|
| `WexinMiniPrograms_Remove_ads.lpx` | Loon 可导入格式（开发/编辑用） |
| `WexinMiniPrograms_Remove_ads.plugin` | 纯文本格式（GitHub 存储 + jsDelivr 分发） |

---

## 用户偏好（来自长期规则）

### 工作习惯
- Agent 任务执行被中断后应默认继续执行，无需等待用户逐次确认
- Agent 交付 Loon 插件时仅输出 jsDelivr 直链 URL，不附带解释或操作说明
- Agent 排查问题时优先对比已有成功案例找差异，避免多轮盲目试错
- Agent 修改 Git 仓库文件时直接 commit + push 即可，无需征求确认
- Agent 向 GitHub 提交文件前必须检查内容，避免写入明文 Token 或敏感凭证

### 内容创作
- 生成视频内容时禁止添加水印、文字、人脸，避免画面抖动和频闪
- 基于参考素材创作时以原创方式重新设计，避免直接复刻
- 使用中文回复，保持简洁直接

---

*最后更新：2026-06-05*