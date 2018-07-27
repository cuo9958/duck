/**
 * 
 */
const Controller = require("../index").Controller;

class testController extends Controller {

    home() {
        console.log("home");
    }

}
module.exports = testController;