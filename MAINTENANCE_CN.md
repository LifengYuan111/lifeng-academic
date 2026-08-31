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
- Research Notes：`content/notes/`
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

## 发布前必须确认

1. GitHub 用户名和仓库名是否与 `hugo.toml` 中的 `baseURL` 一致。
2. Contact 页面中的邮箱、Google Scholar、ORCID、LinkedIn、GitHub 与 CV 链接。
3. 旧职位、工作经历和求职说明是否仍需按原网站原样公开。
4. GitHub 仓库的 Pages Source 已设置为 GitHub Actions。

本项目尚未进行公开发布。
