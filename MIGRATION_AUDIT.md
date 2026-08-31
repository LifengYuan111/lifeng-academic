# Lifeng Yuan 学术网站迁移审计

审计日期：2026-08-31

## 内容基准

- 职位、单位、经历、教育、项目、研究说明、教学、荣誉、软件著作权、博客与联系方式：以现有 Google Sites 为准，原意与事实完整保留，不更新职位。
- Publications：最终以指定 Google Scholar profile `OefAU_sAAAAJ` 为主；Google Sites 的 Publications 页面作为补充与临时基线。
- 头像：使用 Google Sites 上现有头像。当前浏览器无法取得原始头像文件，需要网站所有者上传原图后制作高保真 banner。

## 页面迁移表

| 原页面/资源 | 新位置 | 迁移方式 | 当前状态 |
|---|---|---|---|
| Home | `/`、`/about/`、`/research/` | 首页精简展示；所有能力、服务、现场/实验室经验分别迁入 About 与 Research | 正文已完整保存 |
| Work | `/about/#experience` | 保留全部工作经历、日期、职务和职责 | 正文已完整保存 |
| Education | `/about/#education` | 保留全部教育背景 | 正文已完整保存 |
| Blog index | `/notes/` | 新建研究笔记索引 | 已保存 |
| Coastal winter precipitation blog | `/notes/coastal-winter-precipitation/` | 独立 research note | 正文已完整保存 |
| SWMM emergency response blog | `/notes/swmm-emergency-response/` | 独立 research note | 正文已完整保存 |
| Elevated CO2 and temperature blog | `/notes/elevated-co2-temperature/` | 独立 research note | 正文已完整保存 |
| SWAT-SVR blog | `/notes/swat-svr-streamflow/` | 独立 research note | 正文已完整保存 |
| Watershed model review blog | `/notes/watershed-model-review/` | 独立 research note | 正文已完整保存 |
| EPA watershed tools report blog | `/notes/epa-watershed-tools-report/` | 独立 research note | 正文已完整保存 |
| Xinjiang River SWAT blog | `/notes/xinjiang-river-swat/` | 独立 research note | 正文已完整保存 |
| Poyang precipitation blog | `/notes/poyang-precipitation/` | 独立 research note | 正文已完整保存 |
| Publications | `/publications/` | 结构化列表；保留 U.S. Government Agency Reports 等原站分类 | Google Sites 正文已保存；Scholar 完整清单待导出 |
| Projects | `/projects/` | 项目卡片与详细说明 | 正文已完整保存 |
| Research Profile | `/research/` | 研究简介与方向 | 正文已完整保存 |
| Research Statement | `/research/#statement` | 作为 Research 页完整长文区 | 正文已完整保存 |
| Honors and Awards | `/about/#honors` | 时间线/列表 | 正文已完整保存 |
| Software Copyrights | `/about/#software` | 独立成果区 | 正文已完整保存 |
| Graduate Students | `/teaching/#mentoring` | 研究生指导区 | 正文已完整保存 |
| Teaching Philosophy | `/teaching/#philosophy` | 教学理念全文 | 正文已完整保存 |
| Contact Me | `/contact/` | 保留原站公开联系方式和外部个人档案 | 正文与链接已保存 |
| Google Sites profile image | Hero/banner 与 About | 保留人物身份，制作水文主题原创 banner | 已使用用户提供原图并确认方案 A |
| Google Scholar `OefAU_sAAAAJ` | `/publications/` | 从用户提供的 CSV 导入结构化数据 | 已导入 73 行；去除 2 个重复项后为 71 条 |

## 不得更改的内容

- `Position Title: Physical Scientist, Center for Environmental Solutions and Emergency Response, U.S. Environmental Protection Agency (EPA), USA.`
- `Former EPA/USDA scientist seeking new research roles in climate, soil, and water modeling. Open to U.S. and global opportunities. Let’s connect!`
- Google Sites 中的其他职位、单位、日期、项目状态、荣誉与求职说明。

## 材料状态

1. 头像原图已提供，并用于生成确认后的自然流域横幅。
2. Google Scholar CSV 已提供，原始文件保存在 `source_inputs/citations.csv`。
3. 现有 Google 网站的 21 个公开页面正文已保存并迁移。
