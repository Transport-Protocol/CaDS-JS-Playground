var TX_INFO_CADS_APPCALLBacks  = "[INFO CaDS][AppCallbacks] "
var TX_HELLO_WORLD   = "Makes Fun..get index.html ";
require('express');

module.exports = {
    createApplicationServer: function (app) {
        var express = require('express');
        var router = express.Router();
        var path = '/home/ubuntu/workspace/views/';
        var app = express();
        
        router.use(function (req,res,next) {
          console.info(TX_INFO_CADS_APPCALLBacks + TX_HELLO_WORLD);
          console.log("/" + req.method);
          next();
        });
        
        router.get("/",function(req,res){
          res.sendFile(path + "index.html");
        });
        
        router.get("/about",function(req,res){
          res.sendFile(path + "about.html");
        });
        
        router.get("/contact",function(req,res){
          res.sendFile(path + "contact.html");
        });
        
        app.use("/",router);
        
        app.use("*",function(req,res){
          res.sendFile(path + "404.html");
        });
        return app;
    }   
}