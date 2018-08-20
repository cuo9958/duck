const config = require("config");
//加载工具集
const utils = require("./utils");
//加载logger
const logger = require("./logger");
//定时器初始化类
const Schedule = require("./schedule");
//控制器基类
const Controller = require("./controller");

let Models = {}
// const rootPath = process.cwd();
// //添加model对象层
// let model_list = utils.getFileList(rootPath + "/models");
// model_list.forEach(item => {
//     try {
//         let model = require(rootPath + "/models/" + item);
//         let name = item.replace(".js", "");
//         Models[name] = model;
//     } catch (error) {
//         //
//     }
// })
//TODO:添加事件,监听全局事件
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
    /**
     * 对象
     */
    Models
}