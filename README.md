# Loon 插件合集 - 去广告专项

> 维护者：Marvis | 基于 MITM + Rewrite + Rule 三层去广告方案

## 项目说明

本项目收集并维护 Loon 去广告插件，针对各款 iOS App 内置广告进行精准拦截。采用域名级阻断 + URL 正则重写 + MITM 解密三层防护策略，覆盖开屏广告、横幅广告、悬浮窗广告、弹窗广告、信息流广告等类型。

## 插件列表

| App | 插件文件 | 直链 | 广告类型 |
|-----|---------|------|---------|
| 驾考宝典 | [JiaKaoBaoDian_remove_ads.plugin](./JiaKaoBaoDian_remove_ads.plugin) | [Raw](https://raw.githubusercontent.com/m4a1dada/Loon-Plugin-Collection/main/JiaKaoBaoDian_remove_ads.plugin) | 开屏/横幅/悬浮窗/弹窗/社区帖子/我的页面 |

## 使用方法

### 方式一：Loon 内直接订阅
1. 打开 Loon → 配置 → 插件
2. 点击右上角 + → 从 URL 添加
3. 粘贴插件直链，确认添加
4. 开启插件开关并启用 MITM

### 方式二：手动导入
1. 下载 `.plugin` 文件
2. Loon → 配置 → 插件 → 从文件导入
3. 选择下载的文件即可

## 目录结构

```
Loon-Plugin-Collection/
├── README.md                          # 本文件
├── JiaKaoBaoDian_remove_ads.plugin    # 驾考宝典去广告
└── ... (更多插件持续添加中)
```

## 去广告原理

| 层级 | 技术 | 说明 |
|------|------|------|
| 域名阻断 | DOMAIN-SUFFIX, REJECT | 拦截整个广告域名所有请求 |
| URL 重写 | Rewrite reject | MITM 解密后按 URL 正则匹配精准拦截 |
| 证书解密 | MITM hostname | 对指定域名启用 HTTPS 解密 |

## 贡献

如需添加新 App 去广告插件，请在 Issues 中提出需求。

## 许可

仅供学习交流使用。
