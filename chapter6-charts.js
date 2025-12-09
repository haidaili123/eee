// 第六章坐标轴定制交互式功能
// 基于Matplotlib第六章实例的Chart.js实现

// 浅蓝+原木色+薄荷绿主题配色
const blueGreenTheme = {
    primary: '#1976D2',           // 深蓝色
    mediumBlue: '#90CAF9',       // 中等蓝色  
    lightBlue: '#E3F2FD',        // 浅蓝色
    darkMint: '#00897B',         // 深薄荷绿
    accent: '#4DB6AC',           // 强调色
    lightMint: '#E0F2F1',        // 浅薄荷绿
    mintGreen: '#98FB98',        // 薄荷绿
    darkWood: '#8B6914',         // 深原木色
    mediumWood: '#D4A574',       // 中等原木色
    lightWood: '#F5E6D3',        // 浅原木色
    surface: '#FFFFFF',          // 白色表面
    shadow: 'rgba(158, 158, 158, 0.15)'
};

// 第六章数据集合
const chapter6Data = {
    // 实例1：深圳市24小时风速
    windSpeed: {
        labels: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00', '24:00'],
        values: [7, 9, 11, 14, 8, 15, 22, 11, 10, 11, 11, 13, 8],
        fullLabels: ['2019-10-24 00:00', '2019-10-24 02:00', '2019-10-24 04:00', '2019-10-24 06:00',
                    '2019-10-24 08:00', '2019-10-24 10:00', '2019-10-24 12:00', '2019-10-24 14:00',
                    '2019-10-24 16:00', '2019-10-24 18:00', '2019-10-24 20:00', '2019-10-24 22:00', '2019-10-25 00:00']
    },
    
    // 实例3：正弦余弦函数
    trigonometric: {
        generateData: function(points = 100, start = -2*Math.PI, end = 2*Math.PI) {
            const x = [];
            const sin = [];
            const cos = [];
            for (let i = 0; i < points; i++) {
                const xValue = start + (end - start) * i / (points - 1);
                x.push(xValue);
                sin.push(Math.sin(xValue));
                cos.push(Math.cos(xValue));
            }
            return { x, sin, cos };
        }
    },
    
    // 坐标轴位置演示数据
    axisPosition: {
        data1: [12, 19, 3, 5, 2, 8, 15],
        data2: [8, 12, 6, 9, 4, 11, 7],
        labels: ['1', '2', '3', '4', '5', '6', '7']
    }
};

// 图表实例存储
let charts = {
    windSpeed: null,
    trigonometric: null,
    axisDemo1: null,
    axisDemo2: null,
    customChart: null
};

// 初始化所有图表
function initChapter6Charts() {
    console.log('🎨 初始化第六章坐标轴定制图表...');
    
    try {
        createWindSpeedChart();
        createTrigonometricChart();
        createAxisPositionDemos();
        createCustomInteractiveChart();
        setupEventListeners();
        updateStatistics();
        
        console.log('✅ 所有第六章图表初始化完成');
    } catch (error) {
        console.error('❌ 图表初始化失败:', error);
    }
}

