'use strict'
const $ = require('jquery');
const Highcharts = require('highcharts');

// 在 Highcharts 加载之后加载功能模块
require('highcharts/modules/exporting')(Highcharts);

$(function() {
    // 创建图表
    console.log($('#box')[0])
    Highcharts.chart($('#box')[0],{
        chart: {
            type: 'column'
        },
        title: {
            text: '按性别划分的水果消费总量'
        },
        xAxis: {
            categories: ['苹果', '橘子', '梨', '葡萄', '香蕉']
        },
        yAxis: {
            allowDecimals: false,
            min: 0,
            title: {
                text: '水果数量'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '小张',
            data: [5, 3, 4, 7, 2],
            stack: 'male'
        }, {
            name: '小潘',
            data: [3, 4, 4, 2, 5],
            stack: 'male'
        }, {
            name: '小彭',
            data: [2, 5, 6, 2, 1],
            stack: 'female'
        }, {
            name: '小王',
            data: [3, 0, 4, 4, 3],
            stack: 'female'
        }]
    });
    alert(1)
})