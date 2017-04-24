var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var PORT = process.env.PORT || 7500;

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({ extended: true }));

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require('./controllers/routes');

app.use('/', routes);

app.listen(PORT, function(){
	console.log("Connected on " + PORT);
});