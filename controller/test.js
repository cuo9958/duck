/**
 * 测试路由
 */
const Duck = require("../index");
const Controller=new Duck.Controller("/");

Controller.get("", function (ctx) {
    ctx.body = "test";
})
Controller.get("test", function (ctx) {
    ctx.body = "t1est";
})
module.exports = Controller;