const Koa = require("koa");
const KoaBody = require("koa-body");
const {
    Logger,
    config,
} = require("./main");
const fs = require("fs");

const rootPath = process.cwd();
let app = new Koa();

app.root = rootPath;
const body_config = Object.assign({
    multipart: true,
    strict: false,
    jsonLimit: '10mb',
    formLimit: '10mb',
    textLimit: '10mb'
}, config().body);
app.use(KoaBody(body_config));

//加载appcalition
try {
    let application = require(app.root + "/app.js");
    application(app);
} catch (error) {
    // Logger.info(error.message);
}

//添加路由
if (fs.existsSync(app.root + "/controller")) {
    let controller_list = fs.readdirSync(app.root + "/controller");
    controller_list.forEach(item => {
        try {
            let controller_item = require(app.root + "/controller/" + item);
            if (controller_item) {
                app.use(controller_item.routes()).use(controller_item.allowedMethods());
            }
        } catch (error) {
            // Logger.info(error.message);
        }
    });
}

const port = config("port") || 3000;
app.listen(port, function () {
    Logger.info("app已启动:" + port)
});
process.on('SIGINT', function (a) {
    process.exit();
});
process.on('exit', (code) => {
    Logger.info("app已停止:" + code)
});
process.on('uncaughtException', (code) => {
    Logger.info("app已停止:" + code)
});
module.exports = app;

//启动定时器
if (fs.existsSync(app.root + "/schedule")) {
    let schedule_list = fs.readdirSync(app.root + "/schedule");
    schedule_list.forEach(item => {
        try {
            let schedule_item = require(app.root + "/schedule/" + item);
            if (schedule_item) new schedule_item()._run();
        } catch (error) {
            // Logger.info(error.message);
        }
    });
}