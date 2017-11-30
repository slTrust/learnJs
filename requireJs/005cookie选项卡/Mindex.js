define(function(require,exports,module){
	var mod1 = require('Mcookie');
	var mod2 = require('McookieTab');

	exports.show = function(){
		var aInput = document.getElementsByTagName('input');
		var aDiv = document.getElementsByTagName('div');

		// 应用cookie
		var index = mod1.getCookie('index');
		if(index){
			mod2.tab(index);
		}

		for(var i=0; i<aInput.length; i++){
			aInput[i].index = i;
			aInput[i].onclick = function(){
				mod2.tab(this.index);

				// 设置cookie
				mod1.setCookie('index',this.index,10);
			}
		}
	}
})