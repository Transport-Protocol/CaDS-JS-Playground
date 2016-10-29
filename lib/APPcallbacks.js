var TX_INFO_CADS_APPCALLBacks  = "[INFO CaDS][AppCallbacks] "
var TX_HELLO_WORLD   = "Makes Fun..get init.html ";
require('express');

module.exports = {
    createApplicationServer: function (config) {
        var express = require('express');
        var router = express.Router();
        var path = config.workspace;
        var app = express();
        
        router.use(function (req,res,next) {
          console.log("/" + req.method);
          next();
        });
        
        router.use(express.static(path +'/'));
        
        router.get("/",function(req,res){
           console.info(TX_INFO_CADS_APPCALLBacks + TX_HELLO_WORLD);
          res.sendFile(path + "index.html");
        });
        
        router.get("/about",function(req,res){
          res.sendFile(path + "/views/about.html");
        });
        
        router.get("/contact",function(req,res){
          res.sendFile(path + "/views/contact.html");
        });
        
        app.use("/",router);
        
        app.use("*",function(req,res){
          res.sendFile(path + "/views/404.html");
        });
        return app;
    }   
}