function obj2str(obj){
    //避免返回相同结果
    obj.t = Math.random();
    var arr = [];
    for(var name in obj){
        arr.push(name+'='+obj[name]);
    }
    var str = arr.join('&');
    return str;
}
function ajax(paramObj){
    var paramObj = paramObj||{};
    paramObj.type = paramObj.type||'GET';
    paramObj.url = paramObj.url||'';
    paramObj.data = paramObj.data||{};
    if(paramObj.url === ''){ alert('请给我一个url'); return}
    
    let httpRequest = new XMLHttpRequest();

    switch(paramObj.type.toUpperCase()){
        case 'GET':
            httpRequest.open('GET',paramObj.url+'?'+obj2str(paramObj.data),true);
            httpRequest.send();
            break;
        case 'POST':
            httpRequest.open('POST',paramObj.url,true);
            httpRequest.setRequestHeader('Content-type','application/x-www-form-urlencoded');
            httpRequest.send(obj2str(paramObj.data));
            break;
    }

    httpRequest.onreadystatechange = function(){
        if (httpRequest.readyState === 4) {
            if (httpRequest.status >= 200&&httpRequest.status<300||httpRequest.status === 304) {
                paramObj.success&&paramObj.success(httpRequest.responseText);
            } else {
                paramObj.error&&paramObj.error(httpRequest.status);
            }
        }
    }

}
    
//调用
ajax({
    type:"get",
    url:'./1.txt',
    success:function(res){
        console.log(res);
    },
    error:function(err){
        console.log(err);
    }
})
