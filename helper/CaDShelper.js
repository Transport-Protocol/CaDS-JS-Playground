var TX_INFO_CADS_HELPER  = "[INFO CaDS][HELPER] "
var TX_INFO_SERVER_RUN   = "Server running ";
var TX_INFO_CREATE_SERV  = "Create Server ";

module.exports = {

  createHttpServer: function (isHTTPS) {
    // create the setup
    console.info(TX_INFO_CADS_HELPER + TX_INFO_CREATE_SERV); 
 
    var http, httpd;
    var listener = require("./HTTPlistener");
    
    if(!isHTTPS){
      http = require("http"); 
      // Create the server
      httpd = http.createServer(listener.httpListener);
    }
    else{
      http = require("https");
      
      // Need also some crypto stuff
      var   fs = require("fs");
      //Crypto 
      /* self signed with openssl
      $ openssl genrsa -out key.pem
      $ openssl req -new -key key.pem -out csr.pem
      $ openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
      $ rm csr.pem
      */
      var options = {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
      };
      httpd = http.createServer(options,listener.httpListener);
    }
    return httpd;
  }
};