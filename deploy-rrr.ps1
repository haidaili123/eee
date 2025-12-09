# 部署到 rrr 仓库的PowerShell脚本
Write-Host "🌊 开始部署浅蓝+原木色+薄荷绿主题网站到 rrr 仓库..." -ForegroundColor Green

# 切换到项目目录
Set-Location "c:/Users/Administrator/CodeBuddy/20251209164246"

try {
    # 移除现有的远程仓库（如果存在）
    Write-Host "🔧 配置远程仓库..." -ForegroundColor Blue
    git remote remove origin 2>$null

    # 添加新的远程仓库
    git remote add origin https://github.com/haidaili123/rrr.git

    # 检查Git状态
    Write-Host "📋 检查Git状态..." -ForegroundColor Blue
    git status

    # 添加所有文件
    Write-Host "➕ 添加文件到暂存区..." -ForegroundColor Blue  
    git add .

    # 提交更改
    Write-Host "💾 提交更改..." -ForegroundColor Blue
    git commit -m "🌊 部署浅蓝+原木色+薄荷绿主题第六章数据可视化网站

✨ Features:
- 🎨 浅蓝+原木色+薄荷绿清新主题设计
- 📐 基于第六章坐标轴定制的完整交互功能
- 📊 包含风速分析、三角函数、轴位置定制等实例
- 🎮 丰富的数据筛选和动态交互功能
- 📱 完全响应式设计，适配各种设备

📁 核心文件:
- chapter6-interactive.html (第六章交互页面)
- chapter6-charts.js (坐标轴定制JavaScript功能)
- style-blue-green.css (浅蓝原木薄荷主题样式)
- index.html (整合所有功能的全新主页)

🎯 交互功能:
- 实时刻度定制和轴脊控制
- 动态数据筛选和图表切换
- 坐标轴位置调整和样式定制
- 图表导出和数据随机化功能

🌐 网站地址: https://haidaili123.github.io/rrr/"

    # 强制推送到GitHub
    Write-Host "📤 推送到GitHub..." -ForegroundColor Blue
    git push -u origin main --force

    # 检查推送结果
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ 部署成功！" -ForegroundColor Green
        Write-Host "🌐 访问地址: https://haidaili123.github.io/rrr/" -ForegroundColor Cyan
        Write-Host "⚙️  请在GitHub仓库设置中启用GitHub Pages:" -ForegroundColor Yellow
        Write-Host "   1. 访问 https://github.com/haidaili123/rrr" -ForegroundColor White
        Write-Host "   2. 点击 Settings > Pages" -ForegroundColor White  
        Write-Host "   3. Source: Deploy from a branch" -ForegroundColor White
        Write-Host "   4. Branch: main" -ForegroundColor White
        Write-Host "   5. Folder: / (root)" -ForegroundColor White
        Write-Host "   6. 点击 Save" -ForegroundColor White
    } else {
        Write-Host "❌ 部署失败，请检查网络连接和仓库权限" -ForegroundColor Red
    }

} catch {
    Write-Host "❌ 执行过程中发生错误: $($_.Exception.Message)" -ForegroundColor Red
}

Write-Host "🎉 部署脚本执行完成！" -ForegroundColor Green