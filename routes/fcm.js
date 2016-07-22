    /**
     * Created by admin on 2015-08-12.
     */

    //routing 처리
    var express = require("express"),
        FCM = require("fcm-node"),
        formidable = require('formidable'),
        fs = require('fs-extra'),
        util = require('util'),
        path = require('path'),
        router = express.Router();
    var serverKey='AIzaSyCr7G2QlSJbZI8L4oC7GyoC-m7GoPjo2ZM';
    var fcm = new FCM(serverKey);

    //request from android app
    router.post("/",function (req, res) {
        var registration_token = req.body.registration_token,
            name = req.body.name,
            tag = req.body.tag;
        console.log(registration_token);
        console.log(name);
        console.log(tag);
        if (tag === 'fcm') {
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
                        res.json({message: errors});
                        console.log("Something has gone wrong!");
                    } else {
                        console.log("Successfully sent with response: ", response);
                        res.json({success: "1", message: "push success!"});
                    }
                });
        } else {
            res.json({success: "2", message: "not a fcm request"});
        }
        console.log("routing complete");
    });
    module.exports = router;