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

    //request from android app
    router.post('/fcm',function (req, res) {
        var registration_token = req.body.registration_token,
            name = req.body.name,
            tag = req.body.tag;
        if (tag === "fcm") {
            if (errors) {
                res.json({message: errors});
            } else {
                var message = { //this may vary according to the message type (single recipient, multicast, topic, et cetera)
                    to: registration_token,
                    collapse_key: 'invite_msg',
                    data: {
                        msg: name+'님으로부터 친구 요청이 왔습니다.'
                    }
                    /*notification: {
                        title: '친구 요청이 왔습니다.',
                        body: name+'님으로부터 친구 요청이 왔습니다.',
                        icon: 'ic_launcher' //now required
                    }*/
                };
                fcm.send(message, function(err, response){
                    if (err) {
                        console.log("Something has gone wrong!");
                    } else {
                        console.log("Successfully sent with response: ", response);
                        res.json({success: "1", message: "push success!"});
                    }
                });
            }
        } else {
            res.json({success: "2", message: "not a fcm request"});
        }
        console.log("routing complete");
    });
    module.exports = router;