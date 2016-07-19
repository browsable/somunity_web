    /**
     * Created by admin on 2015-08-12.
     */

    //routing 처리
    var express = require("express"),
        router = express.Router(),
        controller = require("../controller");

    router.get("/", function (req, res) {
        res.render("index",{
            title : "Somunity Management System"
        })
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
    router.get("/user", function (req, res) {
        res.send('Hello World');
        res.writeHead(301,
            {Location: 'https://play.google.com/store/apps/details?id=com.soma.daemin'}
        );
        res.end();
        //controller.listAll(req,res);
    });
    router.get("/config", function (req, res) {
        res.send('Hello World');
        //controller.listAll(req,res);
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

    router.post("/login",function (req, res){
        var data = bodyparser.urlencoded(req);
        var uId = data.id,
            uPw = data.password;
        res.send(uId + ' ' + uPw);
    });

    module.exports = router;