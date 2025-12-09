# GitHub部署脚本 - 部署到 https://github.com/haidaili123/iii
# 作者: AI助手
# 用途: 将数据可视化网站部署到GitHub Pages

Write-Host "🚀 开始部署到GitHub仓库: https://github.com/haidaili123/iii" -ForegroundColor Green

# 检查是否在正确的目录
if (-not (Test-Path "index-purple.html")) {
    Write-Host "❌ 错误: 请在项目根目录运行此脚本" -ForegroundColor Red
    exit 1
}

# 检查git是否已初始化
if (-not (Test-Path ".git")) {
    Write-Host "📦 初始化Git仓库..." -ForegroundColor Yellow
    git init
    git branch -M main
}

# 配置远程仓库（如果尚未配置）
$remoteUrl = git remote get-url origin 2>$null
if (-not $remoteUrl) {
    Write-Host "🔗 配置远程仓库..." -ForegroundColor Yellow
    git remote add origin https://github.com/haidaili123/iii.git
    Write-Host "✅ 远程仓库已配置: https://github.com/haidaili123/iii" -ForegroundColor Green
}

# 添加所有必要文件
Write-Host "📋 添加项目文件..." -ForegroundColor Yellow
git add .
git add index-purple.html
git add style-purple.css
git add purple-charts.js
git add chapter6-purple.html
git add charts.js
git add README.md
git add .gitignore

# 提交更改
Write-Host "💾 提交更改..." -ForegroundColor Yellow
$commitMessage = @"
🌸 部署浅紫色渐变主题数据可视化网站

✨ 功能特色:
- 优雅的浅紫色渐变主题设计
- 基于Matplotlib第六章坐标轴定制的交互功能
- 8个实时交互图表演示
- 响应式设计，支持多设备访问
- 专业的数据可视化展示

🛠️ 技术栈: HTML5 + CSS3 + Chart.js + ES6+

📊 部署时间: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')
"@

git commit -m $commitMessage

# 推送到GitHub
Write-Host "📤 推送到GitHub..." -ForegroundColor Yellow
git push -u origin main --force

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 部署成功!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📱 网站信息:" -ForegroundColor Cyan
    Write-Host "   仓库地址: https://github.com/haidaili123/iii" -ForegroundColor White
    Write-Host "   主页文件: index-purple.html" -ForegroundColor White
    Write-Host "   主题样式: style-purple.css" -ForegroundColor White
    Write-Host "   交互脚本: purple-charts.js" -ForegroundColor White
    Write-Host ""
    Write-Host "🌐 下一步操作:" -ForegroundColor Cyan
    Write-Host "   1. 访问 https://github.com/haidaili123/iii" -ForegroundColor White
    Write-Host "   2. 进入 Settings -> Pages" -ForegroundColor White
    Write-Host "   3. 在 Source 中选择 'Deploy from a branch'" -ForegroundColor White
    Write-Host "   4. 选择 'main' 分支和 '/' (root) 目录" -ForegroundColor White
    Write-Host "   5. 点击 Save，等待几分钟即可通过 GitHub Pages 访问" -ForegroundColor White
    Write-Host ""
    Write-Host "✨ 你的网站将在以下地址可用:" -ForegroundColor Green
    Write-Host "   https://haidaili123.github.io/iii/" -ForegroundColor Yellow
    Write-Host ""
} else {
    Write-Host "❌ 推送失败，请检查网络连接和GitHub权限" -ForegroundColor Red
    exit 1
}

Write-Host "🎯 部署脚本执行完成!" -ForegroundColor Green