// 创建风速图表（基于实例1）
function createWindSpeedChart() {
    const ctx = document.getElementById('windSpeedChart');
    if (!ctx) return;
    
    charts.windSpeed = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: chapter6Data.windSpeed.labels,
            datasets: [{
                label: '平均风速 (km/h)',
                data: chapter6Data.windSpeed.values,
                borderColor: blueGreenTheme.primary,
                backgroundColor: blueGreenTheme.lightBlue + '40',
                borderWidth: 3,
                pointRadius: 6,
                pointHoverRadius: 8,
                pointBackgroundColor: blueGreenTheme.darkMint,
                pointBorderColor: blueGreenTheme.primary,
                pointBorderWidth: 2,
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                title: {
                    display: true,
                    text: '深圳市24小时平均风速监测',
                    font: { size: 16, weight: 'bold' },
                    color: blueGreenTheme.darkWood,
                    padding: 20
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 12 },
                        color: blueGreenTheme.darkWood
                    }
                },
                tooltip: {
                    backgroundColor: blueGreenTheme.surface,
                    titleColor: blueGreenTheme.darkWood,
                    bodyColor: blueGreenTheme.darkWood,
                    borderColor: blueGreenTheme.mediumBlue,
                    borderWidth: 1,
                    padding: 12,
                    displayColors: true,
                    callbacks: {
                        label: function(context) {
                            return `${context.dataset.label}: ${context.parsed.y} km/h`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: '时间',
                        font: { size: 14, weight: 'bold' },
                        color: blueGreenTheme.darkWood
                    },
                    grid: {
                        display: true,
                        color: blueGreenTheme.lightMint,
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 11 },
                        color: blueGreenTheme.darkWood,
                        maxRotation: 45,
                        minRotation: 0
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: '风速 (km/h)',
                        font: { size: 14, weight: 'bold' },
                        color: blueGreenTheme.darkWood
                    },
                    grid: {
                        display: true,
                        color: blueGreenTheme.lightMint,
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 11 },
                        color: blueGreenTheme.darkWood,
                        beginAtZero: true
                    },
                    min: 0,
                    max: 30
                }
            },
            animation: {
                duration: 1000,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// 创建三角函数图表（基于实例3）
function createTrigonometricChart() {
    const ctx = document.getElementById('trigChart');
    if (!ctx) return;
    
    const data = chapter6Data.trigonometric.generateData(100, -2*Math.PI, 2*Math.PI);
    
    charts.trigonometric = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: data.x,
            datasets: [{
                label: 'sin(x)',
                data: data.sin,
                borderColor: blueGreenTheme.primary,
                backgroundColor: 'transparent',
                borderWidth: 3,
                pointRadius: 0,
                pointHoverRadius: 6,
                tension: 0.4,
                fill: false
            }, {
                label: 'cos(x)',
                data: data.cos,
                borderColor: blueGreenTheme.darkMint,
                backgroundColor: 'transparent',
                borderWidth: 3,
                pointRadius: 0,
                pointHoverRadius: 6,
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'index',
                intersect: false,
            },
            plugins: {
                title: {
                    display: true,
                    text: '正弦与余弦函数曲线',
                    font: { size: 16, weight: 'bold' },
                    color: blueGreenTheme.darkWood,
                    padding: 20
                },
                legend: {
                    display: true,
                    position: 'top',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 12 },
                        color: blueGreenTheme.darkWood
                    }
                },
                tooltip: {
                    backgroundColor: blueGreenTheme.surface,
                    titleColor: blueGreenTheme.darkWood,
                    bodyColor: blueGreenTheme.darkWood,
                    borderColor: blueGreenTheme.mediumBlue,
                    borderWidth: 1,
                    padding: 12,
                    callbacks: {
                        title: function(tooltipItems) {
                            const xValue = tooltipItems[0].parsed.x;
                            return `x = ${xValue.toFixed(3)}`;
                        },
                        label: function(context) {
                            const value = context.parsed.y;
                            return `${context.dataset.label}: ${value.toFixed(4)}`;
                        }
                    }
                }
            },
            scales: {
                x: {
                    display: true,
                    title: {
                        display: true,
                        text: 'x (弧度)',
                        font: { size: 14, weight: 'bold' },
                        color: blueGreenTheme.darkWood
                    },
                    grid: {
                        display: true,
                        color: blueGreenTheme.lightMint + '60',
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 11 },
                        color: blueGreenTheme.darkWood,
                        callback: function(value, index) {
                            const pi = Math.PI;
                            if (Math.abs(value) < 0.01) return '0';
                            if (Math.abs(value - pi) < 0.1) return 'π';
                            if (Math.abs(value + pi) < 0.1) return '-π';
                            if (Math.abs(value - 2*pi) < 0.1) return '2π';
                            if (Math.abs(value + 2*pi) < 0.1) return '-2π';
                            if (Math.abs(value - pi/2) < 0.1) return 'π/2';
                            if (Math.abs(value + pi/2) < 0.1) return '-π/2';
                            if (Math.abs(value - 3*pi/2) < 0.1) return '3π/2';
                            if (Math.abs(value + 3*pi/2) < 0.1) return '-3π/2';
                            return value.toFixed(1);
                        }
                    }
                },
                y: {
                    display: true,
                    title: {
                        display: true,
                        text: 'y',
                        font: { size: 14, weight: 'bold' },
                        color: blueGreenTheme.darkWood
                    },
                    grid: {
                        display: true,
                        color: blueGreenTheme.lightMint + '60',
                        drawBorder: false
                    },
                    ticks: {
                        font: { size: 11 },
                        color: blueGreenTheme.darkWood
                    },
                    min: -1.5,
                    max: 1.5
                }
            },
            animation: {
                duration: 1200,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// 创建坐标轴位置演示图表
function createAxisPositionDemos() {
    // 第一个演示图表
    const ctx1 = document.getElementById('axisDemo1');
    if (ctx1) {
        charts.axisDemo1 = new Chart(ctx1.getContext('2d'), {
            type: 'line',
            data: {
                labels: chapter6Data.axisPosition.labels,
                datasets: [{
                    label: '数据系列 A',
                    data: chapter6Data.axisPosition.data1,
                    borderColor: blueGreenTheme.mediumWood,
                    backgroundColor: blueGreenTheme.lightWood + '60',
                    borderWidth: 3,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    pointBackgroundColor: blueGreenTheme.darkWood,
                    tension: 0.4,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '坐标轴位置演示 1',
                        font: { size: 14, weight: 'bold' },
                        color: blueGreenTheme.darkWood
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: blueGreenTheme.darkWood }
                    },
                    y: {
                        grid: { color: blueGreenTheme.lightMint + '40' },
                        ticks: { color: blueGreenTheme.darkWood }
                    }
                }
            }
        });
    }
    
    // 第二个演示图表
    const ctx2 = document.getElementById('axisDemo2');
    if (ctx2) {
        charts.axisDemo2 = new Chart(ctx2.getContext('2d'), {
            type: 'bar',
            data: {
                labels: chapter6Data.axisPosition.labels,
                datasets: [{
                    label: '数据系列 B',
                    data: chapter6Data.axisPosition.data2,
                    backgroundColor: blueGreenTheme.darkMint,
                    borderColor: blueGreenTheme.accent,
                    borderWidth: 2,
                    hoverBackgroundColor: blueGreenTheme.accent
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    title: {
                        display: true,
                        text: '坐标轴位置演示 2',
                        font: { size: 14, weight: 'bold' },
                        color: blueGreenTheme.darkWood
                    }
                },
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: blueGreenTheme.darkWood }
                    },
                    y: {
                        grid: { color: blueGreenTheme.lightMint + '40' },
                        ticks: { color: blueGreenTheme.darkWood },
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// 创建自定义交互图表
function createCustomInteractiveChart() {
    const ctx = document.getElementById('customChart');
    if (!ctx) return;
    
    const data = generateCustomData(20);
    
    charts.customChart = new Chart(ctx.getContext('2d'), {
        type: 'line',
        data: {
            labels: data.labels,
            datasets: [{
                label: '交互数据',
                data: data.values,
                borderColor: blueGreenTheme.primary,
                backgroundColor: blueGreenTheme.lightBlue + '40',
                borderWidth: 3,
                pointRadius: 5,
                pointHoverRadius: 8,
                tension: 0.3,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: 'nearest',
                intersect: false,
                axis: 'x'
            },
            plugins: {
                title: {
                    display: true,
                    text: '自定义交互图表',
                    font: { size: 16, weight: 'bold' },
                    color: blueGreenTheme.darkWood
                },
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        color: blueGreenTheme.darkWood
                    }
                },
                y: {
                    display: true,
                    grid: {
                        color: blueGreenTheme.lightMint + '40'
                    },
                    ticks: {
                        color: blueGreenTheme.darkWood
                    },
                    beginAtZero: true
                }
            },
            animation: {
                duration: 800,
                easing: 'easeInOutQuart'
            }
        }
    });
}

// 生成自定义数据
function generateCustomData(count) {
    const labels = [];
    const values = [];
    for (let i = 0; i < count; i++) {
        labels.push(`数据点 ${i + 1}`);
        values.push(Math.random() * 80 + 20);
    }
    return { labels, values };
}

// 更新风速图表（响应控件变化）
function updateWindSpeedChart() {
    if (!charts.windSpeed) return;
    
    const interval = parseInt(document.getElementById('tickInterval')?.value || 2);
    const direction = document.getElementById('tickDirection')?.value || 'in';
    const rotation = parseInt(document.getElementById('labelRotation')?.value || 45);
    const showTop = document.getElementById('showTop')?.checked !== false;
    const showRight = document.getElementById('showRight')?.checked !== false;
    const showBottom = document.getElementById('showBottom')?.checked !== false;
    const showLeft = document.getElementById('showLeft')?.checked !== false;
    
    // 更新刻度间隔
    if (interval === 2) {
        charts.windSpeed.data.labels = chapter6Data.windSpeed.labels.filter((_, i) => i % 2 === 0);
        charts.windSpeed.data.datasets[0].data = chapter6Data.windSpeed.values.filter((_, i) => i % 2 === 0);
    } else {
        charts.windSpeed.data.labels = chapter6Data.windSpeed.labels;
        charts.windSpeed.data.datasets[0].data = chapter6Data.windSpeed.values;
    }
    
    // 更新刻度样式
    charts.windSpeed.options.scales.x.ticks.maxRotation = rotation;
    charts.windSpeed.options.scales.x.ticks.minRotation = 0;
    
    // 更新轴脊显示
    charts.windSpeed.options.scales.x.display = showBottom;
    charts.windSpeed.options.scales.y.display = showLeft;
    
    charts.windSpeed.update('none');
}

// 更新三角函数图表
function updateTrigonometricChart() {
    if (!charts.trigonometric) return;
    
    const xRange = document.getElementById('xRange')?.value || '-2,2';
    const tickFormat = document.getElementById('tickFormat')?.value || 'pi';
    const spinePosition = document.getElementById('spinePosition')?.value || 'center';
    const showGrid = document.getElementById('showGrid')?.checked === true;
    
    const [start, end] = xRange.split(',').map(Number);
    const data = chapter6Data.trigonometric.generateData(100, start * Math.PI, end * Math.PI);
    
    charts.trigonometric.data.labels = data.x;
    charts.trigonometric.data.datasets[0].data = data.sin;
    charts.trigonometric.data.datasets[1].data = data.cos;
    
    // 更新网格显示
    charts.trigonometric.options.scales.x.grid.display = showGrid;
    charts.trigonometric.options.scales.y.grid.display = showGrid;
    
    charts.trigonometric.update();
}

// 更新自定义图表
function updateCustomChart() {
    if (!charts.customChart) return;
    
    const chartType = document.getElementById('chartType')?.value || 'line';
    const dataPoints = parseInt(document.getElementById('dataPoints')?.value || 20);
    const themeColor = document.getElementById('themeColor')?.value || blueGreenTheme.primary;
    const enableAnimation = document.getElementById('enableAnimation')?.checked !== false;
    
    const data = generateCustomData(dataPoints);
    
    // 更新图表类型
    charts.customChart.config.type = chartType;
    
    // 更新数据
    charts.customChart.data.labels = data.labels;
    charts.customChart.data.datasets[0].data = data.values;
    charts.customChart.data.datasets[0].borderColor = themeColor;
    charts.customChart.data.datasets[0].backgroundColor = chartType === 'line' ? 
        themeColor + '40' : themeColor + '80';
    
    // 更新动画
    charts.customChart.options.animation.duration = enableAnimation ? 800 : 0;
    
    charts.customChart.update();
}

// 导出图表功能
function exportChart(chartId = 'customChart') {
    const chart = charts[chartId];
    if (chart) {
        const url = chart.toBase64Image();
        const link = document.createElement('a');
        link.download = `chart-${chartId}-${Date.now()}.png`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        console.log('📥 图表已导出');
    }
}

// 随机化数据
function randomizeChartData(chartId = 'customChart') {
    const chart = charts[chartId];
    if (chart) {
        const newData = generateCustomData(chart.data.labels.length);
        chart.data.datasets[0].data = newData.values;
        chart.update();
        console.log('🎲 数据已随机化');
    }
}

// 重置定制设置
function resetCustomization() {
    document.getElementById('chartType').value = 'line';
    document.getElementById('dataPoints').value = 20;
    document.getElementById('themeColor').value = blueGreenTheme.primary;
    document.getElementById('enableAnimation').checked = true;
    document.getElementById('enableInteraction').checked = true;
    
    updateCustomChart();
    console.log('🔄 设置已重置');
}

// 更新统计信息
function updateStatistics() {
    const stats = {
        totalExamples: 5,
        customizationOptions: 20,
        interactiveCharts: Object.keys(charts).filter(key => charts[key] !== null).length,
        dataPoints: Object.values(chapter6Data).reduce((sum, data) => {
            if (Array.isArray(data.values)) return sum + data.values.length;
            if (Array.isArray(data.data1)) return sum + data.data1.length + (data.data2?.length || 0);
            return sum;
        }, 0)
    };
    
    // 更新DOM中的统计数字（如果存在）
    const elements = {
        totalExamples: document.getElementById('totalExamples'),
        customizationOptions: document.getElementById('customizationOptions'),
        interactiveCharts: document.getElementById('interactiveCharts'),
        dataPoints: document.getElementById('dataPoints')
    };
    
    Object.entries(elements).forEach(([key, element]) => {
        if (element) {
            element.textContent = stats[key];
        }
    });
    
    console.log('📊 统计信息已更新:', stats);
}

// 设置事件监听器
function setupEventListeners() {
    // 风速图表控件
    const windControls = ['tickInterval', 'tickDirection', 'labelRotation', 'showTop', 'showRight', 'showBottom', 'showLeft'];
    windControls.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', updateWindSpeedChart);
        }
    });
    
    // 三角函数图表控件
    const trigControls = ['xRange', 'tickFormat', 'spinePosition', 'showGrid'];
    trigControls.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', updateTrigonometricChart);
        }
    });
    
    // 自定义图表控件
    const customControls = ['chartType', 'dataPoints', 'themeColor', 'enableAnimation', 'enableInteraction'];
    customControls.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('change', updateCustomChart);
        }
    });
    
    console.log('👂 事件监听器已设置');
}

// 全局函数暴露
window.chapter6Charts = {
    init: initChapter6Charts,
    updateWindSpeed: updateWindSpeedChart,
    updateTrigonometric: updateTrigonometricChart,
    updateCustom: updateCustomChart,
    export: exportChart,
    randomize: randomizeChartData,
    reset: resetCustomization,
    charts: charts,
    theme: blueGreenTheme,
    data: chapter6Data
};

// 自动初始化
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChapter6Charts);
} else {
    initChapter6Charts();
}