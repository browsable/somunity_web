    /**
     * Created by admin on 2015-08-12.
     */

    //routing 처리
    var express = require("express"),
        controller = require("../controller"),
        router = express.Router();

    router.get("/", function (req, res) {
        res.render("index",{
            title : "Somunity Management System"
        })
    });
    router.get("/loginSuccess", function (req, res) {
        res.render("loginSuccess",{})
    });
    router.get("/more", function (req, res) {
        res.writeHead(301,
            {Location: 'https://play.google.com/store/apps/details?id=com.soma.daemin'}
        );
        res.end();
    });
    router.post("/more", function (req, res) {
        res.writeHead(301,
            {Location: 'https://play.google.com/store/apps/details?id=com.soma.daemin'}
        );
        res.end();
    });
    router.get("/configView", function (req, res) {
        res.render("configView");
    });
    router.get("/chatView", function (req, res) {
        res.writeHead(301,
            {Location: 'https://somaslack.firebaseapp.com/'}
        );
        res.end();
        //controller.listAll(req,res);
    });
    router.get("/ready", function (req, res) {
        res.send('Coming soon');
        //controller.listAll(req,res);
    });
    router.get("/login",function (req, res){
        res.render("loginSuccess",{});
    });
    router.post("/login",function (req, res){
        var uId = req.body.id;
        var uPw = req.body.password;
        if(uId=='admin'&&uPw=='1234')
            res.render("loginSuccess",{});
        else
            res.render("index",{});
    });
    router.post("/search", function (req, res) {
        var keyword = req.body.keyword;
        controller.listSearch(req,res,keyword);
    });
    module.exports = router;