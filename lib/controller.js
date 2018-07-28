const Router = require("koa-router");
/**
 * 基类
 */
module.exports = function (prefix) {
    let opts = {};
    if (prefix) opts.prefix = prefix;
    return new Router(opts);
}