"use strict";

var jsonschema = require("jsonschema");
var schema = require("./schema/schema");

function index(req, res, next) {
    try {
        jsonschema.validate(req.body, schema, {"throwError": true})
        next();
    }
    catch (err) {
        res.status(400).send({RequestStatus: "Error", ErrorMessage: err.stack});
    }
}

module.exports = index;

