    /**
     * Created by admin on 2015-08-12.
     */
    var pool = require("../lib/_DBPool");
    var mysql = require("mysql");

    exports.listAll = function (req, res) {
        // 2. 로직처리 ( DB처리 )
        pool.acquire(function (err, conn) {
            if (err) {
                console.log("connection 획득 실패!");
            } else {
                conn.query("select * from users", function (err, result, field) {
                    if (err) {
                        console.log("SQL에 문제가 있음");
                    } else {
                        //console.log(result);
                        res.render("users", {
                            data: result
                        });
                    }
                });
            }
        });
        // 3. view 처리
    };
    exports.insertUser = function (req, res,name,study) {
        // 2. 로직처리 ( DB처리 )
            pool.acquire(function (err, conn) {
                if (err) {
                    console.log("connection 획득 실패!");
                } else {
                    if(name!=undefined&&study!=undefined){
                        conn.query('INSERT INTO users SET ?', {name: name,study:study}, function (err, result, field) {
                            if (err) {
                                console.log("SQL에 문제가 있음");
                            } else {
                                conn.query("select * from users", function (err, result, field) {
                                    if (err) {
                                        console.log("SQL에 문제가 있음");
                                    } else {
                                        //console.log(result);
                                        res.render("insertUser", {
                                            data: result
                                        });
                                    }
                                });
                            }
                        });
                    }else {
                        conn.query("select * from users", function (err, result, field) {
                            if (err) {
                                console.log("SQL에 문제가 있음");
                            } else {
                                //console.log(result);
                                res.render("insertUser", {
                                    data: result
                                });
                            }
                        });
                    }
                }
            });
        // 3. view 처리
    };
    exports.updateUser = function (req, res, id, name, study) {
        // 2. 로직처리 ( DB처리 )
        pool.acquire(function (err, conn) {
            if (err) {
                console.log("connection 획득 실패!");
            } else {
                if(id!=undefined&&name!=undefined&&study!=undefined) {
                    conn.query('UPDATE users SET name = ?, study = ? WHERE id = ?', [name,study,id],
                    function (err, result, field){
                        if(err){
                            console.log("UPDATE SQL에 문제가 있음");
                        }else {
                            conn.query("select * from users", function (err, result, field) {
                                if (err) {
                                    console.log("SQL에 문제가 있음");
                                } else {
                                    //console.log(result);
                                    res.render("updateUser", {
                                        data: result
                                    });
                                }
                            });
                        }
                    });
                }else{
                    conn.query("select * from users", function (err, result, field) {
                        if (err) {
                            console.log("SQL에 문제가 있음");
                        } else {
                            //console.log(result);
                            res.render("updateUser", {
                                data: result
                            });
                        }
                    });
                }

            }
        });
        // 3. view 처리
    };
    exports.deleteUser = function (req, res,id) {
        // 2. 로직처리 ( DB처리 )
        pool.acquire(function (err, conn) {
            if (err) {
                console.log("connection 획득 실패!");
            } else {
                if(id!=undefined){
                    var sql = "DELETE FROM users WHERE id =?";
                    sql = mysql.format(sql, id);
                    conn.query(sql, function (err, result, field) {
                        if (err) {
                            console.log("SQL에 문제가 있음");
                        } else {
                            conn.query("select * from users", function (err, result, field) {
                                if (err) {
                                    console.log("SQL에 문제가 있음");
                                } else {
                                    res.render("deleteUser", {
                                        data: result
                                    });
                                }
                            });
                        }
                    });
                }else{
                    conn.query("select * from users", function (err, result, field) {
                        if (err) {
                            console.log("SQL에 문제가 있음");
                        } else {
                            res.render("deleteUser", {
                                data: result
                            });
                        }
                    });
                }
            }
        });
        // 3. view 처리
    };

    exports.listSearch = function (req, res, keyword) {
        // 2. 로직처리 ( DB처리 )
        pool.acquire(function (err, conn) {
            if (err) {
                console.log("connection 획득 실패!");
            } else {
                var sql = "select * from users where name like ?";
                var param = ["%" + keyword + "%"];
                sql = mysql.format(sql, param);
                conn.query(sql, function (err, result, field) {
                    if (err) {
                        console.log("SQL에 문제가 있음");
                    } else {
                        //console.log(result);
                        res.render("users", {
                            data: result
                        });
                    }
                });
            }
        });
        // 3. view 처리
    };