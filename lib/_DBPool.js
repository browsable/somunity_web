/**
 * Created by admin on 2015-08-12.
 */

    // 1. 필요한 module require
    var genericPool = require("generic-pool"),
        mysql = require("mysql"),
        pool = genericPool.Pool({
            name : "My Connection Pool", //이름
            max : 10, // 최대 보유한 connection 수
            min : 7, // 최소 보유한 connection 수
            log : false, // console에 log 출력, false는 로그 안나옴
            create : function(callback){
                var option = {
                    host : "localhost",
                    port : 3306,
                    user : "nodejs",
                    password : "nodejs",
                    database : "library"
                };
                var conn = mysql.createConnection(option);
                conn.connect(function(err){
                    if(err){
                        console.log("Connection 얻기 실패");
                    }
                    callback(err, conn);
                });
            },
            destroy : function(conn){
                conn.end();
            }
        }); // connection pool 생성

    module.exports = pool;