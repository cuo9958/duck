/**
 * 默认的配置文件
 * 不同环境下还会加载不同的配置
 */
module.exports = {
    name: "duck.js",
    port: "3001",
    body: {
        multipart: true,
        strict: false,
        jsonLimit: '10mb',
        formLimit: '10mb',
        textLimit: '10mb'
    }
}