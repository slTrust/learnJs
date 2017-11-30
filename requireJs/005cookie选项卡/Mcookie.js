define(function(require,exports,module){
	// setCookie
	exports.setCookie = function(name,value,iDay){
		if(iDay){
			var oDate = new Date();
			oDate.setDate(oDate.getDate()+iDay);
			document.cookie = name+'='+value+';path=/;expires='+oDate;
		}else{
			document.cookie = name+'='+value+';path=/';
		}
	}

	// getCookie
	exports.getCookie = function(name){
		var arr = document.cookie.split('; ');
		for(var i=0; i<arr.length; i++){
			var tmp = arr[i].split('=');
			if(tmp[0] == name){
				return tmp[1];
			}
		}
	}

	// removeCookie
	exports.removeCookie = function(name){
		setCookie(name,'',-1);
	}
})