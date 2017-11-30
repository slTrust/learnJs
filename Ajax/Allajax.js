function json2str(json){
    json.t = Math.random();
    var arr = [];
    for(var name in json){
        arr.push(name+'='+json[name]);
    }
    var str = arr.join('&');
    return str;
}
//提取参数   url,data,type,success,error,time,fnLoading,fnTimter
function ajax(json){
    json = json||{};
    if(!json.url){ return {msg:'啥都没有  你搞啥！'}; }
    
    json.data = json.data||{};
    json.type = json.type||'GET';
    json.time = json.time||3000;

    var httpRequest = null;
    if (window.XMLHttpRequest) { // Mozilla, Safari, IE7+ ...
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) { // IE 6 and older
        httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
    }
    switch(json.type.toUpperCase()){
        case 'GET':
            httpRequest.open('GET',json.url+'?'+json2str(json.data),true);
            httpRequest.send();
            break;
        case 'POST':
            httpRequest.open('POST',json.url,true);
            httpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            httpRequest.send(json2str(json.data));
            break;
    }
    //等待结果时的处理
    json.fnLoading && json.fnLoading();
    
    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === 4) {
            if (httpRequest.status >= 200&&httpRequest.status<300||httpRequest.status === 304) {
                json.success&&json.success(httpRequest.responseText);
            } else {
                json.error&&json.error(httpRequest.status);
            }
        }
        clearTimeout(timer);
    }

    var timer = null;
    timer = setTimeout(function(){
        httpRequest.onreadystatechange = null;
        json.fnTimter && json.fnTimter();
    },json.time)
}    