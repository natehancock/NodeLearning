var http = require('http');
var dtModule = require('./module.js');

var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var fs = require('fs');

var router = express.Router();




router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

app.listen(port);
// http.createServer(function (req, res) {
// 	fs.readFile(
// 		'./Assets/data/items.js', function(error, data) {

// 			res.writeHead(200, {'Content-Type': 'application/json'});
// 			res.write(data);
// 			res.end();
// 		}
// 	)
// 	// res.write('This is the date and time' + dtModule.myDateTime());
// 	// res.end('Hello World!')
// }).listen(8080);

