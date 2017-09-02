var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var Config = require('./config/config');

var db = mongoose.connect(Config.MONGO, {
	useMongoClient: true
});

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
})

app.use(require('./router'));

app.listen(Config.SERVER_PORT, ()=> {
	console.log('Server running in port ' + Config.SERVER_PORT);
});
