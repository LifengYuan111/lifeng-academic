# 网站维护说明

网站正文全部使用英文；本文件仅用于中文维护提示。

## 本地预览

安装 Hugo 0.162.0 或更高版本，在项目根目录运行：

```bash
hugo server
```

浏览器打开 `http://localhost:1313/`。生产构建命令：

```bash
hugo --gc --minify
```

## 修改内容

- 首页：`layouts/index.html`
- About：`content/about.md`
- Research：`content/research.md`
- Projects：`content/projects.md`
- Teaching：`content/teaching.md`
- Contact：`content/contact.md` 与 `layouts/contact/single.html`
- Research Summaries：`content/notes/`（URL 继续使用 `/notes/`，但不显示在顶部导航）
- 全站样式：`assets/css/main.css`
- 菜单、域名和公开链接：`hugo.toml`

## 更新论文

将新的 Google Scholar CSV 覆盖到 `source_inputs/citations.csv`，然后运行：

```bash
python3 scripts/import_publications.py
hugo --gc --minify
```

脚本会按题名和年份去重，并保留信息更完整的重复记录（可处理作者姓名格式不同的重复项）。网页使用 `data/publications.json`，公开下载源使用 `static/files/publications-source.csv`；若希望公开下载文件也同步更新，请同时复制新的 CSV：

```bash
cp source_inputs/citations.csv static/files/publications-source.csv
```

## 维护 Research Summaries 与论文链接

新增 Research Summary 时：

1. 在 `content/notes/` 新建 Markdown 文件。
2. 在 front matter 中填写 `topic` 和 `publication_title`；`publication_title` 必须与 `data/publications.json` 中的论文题名完全一致。
3. 在 `data/publication_links.json` 对应论文记录中增加：

```json
"summary": "notes/example-summary/"
```

这样 Publications 页面会自动显示 Research Summary 图标，Summary 页面也会自动显示 DOI、PDF、Dataset 和 Scholar 等已有资源。若有演示海报或幻灯片，先放入 `static/files/presentations/`，再在同一条记录中增加：

```json
"presentation": "files/presentations/example-poster.png"
```

页面会自动显示 Presentation 图标并在新标签页打开文件。若以后有公开代码仓库，也可增加 `"code": "https://github.com/..."`。

## 发布前必须确认

1. GitHub 用户名和仓库名是否与 `hugo.toml` 中的 `baseURL` 一致。
2. Contact 页面中的邮箱、Google Scholar、ORCID、LinkedIn、GitHub 与 CV 链接。
3. 旧职位、工作经历和求职说明是否仍需按原网站原样公开。
4. GitHub 仓库的 Pages Source 已设置为 GitHub Actions。

网站已通过 GitHub Pages 公开发布；每次推送到 `main` 分支都会触发部署工作流。
