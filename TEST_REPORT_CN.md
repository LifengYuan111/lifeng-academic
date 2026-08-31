# 构建与质量检查报告

检查日期：2026-08-31

## 结果

- Hugo 版本：0.162.0
- 生产构建：通过
- 构建参数：`--gc --minify --cleanDestinationDir --panicOnWarning`
- 内容页面：Home、About、Research、Publications、Projects、Teaching & Mentoring、Contact、Research Notes 索引及 8 篇子页面
- 论文记录：71 条，覆盖 2003–2025；源 CSV 73 行，去除 2 个重复项
- 内部断链：0
- 重复 HTML ID：0
- 缺失图片替代文字：0
- 缺失页面标题或 description：0
- Python 导入脚本语法：通过
- JavaScript 语法：通过
- Google Sites 页脚噪声（Page updated / Report abuse）：0
- 生产输出大小：约 2.9 MB

## 视觉检查限制

已尝试使用云端浏览器打开 Hugo 本地服务器与离线构建文件，但浏览器安全策略拒绝访问本地预览地址，因此没有生成桌面和手机截图。未尝试绕过安全限制。

响应式断点、移动菜单、横幅裁切策略、键盘焦点、减弱动画、图片替代文字和论文筛选逻辑均已在源码层面检查；公开发布前仍建议在本机运行 `hugo server`，分别使用桌面与手机宽度做最后一次人工视觉确认。
