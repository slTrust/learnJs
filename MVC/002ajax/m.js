function json2str(json){
	json.t = Math.random();
	var arr = [];
	for(var name in json){
		arr.push(name+'='+json[name]);
	}
	return arr.join('&');
}
// url,data,type,success,error
function ajax(json){
	json = json || {};
	if(!json.url){
		alert('用法不符合规范');
		return;
	}
	json.data = json.data || {};
	json.type = json.type || 'GET';

	// 1、创建ajax对象
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}

	switch(json.type.toUpperCase()){
		case 'GET':
			oAjax.open('GET',json.url+'?'+json2str(json.data),true);
			oAjax.send();
			break;
		case 'POST':
			oAjax.open('POST',json.url,true);
			oAjax.setRequestHeader('Content-type','application/x-www-form-urlencoded');
			oAjax.send(json2str(json.data));
			break;
	}

	// 4、等待接收
	oAjax.onreadystatechange = function(){
		if(oAjax.readyState == 4){
			if(oAjax.status>=200 && oAjax.status<300 || oAjax.status == 304){
				json.success && json.success(oAjax.responseText);
			}else{
				json.error && json.error(oAjax.status);
			}
		}
	}
}

function data(fn){
	ajax({
		url:'./1.txt',
		success:function(str){
			fn && fn(str);
		}
	});
}