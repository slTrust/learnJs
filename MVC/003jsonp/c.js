window.onload = function(){
    oT.onkeydown = function(){
        var val = oT.value;
        data(val,function(res){
            console.log(res)
            show(ul1,res);
        });  
    }
}