var TX_HELLO_WORLD   = "HTTP: HELLO WORLD";
require('express');

module.exports = {
    registercallbacks: function (app) {
        app.get('/', function (req, res) {
             res.send(TX_HELLO_WORLD);
        });
    }   
}