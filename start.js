// JavaScript File
var TX_INFO_CADS      = "[INFO CaDS][START] "
var TX_INFO_EXPRESS   = "Modul EXPESS "
var TX_INFO_HTTP      = "Modul HTTP "
var TX_INFO_WEBSOCKET = "Modul WEBSOCKETS "
var TX_INFO_ACTIVATED = "activated "
var TX_INFO_START     = "PLAYGROUND... "

///////////// Conf Service /////////////
/* Lets start to create a new world*/
var config      = require("./server_config.json");
var helper      = require("./lib/CaDShelper");
var callbacks   = require("./lib/APPcallbacks");
var spdy        = require("./lib/Spdy");

var serverIP    = config.server.ip   || "0.0.0.0";
var serverPort  = config.server.port || 8080;
var isHTTPS     = config.https   || false;
var useExpress  = config.express || false;
var useWebSocket= config.ws      || false;
var useHttp2    = config.http2   || false;

/////////////// Modul App ///////////////
/* Lets create the app server */
console.info(TX_INFO_CADS + TX_INFO_START);
var service; // lets see what we can do
if(!useExpress){
  // web-server with http
  console.info(TX_INFO_CADS + TX_INFO_HTTP + TX_INFO_ACTIVATED);
  service = helper.createHttpServer(isHTTPS);
}
else{
  // application server with express
  console.info(TX_INFO_CADS + TX_INFO_EXPRESS + TX_INFO_ACTIVATED);
  service = callbacks.createApplicationServer(config);
}
///////////////  Modul WS ///////////////
/* Lets do some WebSockets*/
if(useWebSocket){
  console.info(TX_INFO_CADS + TX_INFO_WEBSOCKET + TX_INFO_ACTIVATED);
  var baseWS = require('./websocket/websocket_base');
  var ws = baseWS.initWS(service);
}

/////////////// Start Magic ///////////////
// Set Port - In the first step we use process.env.PORT or 8080
if(!useHttp2){
  service.listen(process.env.PORT || serverPort, process.env.IP || serverIP,null);
}
else{
  spdy.runAsHTTP2(service,process.env.PORT || serverPort);
}
