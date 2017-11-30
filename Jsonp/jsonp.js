function jsonToStr(json){
    var arr = [];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    var str = arr.join('&');
    return str;
}
//url,data,cbName,success
function jsonp(json){
    json = json||{};
    if(!json.url){
        alert('你得告诉我你跨域的接口吧！')
        return ;
    }
    json.data = json.data||{};
    json.cbName = json.cbName||'cb';

    //每次都生产新的函数名
    var fnName = 'show'+Math.random();
    fnName = fnName.replace('.','');
    json.data[json.cbName] = fnName;
    window[fnName] = function(res){
        json.success&&json.success(res);
        //成功之后删除创建的script标签
        oH.removeChild(oS);
    }
    var oS = document.createElement('script');
    oS.src = json.url+'?'+jsonToStr(json.data);
    var oH = document.getElementsByTagName('head')[0];
    oH.appendChild(oS);
}