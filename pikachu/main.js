!function(){
    function writeCode(prifix,code,fn){
        let container = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
        let id = setInterval(()=>{
            n+=1;
            container.innerHTML = code.substring(0,n);
            // 让code每次滚动最下边
            container.scrollTop = container.scrollHeight;
            styleTag.innerHTML = code.substring(0,n);
            if(n >= code.length){
                window.clearInterval(id);
                fn&&fn.call();
            }
        },10)
    }

let code =
`/*
 * 首先，需要准备皮卡丘的皮肤
 */
.preview{
    height: 100%;
    border:1px solid green;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FEE433;
}
.wrapper{
    width:100%;
    height:165px;
    position: relative;
}
/*
 * 接下来，画皮卡丘的鼻子
 */
.nose{
    width:0px;
    height:0px;
    border-style:solid;
    border-color:black transparent transparent transparent;
    border-width: 12px;
    border-radius: 11px;
    position: absolute;
    left:50%;
    top:28px;
    margin-left:-12px;
}
/*
 * 接下来，画皮卡丘的眼睛
 */
.eye{
    width:49px;
    height: 49px;
    background: #2e2e2e;
    position: absolute;
    border-radius: 50%;
    border:2px solid #000;
}
/*
 * 眼睛里面的眼球
 */
.eye::before{
    display: block;
    content:'';
    height: 24px;
    width: 24px;
    position: absolute;
    background: white;
    border-radius: 50%;
    left:6px;
    top:-1px;
    border:2px solid #000;
}
/*
 * 左眼在左边
 */
.eye.left{
    right:50%;
    margin-right:90px;
}
/*
 * 右眼在右边
 */
.eye.right{
    left:50%;
    margin-left:90px;
}
/*
 * 接下来，画皮卡丘的脸颊
 */
.face{
    width:68px;
    height: 68px;
    background: #FC0D1C;
    border:2px solid black;
    border-radius: 50%;
    position: absolute;
    top:85px;
} 
/*
 * 将皮卡丘的脸颊放到正确的位置 
 */
.face.left{
    right:50%;
    margin-right:116px;
}
.face.right{
    left:50%;
    margin-left:116px;
}
/*
 * 接下来，画皮卡丘的上嘴唇
 */
.upperLip{
    height: 25px;
    width: 80px;
    border:2px solid black;
    position: absolute;
    top:50px;
    /* 这里的背景色用来覆盖下嘴唇 */
    background: #FEE433;
}
.upperLip.left{
    right:50%;
    border-bottom-left-radius: 40px 25px;
    border-top:none;
    border-right:none;
    transform: rotate(-20deg);
}
.upperLip.right{
    left:50%;
    border-bottom-right-radius: 40px 25px;
    border-top:none;
    border-left:none;
    transform: rotate(20deg);
}
/*
 * 接下来，画皮卡丘的下嘴唇
 */
.lowerLip-wrapper{
    position: absolute;
    bottom:0; 
    left:50%;
    margin-left: -150px;
    height: 104px;
    width: 300px;
    overflow: hidden;
}
.lowerLip{
    height: 3500px;
    width: 300px;
    background: #990513;
    border-radius: 200px/2000px;
    border:2px solid #000;
    position: absolute;
    bottom:0;  
    overflow: hidden;          
}
/*
 * 小舌头
 */
.lowerLip::after{
    content:'';
    position: absolute;
    bottom:-20px;
    width:100px;
    height: 100px;
    background: #FC4A62;
    left:50%;
    margin-left: -50px;
    border-radius: 50%;
}`;
    writeCode('',code)
}.call()