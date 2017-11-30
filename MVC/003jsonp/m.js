function jsonToStr(json){
	var arr = [];
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	var str = arr.join('&');
	return str;
}
// url,data,cbName,success
function jsonp(json){
	json = json || {};
	if(!json.url){
		alert('用法不符合规范');
		return;
	}
	json.data = json.data || {};
	json.cbName = json.cbName || 'cb';

	var fnName = 'show'+Math.random();
	fnName = fnName.replace('.','');
	window[fnName] = function(json2){
		json.success && json.success(json2);
		oH.removeChild(oS);
	}
	// 创建script标签
	var oS = document.createElement('script');
	json.data[json.cbName] = fnName;
	oS.src=json.url+'?'+jsonToStr(json.data);
	var oH = document.getElementsByTagName('head')[0];
	oH.appendChild(oS);
}
function data(value,fn){
	jsonp({
		url:'https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',
		data:{
			wd:value
		},
		success:function(json){
			fn && fn(json.s);
		}
	});
}