var TX_INFO_CADS_APPCALLBacks  = "[INFO CaDS][AppCallbacks] "
var TX_HELLO_WORLD   = "Makes Fun..get ";


module.exports = {
    createApplicationServer: function (config) {
        var express = require('express');
        
        var router = express.Router();
        var path = config.workspace;
        var app = express();
        
        router.use(function (req,res,next) {
          next();
        });
        
        router.use(express.static(path +'/'));
        
        router.get("*",function(req,res,next){
           console.info(TX_INFO_CADS_APPCALLBacks + TX_HELLO_WORLD + "reg: " + req.originalUrl);
           next();
        });
        
        app.use("/",router);
                
        // catch 404 and forward to error handler
        app.use(function (req, res, next) {
          var err = new Error('Not Found');
          err.status = 404;
          next(err);
        });
        return app;
    }
}