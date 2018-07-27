/**
 * 
 */

module.exports = function (router) {
    router.get("/", function (ctx) {
        ctx.body = "test";
    });
    return router;
};