function getByClass(oParent,sClass){
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{
		var aEle = oParent.getElementsByTagName('*');
		
		var reg = new RegExp('\\b'+sClass+'\\b');

		var arr = [];
		for(var i=0; i<aEle.length; i++){
			if(reg.test(aEle[i].className)){
				arr.push(aEle[i]);
			}
		}
		return arr;
	}
}
function hasClass(obj,sClass){
	var str = obj.className;
	var reg = new RegExp('\\b'+sClass+'\\b');
	if(reg.test(str)){
		return true;
	}else{
		return false;
	}
}

function addClass(obj,sClass){
	if(obj.className){
		if(!hasClass(obj,sClass)){
			obj.className+=' '+sClass;
		}
	}else{
		obj.className = sClass;
	}

	obj.className = obj.className.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
}

function removeClass(obj,sClass){
	if(hasClass(obj,sClass)){
		var reg = new RegExp('\\b'+sClass+'\\b');
		obj.className = obj.className.replace(reg,'');
	}
	obj.className = obj.className.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
}


