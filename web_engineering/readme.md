#前端工程化
一个脚手架工具

#main functionalities
-npm scripts [dev product deploy]  开发环境  生产环境  发布环境

#选形 es6/es5都可以适配 
-babel[ES6/ES5]
-webpack[图片、css、js等处理]
-jest 单元测试
-vue react 
#file 文件目录如何组织

|-src
|-|-app
|-|-components  
|-|-global
|-|-|-reset.css




### npm run babel  将src/app目录的es6/es5语法 拷贝到  dist目录下都兼容的文件 
 "babel":"babel src/app -d dist",

###安装webpack  cnpm install webpack --save-dev
新建webpack目录  cd webpack目录  新建三个


###process.cwd()  nodeJs的启动目录

###module 模块  每个模块是一个json格式

### cnpm i --save-dev  extract-text-webpack-plugin