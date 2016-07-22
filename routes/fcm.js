/**
 * Created by admin on 2015-08-12.
 */

    //routing 처리
var express = require("express"),
    FCM = require('fcm-push-notif'),
    fs = require('fs-extra'),
    util = require('util'),
    router = express.Router();

var serverKey = 'AIzaSyCr7G2QlSJbZI8L4oC7GyoC-m7GoPjo2ZM';
var fcm = new FCM(serverKey);

//request from android app
router.post("/", function (req, res) {
    var registration_token = req.body.registration_token,
        name = req.body.name;
    var message = {
        to: registration_token, // required fill with device token or topics
        collapse_key: 'invite_msg',
        data: {
            msg: name+'invite you'
        },
        notification: {
            title: 'Title of your push notification',
            body: 'Body of your push notification'
        }
    };

//callback style
    fcm.send(message, function(err, response){
        if (err) {
            console.log("Something has gone wrong!");
            console.log(err)
        } else {
            console.log("Successfully sent with response: ", response);
        }
    });
    console.log("routing complete");
});

module.exports = router;