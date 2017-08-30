var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Theatre = new Schema({
	name: String,
	seats: Number,
	location: String
});

module.exports = mongoose.model('Theatre', Theatre);
