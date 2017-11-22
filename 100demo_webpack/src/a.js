const $ = require('jquery');
const Highcharts = require('highcharts');

// 在 Highcharts 加载之后加载功能模块
require('highcharts/modules/exporting')(Highcharts);

$(function() {
	console.log(1)
})