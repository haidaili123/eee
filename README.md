# 🌸 第六章数据可视化网站 - 浅紫色渐变主题

基于Matplotlib第六章坐标轴定制技术的交互式数据可视化网站，采用优雅的浅紫色渐变主题设计。

## 📖 项目介绍

本项目将第六章的Matplotlib可视化实例转换为现代的Web交互式数据可视化网站，包含丰富的交互功能和优雅的用户界面。

## 🎨 设计特色

- **浅紫色渐变主题**：采用优雅梦幻的紫色渐变配色(#F3E5F5到#6A1B9A)
- **坐标轴定制功能**：基于第六章完整实现的坐标轴控制
- **响应式设计**：完美适配桌面和移动设备
- **交互式图表**：支持数据筛选、动态更新、导出功能
- **现代化界面**：基于HTML5、CSS3和Chart.js技术

## 📊 功能模块

### 📈 销售数据分析
- 产品A与产品B销售额趋势对比
- 支持折线图、柱状图、雷达图切换
- 动画速度控制
- 数据导出功能

### 🌍 人口统计分析  
- 12个国家养猫与养狗人群比例分析
- 国家筛选功能
- 散点图关联分析
- 标签页切换展示

### 🌤️ 气象数据展示
- 全年气温、降水量、蒸发量数据
- 季度筛选功能
- 数据叠加控制
- 组合图表展示

### 📊 数据对比分析
- 多维度数据对比
- 产品、城市、年度对比模式
- 实时数据更新

## 🚀 在线预览

👉 **[GitHub仓库地址](https://github.com/haidaili123/iii)**

📱 **GitHub Pages访问**: https://haidaili123.github.io/iii/ (需启用GitHub Pages)

## 📁 文件结构

```
iii/
├── index-purple.html       # 浅紫色主题主页
├── chapter6-purple.html    # 第六章完整版
├── interactive.html        # 交互式版本
├── style-purple.css       # 浅紫色渐变主题样式
├── purple-charts.js       # 紫色主题图表实现
├── charts.js             # 通用图表库
├── README.md             # 项目说明文档
├── deploy-github.sh      # Linux/Mac部署脚本
└── deploy-github.ps1     # Windows部署脚本
```

## 🔧 技术栈

- **HTML5**: 语义化标记
- **CSS3**: 响应式布局和动画
- **JavaScript (ES6+)**: 交互逻辑
- **Chart.js**: 数据可视化库
- **GitHub Pages**: 免费静态网站托管

## 📱 响应式支持

- 🖥️ 桌面端：完整功能体验
- 📱 平板端：自适应布局
- 📱 手机端：移动端优化

## 🎯 交互特性

1. **数据筛选**: 支持多维度数据过滤
2. **图表切换**: 折线图、柱状图、雷达图
3. **动画控制**: 可调节动画速度
4. **数据导出**: JSON格式数据下载
5. **实时更新**: 数据变化即时反映
6. **悬停效果**: 详细数据提示
7. **平滑滚动**: 导航栏平滑定位

## 🌈 颜色主题

### 主色调
- 主色: `#D4A574` (暖米黄色)
- 次色: `#C19A6B` (深暖米色)
- 浅色: `#E6D5B8` (浅暖米色)
- 极浅: `#F5F0E8` (极浅暖米色)
- 强调: `#B8956A` (深暖米色)

### 文字颜色
- 主文字: `#5D4E37` (深棕色)
- 次文字: `#8B7355` (中棕色)

## 📊 数据来源

所有数据基于第五章Matplotlib实例：
- 产品销售数据 (实例1)
- 养猫养狗比例数据 (实例2)
- 抖音用户数据 (实例3)
- 气象数据 (实例4)
- 汽车销售数据 (实例5)

## 🚀 本地运行

### 🚀 部署到GitHub (推荐)

1. 克隆仓库：
   ```bash
   git clone https://github.com/haidaili123/iii.git
   ```

2. 进入目录：
   ```bash
   cd iii
   ```

3. 运行部署脚本：
   ```bash
   # Windows系统
   .\deploy-github.ps1
   
   # Linux/Mac系统
   chmod +x deploy-github.sh
   ./deploy-github.sh
   ```

4. 在GitHub上启用Pages：
   - 访问 https://github.com/haidaili123/iii
   - 进入 Settings → Pages
   - 选择 "Deploy from a branch"
   - 选择 "main" 分支和 "/" 目录
   - 点击 Save

5. 等待几分钟后访问：https://haidaili123.github.io/iii/

### 🏃‍♂️ 本地运行

1. 克隆仓库（如上）

2. 启动本地服务器：
   ```bash
   # 使用Python
   python -m http.server 8000
   
   # 或使用Node.js
   npx serve .
   ```

3. 打开浏览器访问：
   ```
   http://localhost:8000/index-purple.html
   ```

## 📝 更新日志

### v1.0.0 (2025-12-09)
- ✨ 完成浅紫色渐变主题设计
- ✨ 实现基于第六章坐标轴定制的交互功能
- ✨ 添加8个实时交互图表演示
- ✨ 集成第六章所有实例数据
- ✨ 支持数据导出和筛选功能
- ✨ 实现GitHub Pages部署支持

## 🤝 贡献

欢迎提交Issue和Pull Request来改进项目！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🙏 致谢

- [Chart.js](https://www.chartjs.org/) - 强大的图表库
- [GitHub Pages](https://pages.github.com/) - 免费静态网站托管
- Matplotlib - 原始数据可视化框架

---

⭐ 如果这个项目对您有帮助，请给它一个Star！