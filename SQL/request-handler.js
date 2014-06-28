var fs = require('fs');
var dbConnection = require('./db');




exports.handleRequest = function (req, res) {
  if(req.method === 'GET') {
    if (req.url === '/'){
      console.log("inside GET "+req.url);
      fs.readFile(__dirname + '/../Client/index.html', function(err, data) {
        if(err) {
          console.log(err);
          return;
        }
        res.end(data);
      });
    }
  }
};