var router = require('express').Router(),
    controller = require("../controller");
/* GET users listing. */
router.get("/", function (req, res) {
    controller.listAll(req,res);
});
router.post("/", function (req, res) {
    var name = req.body.name;
    var study = req.body.study;
    controller.insertUser(req,res,name,study);
});
router.put("/", function (req, res) {
    var name = req.body.name;
    var study = req.body.study;
    var id = req.body.id;
    controller.updateUser(req,res,id,name,study);
});
router.delete("/", function (req, res) {
    var id = req.body.id;
    controller.deleteUser(req,res,id);
});
module.exports = router;
