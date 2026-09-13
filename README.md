# Loon 插件合集 - 去广告专项

> 维护者：Marvis | 基于 MITM + Rewrite + Script 三层去广告方案

> 开发规范详见 [SPEC.md](./SPEC.md)，**下一个接手的 Marvis 请先阅读此文件。**

## 重要：国内 iPhone 订阅方式（必看）

本仓库所有插件直链统一使用 **GitHub Pages 域名**，**禁用 raw.githubusercontent.com 与 jsDelivr CDN**。
这两种域名在国内 iPhone 网络下会间歇性超时，导致 Loon 提示「更新订阅资源失败 / 连接不上服务器」。
请使用下方表格中的 GitHub Pages 直链添加/更新插件。

## 插件列表

| App | 插件文件 | GitHub Pages 直链 | 广告类型 |
|-----|---------|------|---------|
| 驾考宝典 | JiaKaoBaoDian_remove_ads.plugin | [JiaKaoBaoDian_remove_ads.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/JiaKaoBaoDian_remove_ads.plugin) | 开屏/横幅/悬浮窗/弹窗/社区帖子/我的页面 |
| 京东 | JD_remove_ads.plugin | [JD_remove_ads.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/JD_remove_ads.plugin) | 首页3秒开屏/悬浮推广/物流/订单/个人页广告 |
| 中国移动 | ChinaMobile.plugin | [ChinaMobile.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/ChinaMobile.plugin) | 开屏/弹窗/首页促销/发现页广告 |
| 微信（朋友圈） | WeChat_remove_ads.plugin | [WeChat_remove_ads.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/WeChat_remove_ads.plugin) | 朋友圈图文广告/视频广告 |
| 微信小程序 | WexinMiniPrograms_Remove_ads.plugin | [WexinMiniPrograms_Remove_ads.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/WexinMiniPrograms_Remove_ads.plugin) | 40+ 小程序开屏/弹窗/横幅/信息流广告 |
| 肯德基 | KFC_remove_ads.plugin | [KFC_remove_ads.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/KFC_remove_ads.plugin) | 开屏广告及内部广告 |
| QQ音乐 | QQMusic_remove_ads.plugin | [QQMusic_remove_ads.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/QQMusic_remove_ads.plugin) | 开屏/播放页/列表页广告 |
| 美团 | Meituan_remove_ads.plugin | [Meituan_remove_ads.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/Meituan_remove_ads.plugin) | 开屏/首页弹窗/信息流/图片广告 |
| 碧淘充电桩 | Bitang_Remove_ads.plugin | [Bitang_Remove_ads.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/Bitang_Remove_ads.plugin) | 充电桩 App 开屏/弹窗广告 |
| 抖音分流（IP直连） | Douyin_IP.plugin | [Douyin_IP.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/Douyin_IP.plugin) | API 走代理改 IP，视频 CDN 直连 |
| 抖音分流（代理） | Douyin_Proxy.plugin | [Douyin_Proxy.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/Douyin_Proxy.plugin) | 抖音全域名分流，PROXY 可指向策略组 |
| Gemini分流（代理） | Gemini_Proxy.plugin | [Gemini_Proxy.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/Gemini_Proxy.plugin) | Gemini/Google AI 全域名分流 |
| 海角视频 | haijiao-video-direct.plugin | [haijiao-video-direct.plugin](https://m4a1dada.github.io/Loon-Plugin-Collection/haijiao-video-direct.plugin) | 海角视频直连/去广告 |
| Insav 解锁 | insav.lpx | [insav.lpx](https://m4a1dada.github.io/Loon-Plugin-Collection/insav.lpx) | VIP 解锁 + 去广告 + 播放器跳转 |

> 直链格式：`https://m4a1dada.github.io/Loon-Plugin-Collection/插件文件名`

## 使用方法

1. 打开 Loon → 配置 → 插件 → 右上角 `+` → 从 URL 添加
2. 粘贴表格中的 **GitHub Pages 直链**（不要用 jsDelivr/Raw 链接）
3. 开启插件开关，并确认已安装启用证书、开启 MITM
4. 若之前添加过旧链接提示更新失败：先删除该插件，再按新直链重新添加

## 目录结构

```
Loon-Plugin-Collection/
├── README.md
├── SPEC.md
├── ChinaMobile.plugin           # 中国移动去广告
├── JD_remove_ads.plugin         # 京东去广告
├── JiaKaoBaoDian_remove_ads.plugin  # 驾考宝典去广告
├── WeChat_remove_ads.plugin     # 微信朋友圈去广告
├── WexinMiniPrograms_Remove_ads.plugin # 微信小程序去广告
├── KFC_remove_ads.plugin        # 肯德基去广告
├── QQMusic_remove_ads.plugin    # QQ音乐去广告
├── Meituan_remove_ads.plugin    # 美团去广告
├── Bitang_Remove_ads.plugin     # 碧淘充电桩去广告
├── Douyin_IP.plugin / Douyin_Proxy.plugin  # 抖音分流
├── Gemini_Proxy.plugin          # Gemini 分流
├── haijiao-video-direct.plugin  # 海角视频直连
├── insav.lpx                    # Insav 解锁
├── icons/                       # 图标目录
└── scripts/                     # 脚本目录
```

## 排障

- **提示「更新订阅资源失败 / 连接不上服务器」**：确认你添加的是 GitHub Pages 直链，非 jsDelivr/raw；删除旧插件后重新添加。
- **图标不显示**：确认 `#!icon` 指向 `https://m4a1dada.github.io/Loon-Plugin-Collection/icons/xxx.png`。
- **插件未生效**：检查证书是否安装信任、配置是否开启 MITM、所选域名是否在 hostname 内。

## 许可

仅供学习交流使用。
