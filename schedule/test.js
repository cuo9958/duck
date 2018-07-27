/**
 * 测试定时任务
 */
const Schedule = require("../index").Schedule;

class testSchedule extends Schedule {

    constructor() {
        super();
        this.time = "1 * * * * *";
    }

    start() {
        console.log("执行一次", Date.now());
    }
}
module.exports = testSchedule;