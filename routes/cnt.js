/**
 * Created by admin on 2015-08-12.
 */

    //routing 처리
var express = require("express"),
    router = express.Router(),
    controller = require("../controller");


//request from android app
router.get("/", function () {
    controller.cntUpdate();
});

module.exports = router;