'use strict';
function Zquery(arg){
    this.elements = [];
    this.str = '';
    switch(typeof arg){
        case 'function':
            
            DomReady(arg);
            
            break;
        
        case 'string':
            if(arg.indexOf('<')!=-1){
                this.str = arg;
            }else{
                this.elements = getEle(arg);
            }
            break;
        default :
            this.elements.push(arg);
            break;
    }
}
//
/*
	DomReady
		DOMContentLoaded	DOM事件(高版本)
		onreadystatechange	
		readyState == 'complete'(当dom加载完成)
*/
//  页面加载
function DomReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',fn,false);
	}else{
		document.onreadystatechange = function(){
			if(document.readyState == 'complete'){
				fn && fn();
			}
		}
	}
}


//选择器
function getByStr(aParent,str){
	var aChild = [];
	for(var i=0; i<aParent.length; i++){
		switch(str.charAt(0)){
			case '#':
				var obj = document.getElementById(str.substring(1));
				aChild.push(obj);
				break;
			case '.':
				var aEle = getByClass(aParent[i],str.substring(1));
				for(var j=0; j<aEle.length; j++){
					aChild.push(aEle[j]);
				}
				break;
			default:
				if(/\w+\.\w+/.test(str)){
					// li.red
					var aStr = str.split('.');
					var aEle = aParent[i].getElementsByTagName(aStr[0]);
					var reg = new RegExp('\\b'+aStr[1]+'\\b');
					for(var j=0; j<aEle.length; j++){
						if(reg.test(aEle[j].className)){
							aChild.push(aEle[j]);
						}
					}
				}else if(/\w+:\w+(\(\d+\))?/.test(str)){
					// li:first  li:last li:eq(2) li:lt(4)
					var aStr = str.split(/:|\(|\)/g);
					var aEle = aParent[i].getElementsByTagName(aStr[0]);
					switch(aStr[1]){
						case 'first':
							aChild.push(aEle[0]);
							break;
						case 'last':
							aChild.push(aEle[aEle.length-1]);
							break;
						case 'even':
							for(var j=0; j<aEle.length; j+=2){
								aChild.push(aEle[j]);
							}
							break;
						case 'odd':
							for(var j=1; j<aEle.length; j+=2){
								aChild.push(aEle[j]);
							}
							break;
						case 'lt':
							for(var j=0; j<aStr[2]; j++){
								aChild.push(aEle[j]);
							}
							break;
						case 'gt':
							for(var j=aStr[2]; j<aEle.length; j++){
								aChild.push(aEle[j]);
							}
							break;
						case 'eq':
							aChild.push(aEle[aStr[2]]);
							break;
					}
				}else if(/\w+\[\w+=\w+\]/.test(str)){
					// input[type=button]
					var aStr = str.split(/\[|=|\]/g);
					var aEle = aParent[i].getElementsByTagName(aStr[0]);
					for(var j=0; j<aEle.length; j++){
						if(aEle[j].getAttribute(aStr[1]) == aStr[2]){
							aChild.push(aEle[j]);
						}
					}
				}else{
					var aEle = aParent[i].getElementsByTagName(str);
					for(var j=0; j<aEle.length; j++){
						aChild.push(aEle[j]);
					}
				}
				break;
		}
	}
	return aChild;
}

function getEle(str){
	var arr = str.replace(/^\s+|\s+$/g,'').split(/\s+/);

	var aParent = [document];
	var aChild = [];

	for(var i=0; i<arr.length; i++){
		aChild = getByStr(aParent,arr[i]);
		aParent = aChild;
	}

	return aChild;
}