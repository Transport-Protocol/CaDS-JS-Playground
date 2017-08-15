var TX_INFO_CADS_APPCALLBacks  = "[INFO CaDS][AppCallbacks] "
var TX_HELLO_WORLD   = "Makes Fun..get ";


module.exports = {
    createApplicationServer: function (config) {
        var express = require('express');
        var compression = require('compression');
        var helmet = require('helmet');        
        var csp = require('helmet-csp');
        var router = express.Router();
        var path = config.workspace;
        var app = express();

        app.use(csp({
                directives: {
                        frameSrc: ['https://*.twitter.com', 'https://*.youtube.com', 'https://*.google.com'],
                }
        }));
        
        app.use(compression());
        app.use(helmet());
	
	var ninetyDaysInSeconds = 7776000
	app.use(helmet.hpkp({
  		maxAge: ninetyDaysInSeconds,
  		sha256s: ['AbCdEf123=', 'ZyXwVu456=']
	}))

	app.use(helmet.referrerPolicy({ policy: 'same-origin' }))
        
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

