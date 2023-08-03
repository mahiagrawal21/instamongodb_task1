"use strict";

exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
var Users_1 = require("../src/models/Users");
var userSignup_1 = require("../src/routes/userSignup");
var dotenv_1 = require("dotenv"); // Import dotenv
var config_1 = require("../src/db/config");
var path = require("path");
var swaggerUi = require('swagger-ui-express');
var yamljs_1 = require("yamljs");
var swaggerDocument = yamljs_1["default"].load(path.join(__dirname, './swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
var options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API FOR SEQEL',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:4000/'
            }
        ]
    },
    apis: ['./routes/indexrouter.ts']
};
dotenv_1["default"].config();
app.use(express_1["default"].json());
app.use('/api', userSignup_1["default"]);
config_1.dbconnection();
new Users_1["default"]();
var port = 4000;
app.listen(port, function () {
    console.log("Server started on port " + port);
});
