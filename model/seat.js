var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Seat = new Schema({
	theatreId: Schema.ObjectId,
	bookedSeats: [{
		row: String,
		seatNos: [Number]
	}]
});

module.exports = mongoose.model('Seat', Seat);
