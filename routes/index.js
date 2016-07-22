    /**
     * Created by admin on 2015-08-12.
     */

    //routing 처리
    var express = require("express"),
        FCM = require("fcm-node"),
        controller = require("../controller"),
        router = express.Router();
    var serverKey='AIzaSyCr7G2QlSJbZI8L4oC7GyoC-m7GoPjo2ZM';
    var fcm = new FCM(serverKey);

    router.get("/", function (req, res) {
        res.render("index",{
            title : "Somunity Management System"
        })
    });
    router.get("/loginSuccess", function (req, res){
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
    router.get("/analytics", function (req, res) {
        res.render("analytics");
    });
    router.get("/chat", function (req, res) {
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
        res.render("index",{});
    });
    router.post("/login",function (req, res){
        var uId = req.body.id;
        var uPw = req.body.password;
        if(uId=='admin'&&uPw=='1234')
            res.render("loginSuccess",{});
        else
            res.render("index",{});
    });
    router.put("/login",function (req, res){
        res.render("loginSuccess",{});
    });
    router.post("/search", function (req, res) {
        var keyword = req.body.keyword;
        controller.listSearch(req,res,keyword);
    });
    module.exports = router;