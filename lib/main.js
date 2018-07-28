const config = require("config");
//加载工具集
const utils = require("./utils");
//加载logger
const logger = require("./logger");
//定时器初始化类
const Schedule = require("./schedule");
//控制器基类
const Controller = require("./controller");

module.exports = {
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