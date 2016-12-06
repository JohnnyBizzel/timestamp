var http = require('http');
var querystring = require('querystring');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  res.end(JSON.stringify(query));

}).listen(8124, "127.0.0.1");
console.log('Server running at http://127.0.0.1:8124/');
