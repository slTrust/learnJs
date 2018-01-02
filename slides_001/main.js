let n,stateStr;
init();
setInterval(()=>{
  setState(getImage(n),'leave').one('transitionend',(e)=>{
      setState($(e.currentTarget),'enter');
  })
  setState(getImage(n+1),'current');
  n += 1
},3000)

function reviseVal(n){
    n>3?n=n%3:n;
    n===0?n=3:n;
    return n;
}
function getImage(n){
    return $(`.images > img:nth-child(${reviseVal(n)})`)
}
function init(){
    n = 1; 
    stateStr = 'leave  enter  current';   
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter');
}
function setState($node,state){
    return $node.removeClass(stateStr.replace(new RegExp("\\b"+state+"\\b"),"")).addClass(state);
}