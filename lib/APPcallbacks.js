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
			defaultSrc: ["'self'"],
                }
        }));
        
        app.use(compression());
        //app.use(helmet());
        //app.use( helmet({ contentSecurityPolicy: false }) );


	app.use(
  		helmet({
    		contentSecurityPolicy: {
      			useDefaults: false,
      			directives: { 
			   defaultSrc: ["'self'", "cads.informatik.haw-hamburg.de","youtube.com", "youtu.be"],
§§§§§§§§§§§§§ frameSrc: ["'self'", "cads.informatik.haw-hamburg.de","youtube.com", "youtu.be"],
			   styleSrc: ["'self'","cads.informatik.haw-hamburg.de","cdnjs.cloudflare.com","maxcdn.bootstrapcdn.com", "'unsafe-inline'","'unsafe-eval'"],
			   fontSrc: ["'self'","cads.informatik.haw-hamburg.de","cdnjs.cloudflare.com","maxcdn.bootstrapcdn.com"],
    			   scriptSrc: ["'self'", "cdnjs.cloudflare.com","ajax.googleapis.com","maxcdn.bootstrapcdn.com","ssl.gstatic.com","cads.informatik.haw-hamburg.de", "'unsafe-inline'","'unsafe-eval'"], // scripts from example.com are now trusted
    			   objectSrc: ["'none'"],
    			   upgradeInsecureRequests: [],
			 }
    			},
  		})
	);
	
	var ninetyDaysInSeconds = 7776000
        
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

