var Common = require('../common');
var Seat = require('../model/seat');
var Theatre = require('../model/theatre');

function book(req, res, next) {
	var theatreId = req.body.theatreId,
		seats = req.body.seats;

	var bookedSeats = {};
	bookedSeats.theatreId = theatreId;
	bookedSeats.bookedSeats = seats;
	var query = { theatreId : theatreId};

	Seat.findOneAndUpdate(query, bookedSeats, {upsert: true}, function(err, bookedSeats) {
		if(err) {
			console.log(err);
			res.json(Common.dbError);
		} else {
			res.json({
				status: true
			});
		}
	});
}

function status(req, res, next) {
	var theatreId = req.params.id;
	Theatre.findOne({_id: theatreId}, {_id: 1, name: 1, location: 1}, function(err, theatre) {
		if(err) {
			res.json(Common.dbError);
		} else {
			console.log(theatre);
			Seat.findOne({theatreId: theatre._id}, function(err, bookedSeats) {
				if(err) {
					res.json(Common.dbError);
				} else {
					let response = {
						theatreId: theatre._id,
						theatre: theatre.name,
						location: theatre.location
					};

					if(bookedSeats) {
						response.bookedSeats = bookedSeats.bookedSeats.map(function(item) { return { row: item.row, seatNos: item.seatNos}})
					} else {
						response.bookedSeats = [];
					}

					res.json(response);	
				}
				
			})
		}
	});

}

exports.book = book;
exports.status = status;