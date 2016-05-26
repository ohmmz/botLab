var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port =  process.env.PORT || 1333;

app.use(bodyParser.urlencoded({ extended: true}));

app.get('/', function (req, res) { res.status(200).send('Welcome to Slack Lab!'); });

app.listen(port, function () {
	console.log('Listening on port ' + port);
});
