//下载第三方库 prism 让指定的字符串高亮的库   google  prism
var result =`/* 
 *面试官您好，我是xxx
 *我将以动画的形式来介绍我自己
 *只用文字介绍太单调了
 *我就用代码来介绍吧
 *首先准备一些样式
 */
*{
    transition:all 1s;
}
html{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    border:1px solid red;
    padding:16px;
}

/* 我需要一点代码高亮  */

.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}

/*  加点 3D 效果  */
#code{
    transform:rotate(360deg);
}

/*  不玩了，我来介绍下自己吧  */
/*  我需要一张白纸  */
`;
var n = 0;
var timer = setInterval(function(){

    n++;
    //替换成pre标签
    code.innerHTML = result.substring(0,n);
    // code.innerHTML = code.innerHTML.replace('html','<span style="color:red;">html</span>');
    
    //step01复制  prism里的示例代码
    var html = Prism.highlight(code.innerHTML, Prism.languages.css);
    code.innerHTML = html;
    styleTag.innerHTML = result.substring(0,n);
    console.log('一轮')
    if(n>=result.length){
        clearInterval(timer);

        //step02 等上面的部分结束  然后添加白纸 paper
        fn2();
        //step03 让paper 有一些样式
        fn3(result);
    }
},10)

function fn2(){
    var paper = document.createElement('div');
    paper.id = 'paper';
    document.body.appendChild(paper);
}

function fn3(preResult){
var result =`
#paper{
    width:100px;
    height:100px;
    background:red;
}
`;
var n = 0;
var id = setInterval(function(){
    n++;
    code.innerHTML = preResult + result.replace(0,n);   
    var html = Prism.highlight(code.innerHTML, Prism.languages.css);
    code.innerHTML = html; 
    //添加到样式里
    styleTag.innerHTML = preResult + result.substring(0,n);
    if(n>=result.length){
        clearInterval(id);
    }
},10)

}

