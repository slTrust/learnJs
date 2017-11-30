define(function(require,exports,module){
	var aInput = document.getElementsByTagName('input');
	var aDiv = document.getElementsByTagName('div');

	exports.tab = function(iNow){
		for(var j=0; j<aInput.length; j++){
			aInput[j].className = '';
			aDiv[j].style.display = 'none';
		}
		aInput[iNow].className = 'on';
		aDiv[iNow].style.display = 'block';
	}
})