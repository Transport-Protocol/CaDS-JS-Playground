var TX_INFO_CADS      = "[INFO CaDS][HTTP2] "
module.exports = {
    runAsHTTP2: function (service, port) {
            
        const spdy = require('spdy');
        const fs = require('fs');
        var options = {
          key: fs.readFileSync('key.pem'),
          cert: fs.readFileSync('cert.pem')
        };
        spdy
        .createServer(options, service)
        .listen(port, (error) => {
          if (error) {
            console.error(error);
            return process.exit(1);
          } else {
            console.log(TX_INFO_CADS + 'Listening on port: ' + port + '.');
          }
        });
    }
}