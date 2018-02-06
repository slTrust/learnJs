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
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:#ddd;
    display:flex;
    justify-content:center;
    padding:0px;
    align-items:center;
}
#paper > .content{
    height:100%;
    width:100%;
    background:white;
}
`;

var result2 =`
#paper{
    padding:16px;
}
`;

var md = `
# 标题1

> 这是我的简历

### 你好！
`;

//异步与回调
writeCode('',result,()=>{
    createPaper(()=>{
        console.log('paper有了');
        writeCode(result,result2,()=>{
            writeMarkDown(md);
        })
    });
});
// createPaper() 这里 createPaper不会等 writeCode执行完在执行

function createPaper(fn){
    var paper = document.createElement('div');
    paper.id = 'paper';
    var content = document.createElement('pre');
    content.className = 'content';
    paper.appendChild(content);
    document.body.appendChild(paper);
    fn.call();
}

function writeMarkDown(markdown,fn){
let domPaper = document.querySelector('#paper>.content');
var n = 0;
var id = setInterval(function(){
    n++;
    var html =  markdown.substring(0,n);
    domPaper.innerHTML = html; 
    domPaper.scrollTop = domPaper.scrollHeight;
    if(n>=markdown.length){
        clearInterval(id);
    }
},10)

}

//将字符串写入到 css和  pre里
function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code');
    let n = 0;
    var id = setInterval(function(){
        n++;
        // domCode.innerHTML = code.substring(0,n);   
        var html = Prism.highlight(prefix+code.substring(0,n), Prism.languages.css);
        domCode.innerHTML = prefix + html; 
        //添加到样式里
        styleTag.innerHTML = prefix + code.substring(0,n);
        //让pre标签里的内容自己滚到最下边
        // domCode.scrollTop = 10000;
        domCode.scrollTop = domCode.scrollHeight;
        if(n>=code.length){
            clearInterval(id);
            fn.call();
        }
    },10)
}

