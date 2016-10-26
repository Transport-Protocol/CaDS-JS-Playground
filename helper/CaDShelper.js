var TX_SERVER_RUN   = "CaDS INFO: Server running";
var TX_CREATE_SERV  = "CaDS INFO: Create Server";

module.exports = {
  // log helper 
  logServerRunning: function (h){
    console.log(TX_SERVER_RUN);
  },
  
  createHttpServer: function (isHTTPS) {
    // create the setup
    console.info(TX_CREATE_SERV); 
 
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
      rm csr.pem
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