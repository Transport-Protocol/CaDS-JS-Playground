var TX_INFO_CADS_APPCALLBacks  = "[INFO CaDS][AppCallbacks] "
var TX_HELLO_WORLD   = "Makes Fun..get ";


module.exports = {
    createApplicationServer: function (config) {
        var express = require('express');
	var compression = require('compression');
	var helmet = require('helmet');        
//	var csp = require('helmet-csp');
        var router = express.Router();
        var path = config.workspace;
        var app = express();


//	app.use(csp({
//  		// Specify directives as normal.
//  		directives: {
//    			defaultSrc: ["'self'", 'maps.google.com'],
//    			scriptSrc: ["'self'",'*.google.com', "'unsafe-inline'"],
//    			//styleSrc: ['style.com'],
//    			fontSrc: ["'self'", 'fonts.com'],
//   			// imgSrc: ['img.com', 'data:'],
//    			sandbox: ['allow-forms', 'allow-scripts'],
//    			reportUri: '/report-violation',
//   			objectSrc: ['*.google.com'],
//			frameSrc: ['*.google.com'],
//    			upgradeInsecureRequests: true
//  		},

  		// This module will detect common mistakes in your directives and throw errors
  		// if it finds any. To disable this, enable "loose mode".
//  		loose: false,

	 	 // Set to true if you only want browsers to report errors, not block them.
 		 // You may also set this to a function(req, res) in order to decide dynamically
		  // whether to use reportOnly mode, e.g., to allow for a dynamic kill switch.
//	 	 reportOnly: false,

 		 // Set to true if you want to blindly set all headers: Content-Security-Policy,
 		 // X-WebKit-CSP, and X-Content-Security-Policy.
//	 	 setAllHeaders: false,

 	 	// Set to true if you want to disable CSP on Android where it can be buggy.
// 		 disableAndroid: false,

  		// Set to false if you want to completely disable any user-agent sniffing.
  		// This may make the headers less compatible but it will be much faster.
  		// This defaults to `true`.
//  		browserSniff: true
//	}))

	
	app.use(compression());
        app.use(helmet());
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
