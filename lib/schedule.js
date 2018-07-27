const schedule = require('node-schedule');
/**
 * 定时任务的基类
 * 设置时间,可执行方法
 * 默认执行run方法
 */
module.exports = class {
    constructor() {
        this.time = "";
    }
    start() {}
    _run() {
        schedule.scheduleJob(this.time, this.start);
    }
}