
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
var fs = require('fs');
var reload = require('reload');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.set('view engine', 'ejs')

var first = "";
var second = "";

app.get('/', function(req, res) {
    console.log("GET");
    res.render('index', {
        cardOne: first,
        cardTwo: second
    });
})



app.get('/api', (req, res) => {
    res.send('API page')
});

app.post('/selected-cards',function(req,res){
    console.log("POST");
    first = req.body.cardUrlOne;
    second = req.body.cardUrlTwo;
    res.end();
    reloadServer.reload();
});


reloadServer = reload(app);

app.get('/ability-cards', function(req, res) {
    fs.readFile(
        './Assets/data/character-ability-cards.js', function(error, data) {
            res.writeHead( 200, {'Content-Type': 'application/json'});
            res.write(data);
            res.end();
        }
    )
});

app.listen(port, () => console.log(`Listening on ${port}`));