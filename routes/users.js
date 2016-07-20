var router = require('express').Router(),
    controller = require("../controller");
/* GET users listing. */
router.get("/", function (req, res) {
    controller.listAll(req,res);
});
router.post("/", function (req, res) {
    controller.insertUser(req,res);
});
router.put("/", function (req, res) {
    res.send("put");
    //controller.updateUser(req,res);
});
router.delete("/", function (req, res) {
    res.send("delete");
    //controller.deleteUser(req,res);
});
module.exports = router;
