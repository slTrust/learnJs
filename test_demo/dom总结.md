# DOM：
## 父子：

> 结构父级:	obj.parentNode
> 定位父级：	obj.offsetParent
> 子级：		父级.children

## 兄弟级：

> 上一个：	obj.previousElementSibling || obj.previousSibling
> 下一个：	obj.nextElementSibling || obj.nextSibling

## 首尾节点：

> 首节点： 	父级.firstElementChild || 父级.firstChild
> 尾节点：	父级.lastElementChild || lastChild

## 创建元素：	document.createElement(元素)

## 添加元素： - 剪切功能

> 后面：	父级.appendChild
> 前面:	父级.insertBefore(元素,添加到谁前面)

## 删除元素：	父级.removeChild(元素)

## 克隆元素	obj.cloneNode(是否深度克隆)

---------------------------------------------
# BOM：

## 浏览器信息	UA

> window.navigator.userAgent

## 打开一个新窗口：

> window.open('地址','打开方式')

## 关闭一个窗口：

> window.close()

## 获取地址栏信息：window.location

> 网址：		window.location.href
> ?号后面		window.location.search
> #号后面		window.location.hash

## 历史路径	window.history

> 前进	window.history.forward()
> 后退	window.history.back()
> 跳转	window.history.go(某一个)

## 信息

### 滚动条距离

> 距上	document.documentElement.scrollTop || document.body.scrollTop
> 距左	document.documentElement.scrollLeft || document.body.scrollLeft

## 可视区

> 宽度	document.documentElement.clientWidth
> 高度	document.documentElement.clientHeight

## 物体

> 宽度		obj.offsetWidth
> 高度		obj.offsetHeight
> 距左		obj.offsetLeft
> 距上		obj.offsetTop
> 绝对距离	getPos(obj).left | getPos(obj).top 	自己封装的
> 内容的高    obj.scrollHeight
> 盒模型的高  obj.offsetHeight

## 属性

> 获取属性	getAttribute(属性名)
> 设置属性	setAttribute(属性名,属性值)
> 删除属性	removeAttribute(属性名)

## 内容高度：

> scrollHeight

## 事件

> 页面加载完毕	window.onload
> 滚动条滚动		window.onscroll
> 页面放大缩小	window.onresize
> 点击鼠标左键	obj.onclick
> 点击鼠标右键	obj.oncontextmenu
> 鼠标经过		obj.onmouseover | onmouseenter
> 鼠标离开		obj.onmouseout | onmouseleave
> 鼠标移动		obj.onmousemove
> 鼠标按下		obj.onmousedown
> 鼠标抬起		obj.onmouseup
> 键盘按下		obj.onkeydown
> 键盘抬起		obj.onkeyup
> 失去焦点改变	obj.onchange
> 获取焦点		obj.onfocus
> 失去焦点		obj.onblur
> 强制获得焦点	obj.focus()
> 强制失去焦点	obj.blur()
> 图片加载成功	oImg.onload
> 图片加载失败	oImg.onerror

## IE事件捕获		obj.setCapture()|obj.releaseCapture()

> 事件绑定		obj.addEventListener(事件名,函数,false) | obj.attachEvent(事件名,函数名)
>                 addEvent(obj,sEv,fn) - 自己封装的
> 事件解绑定		obj.removeEventlistener(事件名,函数,false) | obj.detachEvent(事件名,函数)
>                 removeEvent(obj,sEv,fn) - 自己封装的
> 事件冒泡：事件子级到父级的一个过程
> 事件下沉：事件父级到子级的一个过程 - 事件绑定中的false
> 滚轮事件		obj.onmousewheel | DOMMouseScroll
> 文本输入框实施统计	obj.oninput | oT.onpropertychange
> 事件委托：把子级的事儿给父级干
>     对应事件源的名字 - 大写 	target.tagName
> 判断某个元素是否在某个元素里面
>     父级.contains(元素)

### 事件对象	var oEvent = ev || event;

> 获取点击位置距离页面左边	oEvent.clientX
> 获取点击位置距离页面上边	oEvent.clientY
> 阻止事件冒泡				oEvent.cancelBubble = true
> 获取键码					oEvent.keyCode
> 组合键						oEvent.ctrlKey|oEvent.shiftKey|oEvent.altKey
> 滚轮滚动方向				oEvent.wheelDelta | oEvent.detail
> 阻止事件绑定中的默认事件 	oEvent.preventDefault()
> 事件源						oEvent.target | oEvent.srcElement
> 鼠标从哪儿移入				oEvent.fromElement | oEvent.relatedTarget
> 鼠标移出到哪儿了			oEvent.toElement | oEvent.relatedTarget

### domReady	DOMContentLoaded | onreadystatechange

>    加载情况	readyState = 'complete'	
>    处理兼容	domReady(function(){}) - 封装