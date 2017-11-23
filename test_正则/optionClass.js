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


function getByClass2(oParent,cName){
	if(oParent.getElementsByClassName(cName)){
		return oParent.getElementsByClassName(cName);
	}else{
		var aEle = oParent.getElementsByTagName('*');
		var len = aEle.length;
		var reg = new RegExp('\\b'+cName+'\\b');
		var resEle = [];
		for(var i=0;j<len;i++){
			var classNameStr = aEle[i].className;
			if(reg.test(classNameStr)){
				resEle.push(aEle[i]);
			}
		}
		return resEle;
	}
}

function hasClass2(obj,sName){
	var classNameStr = obj.className;
	var reg = new RegExp('\\b'+sName+'\\b');
	if(reg.test(classNameStr)){
		return true;
	}
	return false;
}

function addClass2(obj,sName){
	if(obj.className){
		if(!hasClass2(obj,sName)){
			obj.className += '  '+sName;
		}
	}else{
		obj.className = sName;
	}
	//去除多余的空格
	obj.className = obj.className.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
}

function removeClass2(obj,sName){
	if(hasClass2(obj,sName)){
		var reg = new RegExp('\b'+sName+'\b');
		obj.className = obj.className.replace(reg,'');	
	}
	obj.className = obj.className.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
}