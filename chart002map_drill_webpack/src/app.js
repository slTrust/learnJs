import {chinaData as chinaData,provinceData as provinceData} from './data.js';

import '../node_modules/echarts/map/js/china.js';
import '../node_modules/echarts/map/js/province/shanghai.js';
import '../node_modules/echarts/map/js/province/neimenggu.js';
import '../node_modules/echarts/map/js/province/taiwan.js';
import '../node_modules/echarts/map/js/province/xianggang.js';
import '../node_modules/echarts/map/js/province/aomen.js';
import '../node_modules/echarts/map/js/province/chongqing.js';
import '../node_modules/echarts/map/js/province/tianjin.js';
import '../node_modules/echarts/map/js/province/xinjiang.js';
import '../node_modules/echarts/map/js/province/beijing.js';
import '../node_modules/echarts/map/js/province/ningxia.js';
import '../node_modules/echarts/map/js/province/qinghai.js';
import '../node_modules/echarts/map/js/province/gansu.js';
import '../node_modules/echarts/map/js/province/guangxi.js';
import '../node_modules/echarts/map/js/province/hainan.js';
import '../node_modules/echarts/map/js/province/sichuan.js';
import '../node_modules/echarts/map/js/province/guizhou.js';
import '../node_modules/echarts/map/js/province/yunnan.js';
import '../node_modules/echarts/map/js/province/xizang.js';
import '../node_modules/echarts/map/js/province/shanxi1.js';
import '../node_modules/echarts/map/js/province/guangdong.js';
import '../node_modules/echarts/map/js/province/hunan.js';
import '../node_modules/echarts/map/js/province/hubei.js';
import '../node_modules/echarts/map/js/province/henan.js';
import '../node_modules/echarts/map/js/province/shandong.js';
import '../node_modules/echarts/map/js/province/jiangxi.js';
import '../node_modules/echarts/map/js/province/fujian.js';
import '../node_modules/echarts/map/js/province/liaoning.js';
import '../node_modules/echarts/map/js/province/jilin.js';
import '../node_modules/echarts/map/js/province/heilongjiang.js';
import '../node_modules/echarts/map/js/province/jiangsu.js';
import '../node_modules/echarts/map/js/province/zhejiang.js';
import '../node_modules/echarts/map/js/province/anhui.js';
import '../node_modules/echarts/map/js/province/shanxi.js';
import '../node_modules/echarts/map/js/province/hebei.js';

var echarts = require('echarts');


/*
 * 全局地图对象，用以坐标定位 
 * 这个没法一起打包因为他是百度借口的必须走https协议
 */
var mapObj = new BMap.Map("oBox");
//搜索模块的api对象
var localSearch = new BMap.LocalSearch(mapObj);
/*
 * baidumapAPI 在省级地图中 根据市、区名称，获取该地区中心点的经纬度
 */
function searchByStationName(cityName,fnCallBack) {
	var res=[];
	localSearch.setSearchCompleteCallback(function (searchResult) {
		var poi = searchResult.getPoi(0);
		res[0]=poi.point.lng;
		res[1]=poi.point.lat;
		fnCallBack&&fnCallBack(res);
	});
	localSearch.search(cityName);
}
//省地图点击的城市
var currentCity ='';
//判断两次点击是否是同一个城市的标量
var isSameCity = true;
var currentCity ='';

var COLOR_YELLOW 	= "#FF0";
var COLOR_RED 		= "#F00";
var COLOR_BG 		= "#fff";	// 灰色
var COLOR_MAP_BORDER = "#FFF";	// 白色
var COLOR_SYMBOL	= "#F90";	// 橙色

window.onload = function(){
    initChinaMap(chinaData);
}


