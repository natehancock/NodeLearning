
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var fs = require('fs');

app.get('/', function(req, res) {
    fs.readFile(
        './MindThief/character-ability-cards.js', function(error, data) {
            res.writeHead( 200, {'Content-Type': 'application/json'});
            res.write(data);
            res.end();
        }
    )
});

app.get('/api', (req, res) => {
    res.send('API page')
});

app.use(express.static('Assets/images/'));

app.listen(port, () => console.log(`Listening on ${port}`));