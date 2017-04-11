"use strict";

var express = require("express");
var bodyParser = require("body-parser");
var mwValidation = require("./mwValidation");

var app = express();
app.use(bodyParser.json());

//routes
app.get("/", function (req, res) {
    res.send("hello world");
});

var router = express.Router(),
    rootRoute = router.route("/validate");

rootRoute
    .post(mwValidation)
    .post(function (req, res) {
        res.status(200).send({status: "done"});
    });

app.use("/", router);
app.listen(4000, function () {
    console.log("server started on port 4000");
});
