var http = require('http');
var express = require('express');
//var bodyP = require('body-parser');

var app = express();

//app.use(bodyP.json());
//app.use(bodyP.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 3000);

app.get('/:date', function(req, res) {
        var date = req.params.date;
        console.log(date);
     res.end('Got date');
});

app.get('/', function(req, res) {

	res.writeHead(200, {'Content-Type': 'text/plain'});

   if (req.url) {
		res.end('Hi!! - to get the timestamp put a date as the 1st query string argument');
	} else {
	 res.end('Hi!! - to get the timestamp put a date as the 1st query string argument');
	} 
});

app.listen(3000, function(){  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate');
});