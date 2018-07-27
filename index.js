const app = require("./lib/index");
const config = require("config");
//加载工具集
const utils = require("./lib/utils");
//加载logger
const logger = require("./lib/logger");
//定时器初始化类
const Schedule = require("./lib/schedule");
//控制器基类
const Controller = require("./lib/controller");

module.exports = {
    /**
     * 全局对象
     */
    app: app,
    /**
     * 配置
     */
    config: function (name) {
        if (name) return config.get(name);
        return config;
    },
    /**
     * 工具集
     */
    utils: utils,
    /**
     * 日志类
     */
    Logger: logger,
    /**
     * 定时类
     */
    Schedule: Schedule,
    /**
     * 路由类
     */
    Controller: Controller,
}