function initChinaMap(chinaData){
	
	var oContainer=document.getElementById('box');
	oContainer.innerHTML='';
	var oDiv=document.createElement('div');
    oDiv.style.width=oContainer.offsetWidth+'px';
    oDiv.style.height=oContainer.offsetHeight+'px';
    oDiv.style.position='absolute';
    oDiv.style.top='0px';
    oDiv.style.left='0px';
    oDiv.setAttribute('id','SuperChart');
    oContainer.appendChild(oDiv);
	// 基于准备好的dom，初始化echarts实例
	var mapChina = echarts.init(document.getElementById('SuperChart'));
	var option = {
			
	        tooltip: {
	            trigger: 'item',
	            formatter: function (params, ticket, callback) {
	            	var count = isNaN(params.value)?0:params.value;
	            	return params.data.name + "<br/>" + params.seriesName + ":" + count;
	          
	            }
	        },
	        legend: {
	            orient: 'vertical',
	            left: 'left',
	            data: ['牧场']
	        },
	        toolbox: {
	            show: false,
	            orient: 'vertical',
	            left: 'right',
	            top: 'center',
	            feature: {
	            dataView: {
	                readOnly: false
	            },
	            restore: {},
	            saveAsImage: {}
	        }
		},
	series: [{
	        name: '牧场数',  //qi
	        type: 'map',
	        mapType: 'china',
	        roam: false,
	        itemStyle: {
	            normal: {
	            	color:'rgba(255,255,255,0)',
	            	areaColor: '#dfdfdf',
	                borderColor: '#fff',
	                borderWidth:2
	            }
	        },
	        label: {
				//默认样式
	            normal: {
	                show: false,
	                fontSize:22
	                
				},
				//划过样式
	            emphasis: {
	                show: false,
	                fontSize:22
	            }
	        },
	        data: chinaData
	    }],
	       dataRange: {
	            splitList:[ 
	                       { start : 0 , end : 5 , label : '5家牧场以下' , color : '#85d1c1' },
	        			   { start : 1 , end : 20 , label : '6-20家牧场',	color: '#1ab395'},
	        			   { start : 21, end : 1000 ,	label : '20家牧场以上',  	color:'#148f74' },
	        			  ]
	        }//各省地图颜色；start：值域开始值；end：值域结束值；label：图例名称；color：自定义颜色值；
	};
    // 使用刚指定的配置项和数据显示图表。
	mapChina.setOption(option);
	mapChina.on('click', function(params) {
	     var city = params.name;
	    // //是否下钻的标量
	    var drillFlg=findInJsonArr(city,'name',chinaData);
	    if(drillFlg){
	    	showCity(city);
	    }
	   
	});
}


