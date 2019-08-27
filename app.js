let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let router = require('./Week5lab.js');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.json())
app.use(express.static('public'));
app.use(express.static('images'));


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use('/', router);
app.listen("8080");
console.log("Server running at http://localhost:8080");