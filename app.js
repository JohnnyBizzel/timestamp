var http = require('http');
var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3001);

// timeConverter function converts unixtime to a readable date format (i.e. mm dd, yyyy)
function timeConverter(UNIX_timestamp) {
    var a = new Date(UNIX_timestamp);
    var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var day = a.getDate();
    return month + ' ' + day + ', ' + year;
}

app.get('/:date', function(req, res) {
    var dateValue = req.params.date; // get parameter passed
    var convertDate = Date.parse(dateValue.match(/[a-zA-Z]+|[0-9]+/g).join(" ")); // convert to array & to Unix epoch number
    var retObj = {
        "unix": null,
        "natural": null
    }

    if (!isNaN(dateValue)) { // check if user put in a number (unix time)
        retObj["unix"] = Number(req.params.date);
        retObj["natural"] = timeConverter(Number(req.params.date) * 1000); // format unix time to text
    } else if (!isNaN(convertDate)) {  // assumes user passes in a date (e.g. 12jan2015)
        retObj["unix"] = convertDate / 1000;
        retObj["natural"] = timeConverter(convertDate); // format unix time to text
    }

    res.end(JSON.stringify(retObj)); // Stringify object
});

app.get('/', function(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    res.end('Hi!! - to get the timestamp put a date as the 1st query string argument');
});

app.listen(app.get('port'), function() {
    console.log('Express started on http://localhost:' +
        app.get('port') + '; press Ctrl-C to terminate');
});
