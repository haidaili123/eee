#!/bin/bash

# GitHub部署脚本 - 部署到 https://github.com/haidaili123/iii
# 作者: AI助手
# 用途: 将数据可视化网站部署到GitHub Pages

echo "🚀 开始部署到GitHub仓库: https://github.com/haidaili123/iii"

# 检查是否在正确的目录
if [ ! -f "index-purple.html" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

# 检查git是否已初始化
if [ ! -d ".git" ]; then
    echo "📦 初始化Git仓库..."
    git init
    git branch -M main
fi

# 配置远程仓库（如果尚未配置）
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "🔗 配置远程仓库..."
    git remote add origin https://github.com/haidaili123/iii.git
    echo "✅ 远程仓库已配置: https://github.com/haidaili123/iii"
fi

# 添加所有必要文件
echo "📋 添加项目文件..."
git add .
git add index-purple.html
git add style-purple.css
git add purple-charts.js
git add chapter6-purple.html
git add charts.js
git add README.md
git add .gitignore

# 提交更改
echo "💾 提交更改..."
git commit -m "🌸 部署浅紫色渐变主题数据可视化网站

✨ 功能特色:
- 优雅的浅紫色渐变主题设计
- 基于Matplotlib第六章坐标轴定制的交互功能
- 8个实时交互图表演示
- 响应式设计，支持多设备访问
- 专业的数据可视化展示

🛠️ 技术栈: HTML5 + CSS3 + Chart.js + ES6+

📊 部署时间: $(date '+%Y-%m-%d %H:%M:%S')"

# 推送到GitHub
echo "📤 推送到GitHub..."
git push -u origin main --force

if [ $? -eq 0 ]; then
    echo ""
    echo "🎉 部署成功!"
    echo ""
    echo "📱 网站信息:"
    echo "   仓库地址: https://github.com/haidaili123/iii"
    echo "   主页文件: index-purple.html"
    echo "   主题样式: style-purple.css"
    echo "   交互脚本: purple-charts.js"
    echo ""
    echo "🌐 下一步操作:"
    echo "   1. 访问 https://github.com/haidaili123/iii"
    echo "   2. 进入 Settings -> Pages"
    echo "   3. 在 Source 中选择 'Deploy from a branch'"
    echo "   4. 选择 'main' 分支和 '/' (root) 目录"
    echo "   5. 点击 Save，等待几分钟即可通过 GitHub Pages 访问"
    echo ""
    echo "✨ 你的网站将在以下地址可用:"
    echo "   https://haidaili123.github.io/iii/"
    echo ""
else
    echo "❌ 推送失败，请检查网络连接和GitHub权限"
    exit 1
fi

echo "🎯 部署脚本执行完成!"