const Router = require("koa-router");
/**
 * 基类
 */
module.exports = function (app, controller) {
    let router = new Router();
    let route = controller(router);
    if (route) app.use(route.routes()).use(route.allowedMethods());
}