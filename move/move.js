function getStyle(obj,name){
    return (obj.currentStyle||getComputedStyle(obj,false))[name];
}
/*
ele==>运动的元素
json==> 改变的样式与目标值  {width:100,height:200}
option==>{
    duration==>总时间
    easing==>运动风格  匀速 加速 减速
    complete==>回调函数
}
*/
function move(ele,json,options){
    clearInterval(ele.timer);
    //起点
    var start = {};
    var dis = {};
    for(var name in json){
        start[name] = parseFloat(getStyle(ele,name));
         //实际距离 = 目标值 - 起始值
        dis[name] = json[name] - start[name];
    }
    //可选配置  不传就用默认值
    var options = options||{};
    //总时间 duration
    options.duration = options.duration||700; //设置默认值 没传递的时候
    //加速or减速or匀速
    options.easing = options.easing||'linear'; //不传递就是匀速
    //执行次数  =  总时间/30帧
    var count = Math.floor(options.duration/30);
   
    //计数器
    var n =0;

    ele.timer = setInterval(function(){
        n++;
        for(var name in json){
            switch(options.easing){
                case 'linear':
                    var a = n/count;
                    var cur =start[name]+dis[name]*a;
                    break;
                case 'ease-in':
                    var a = n/count;
                    var cur =start[name]+dis[name]*(a*a*a);
                    break;
                case 'ease-out':
                    var a = 1 - n/count;
                    var cur =start[name]+dis[name]*(1-a*a*a);
                    break;
            }
          
            if(name==='opacity'){
                ele.style[name] = cur;
            }else{
                ele.style[name] = cur +"px";
            }
        }
       
        if(n==count){
            clearInterval(ele.timer);
            //达到目标值后  的运动
            options.complete&&options.complete();
        }

    },30)
    return ele;
}