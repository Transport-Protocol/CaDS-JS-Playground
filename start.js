// JavaScript File
var TX_RUNS_AS_HTTPS = "CaDS INFO: Runs as HTTPS ";

/* Lets start to create a new world*/
console.info("CaDS INFO: Start the default system");
// CONFIG
var config = require("./server_config.json");
var helper = require("./helper/CaDShelper");
var callbacks = require("./helper/APPcallbacks");

var serverIP = config.server.ip || "0.0.0.0";
var serverPort = config.server.port || 8080;
var isHTTPS = config.https || false;
var useExpress = config.express || false;

/* Lets create the app server */
var app;
if(!useExpress){
  app = helper.createHttpServer(isHTTPS);
}
else{
  var express = require('express');
  app = express();
  // for the callbacks look in ./helper/Appcallbacks
  callbacks.registercallbacks(app);
}

// Set Port - In the first step we use process.env.PORT or 8080
app.listen(process.env.PORT || serverPort, process.env.IP || serverIP,helper.logServerRunning(app));

if(isHTTPS){
  console.log(TX_RUNS_AS_HTTPS)
}