function showCity(city) {
	
	if(city=='南海诸岛') return;
	var mapProvince;
    var oContainer=document.getElementById('SuperChart');
	var oDiv=document.createElement('div');
    oDiv.style.width=oContainer.style.width;	
    oDiv.style.height=oContainer.style.height;
    oDiv.style.position='absolute';
    oDiv.style.top='0px';
    oDiv.style.left='0px';
    oDiv.setAttribute('id','chart');
    oContainer.appendChild(oDiv);
 	
     mapProvince = echarts.init(document.getElementById('chart'));	
     mapProvince.setOption( {
        backgroundColor: COLOR_BG,
        //自定义按钮
         toolbox: {  
            show : true,  
            orient: 'horizontal',
            left:'right',
            top:'top',
            itemSize:40,//工具栏 icon 的大小。
            itemGap:20,//工具栏 icon 每项之间的间隔
            feature : {  
                dataView : {show: false, readOnly: false},  
                magicType : {show: false, type: ['line', 'bar']},  
                restore : {show: false},  
	            myTool : {  
					show : true,  
                    title : '中国地图', 
                    icon : 'image://./img/icon_back.png',  
                    onclick : function (){  
                    	mapObj.tempCenter=[];
                        oContainer.removeChild(document.getElementById('chart'));
                    }  
	            },  
				myTool2 : {
                    show : true,  
                    title : '原始大小',  
                    icon : 'image://./img/icon_ref.png',  
					onclick : function (){  
          				if(mapObj.tempCenter&&mapObj.tempCenter.length==2){
							mapProvince.setOption({
						        geo: 
						        {
						            center:mapObj.tempCenter,//经纬度
						            zoom: 1,
						            animationDurationUpdate: 500,
						            animationEasingUpdate: 'cubicInOut'
						        },
		
					        	series: [
						        {
						            center: mapObj.tempCenter,//经纬度
						            zoom: 1,
						            animationDurationUpdate: 500,
						            animationEasingUpdate: 'cubicInOut'
						        }
								]
							});
						}
					}  
				},  
				saveAsImage : {show: false}  
            }  
        },
        //经纬度
		geo: {
			map:city,
			roam: true, //允许拖动
			label: {
			    normal: {
			        show: false,
			        // 区县字色
			        textStyle: {
			            color: 'rgba(255,255,255,0.6)'
			        }
			    },
			    emphasis: {
			        // 区县字色
			        textStyle: {
			            color: 'rgba(255,255,255,0.6)'
			        }
	            }
			},
	        itemStyle: {
	            normal: {
	            	color: '#000',
	            	areaColor: '#1ab395',  //区域颜色
	                borderColor: '#c2c2c2'
	            },
	            emphasis: {
	     	        areaColor: '#996',	//划过区域颜色
					color:'#000', //
	                shadowColor: 'rgba(0, 0, 0, 0.5)'
	            }
	        }
        },
        //设置气泡
        tooltip : {
            trigger: 'item',
            formatter: function (params) {
            	return params.name;
            }
        },
        series: [
                  {
                   name: '牧场',
                   type: 'scatter',
                   roam: false, //允许拖动
                   coordinateSystem: 'geo',
                   data:provinceData[city].farms,
                   symbolSize: 10,
                   symbolRotate:0,//角度
                  // symbol: 'pin',//
                   markArea:{
                	   itemStyle:{
                		   normal:{
                			   color:'#000'
                		   }
                	   }
                   },
//                 symbol: 'image://../images/company.png',//自定义图片
                   label: {
                       normal: {
                           formatter: '{b}',
                           position: 'right',
                           show: true,
                           textStyle:{
                        	   color:COLOR_YELLOW,
                        	   fontSize:14
                           }
                       },
                       emphasis: {
                           show: true,
                           textStyle:{
                        	   color:COLOR_YELLOW,
                        	   fontSize:32,
                    //    	   fontFamily:"仿宋",
                        	   //fontStyle:"oblique",
                        	   fontWeight:"bolder"
                           }
                       }
                   },  
                   itemStyle: {
                       normal: {
                    	  color:'#ed5565',
                          //color:COLOR_SYMBOL,
                          fontSize:22
                       }
                   }
                }]
    });
	function posInit(res){
		//获取当前地图的缩放值
		var currentZoom = mapProvince.getOption('geo').geo[0].zoom;
	 	//不同城市
		if(!isSameCity){
	 		//如果当前的缩放值大于3则点击不同城市也以此缩放比例   反之则使用默认比例3
	 		var zoom = currentZoom>3?currentZoom:3;
			mapObj.tempCenter=res;
			mapProvince.setOption({
		        geo: 
		        {
		            center: mapObj.tempCenter,//经纬度
		            roam: true,
		            zoom:zoom,
		            animationDurationUpdate: 500,
		            animationEasingUpdate: 'cubicInOut'
		        },
		
		        series: [{
			        	center: mapObj.tempCenter,
			        	roam: true,
			        	zoom:zoom,
			            animationDurationUpdate: 500,
			            animationEasingUpdate: 'cubicInOut'
		        	}
		        ]
		    });
		}else if(isSameCity){ //相同城市    如果已经缩放了  而且大于1就不处理   反之设置缩放值为3
			if(currentZoom>1) return;
			mapObj.tempCenter=res;
			mapProvince.setOption({
		        geo: 
		        {
		            center: mapObj.tempCenter,//经纬度
		            zoom: 3,
		            roam: true,
		            animationDurationUpdate: 500,
		            animationEasingUpdate: 'cubicInOut'
		        },
		
		        series: [{
			        	center: mapObj.tempCenter,
			        	zoom: 3,
			        	roam: true,
			            animationDurationUpdate: 500,
			            animationEasingUpdate: 'cubicInOut'
		        	}
		        ]
		    });
		 }
		
	}

    mapProvince.on('click', function(params) {
        var city = params.name;
        //点击数据点  缩放
        if(params.componentSubType==='scatter'){
        	// 根据经纬度
        	if(params.data.value.length == 2){
                alert('替换为你想要载入的牧场页面')
                //window.location.href = base_path + "/farmInfo/farmInfo.h?mid=80&farmId=" + params.data.farmId;
	        }
	    } else if(params.componentType=='geo'&&params.name) {
	    	//如果是省份就把省份的地名当作中心点
	    	var cityName=params.name;
	    	if(currentCity == ''){
	    		currentCity = params.name;
	    	}else{
	    		isSameCity = true;
				if(currentCity == params.name){
	    			isSameCity = true;
	    		}else{
		//搜索模块的api对象
					isSameCity = false;
	    		}
	    		currentCity =params.name;
	    	}
	    	searchByStationName(cityName,posInit);
	    }
    });
}

//从  json数组里  寻找  key属性  如果存在并判断其value
function findInJsonArr(cityName,key,jsonArr){
	if(jsonArr.length==0) return ;
	var flag = false;
	var len = jsonArr.length;
	for(var i=0;i<len;i++){
		if(jsonArr[i][key]==cityName&&jsonArr[i][key]!=0){
			flag = true;
		}
	}
	return flag;
}