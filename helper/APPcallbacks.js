var TX_HELLO_WORLD   = "Makes Fun";
require('express');

module.exports = {
    createApplicationServer: function (app) {
        var express = require('express');
        var app = express();
    
        app.get('/', function (req, res) {
             res.send(TX_HELLO_WORLD);
        });
        return app;
    }   
}