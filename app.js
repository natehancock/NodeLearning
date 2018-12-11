
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

app.set('view engine', 'ejs')

var port = process.env.PORT || 8080;

var fs = require('fs');

// var image = require('./Assets/images/character-ability-cards/MT/brain-leech.png');

app.get('/', function(req, res) {
    var cardText = "/images/character-ability-cards/MT/brain-leech.png"
    var cardTwoText = "/images/character-ability-cards/MT/frigid-apparition.png"
    res.render('index', {
        cardOne: cardText,
        cardTwo: cardTwoText
    });
})

app.get('/ability-cards', function(req, res) {
    fs.readFile(
        './Assets/data/character-ability-cards.js', function(error, data) {
            res.writeHead( 200, {'Content-Type': 'application/json'});
            res.write(data);
            res.end();
        }
    )
});

app.get('/api', (req, res) => {
    res.send('API page')
});




// app.post('/', function (req, res) {
//     var text = "TEXT";
//     res.render('index', {cardOne: text});
//     console.log(req.body.cardOne);
//     console.log("HELLO!");
//     // console.log(req.body.city);
// });

app.post('/',function(req,res){
    // "/images/character-ability-cards/MT/brain-leech.png"
    // console.log("Body" +req.body.body);
    // res.write("Card One " +req.body.cardUrlOne);
    // res.write("Card Two " +req.body.cardUrlTwo);

    var textResponse = {
        cardOne: req.body.cardUrlOne,
        cardTwo: req.body.cardUrltwo
    }

    res.render('index', textResponse);


    // res.end();
});

app.use(express.static('Assets/images/'));

app.listen(port, () => console.log(`Listening on ${port}`));