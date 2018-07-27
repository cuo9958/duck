const Router = require("koa-router");
/**
 * 基类
 */
module.exports = class {

    constructor(){}
    _run(){
        for (const key in this) {
            console.log(key)
        }
    }
}