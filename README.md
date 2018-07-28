# duck
koa2内核的web框架

## 安装

`npm i --save node-duck`

## 文件目录

```javascript
- config //配置文件
    - default.js    //默认配置
    - development.js    //开发环境配置
    - production.js     //生成环境配置
- controller    //控制器
    - index.js  //自定义路由地址
- schedule  //定时任务文件
    - test.js   //自定义定时任务
- app.js    //自定义启动文件
- index.js  //启动文件,引用duck即可
```

## 查看例子

[duck-example](https://github.com/cuo9958/duck-example)

## 定时任务

1. 在根目录下新建`schedule`文件夹
2. 新建任务文件,应用`Schedule`类并初始化自己的任务

```javascript
const Schedule = require("node-duck").Schedule;

class testSchedule extends Schedule {

    constructor() {
        super();
        //设置任务执行间隔
        this.time = "*/1 * * * * *";
    }
    //设置任务执行内容
    start() {
        console.log("执行一次", Date.now());
    }
}
module.exports = testSchedule;
```