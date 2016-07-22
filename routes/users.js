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
router.route('/register').post(function (req, res) {
    var tag = req.body.tag,
        username = req.body.username,
        email = req.body.email,
        password = req.body.password;
    req.checkBody('email', 'not a valid email.').isEmail();
    req.checkBody('username', '2-32 character').len(2, 32);
    req.checkBody('password', '8-32 character').len(8, 32);
    var errors = req.validationErrors();
    if (tag === "register") {
        if (errors) {
            res.json({message: errors});
        } else {
            res.json({success: "1", message: "wow success",tag: tag, username: username, email: email, password: password});
            //res.render('test', {tag: tag, username: username, email: email, password: password});
            console.log(tag + username + email + password);
        }

    } else {
        res.json({success: "2", message: "not a register request"});
    }
    console.log("routing complete");
});
module.exports = router;
