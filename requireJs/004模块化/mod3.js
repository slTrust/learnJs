define(function(require,exports,module){
	var mod2 = require('mod2');

	exports.show = function(){
		var oBtn = document.getElementById('btn');
		oBtn.onclick = function(){
			mod2.show();
		}
	}
})