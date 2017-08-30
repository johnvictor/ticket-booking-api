var Common = require('../common');
var Seat = require('../model/seat');
var Theatre = require('../model/theatre');

function book(req, res, next) {
	var theatreId = req.body.theatreId,
		seats = req.body.seats;

	var bookedSeats = new Seat();
	bookedSeats.theatreId = theatreId;
	bookedSeats.bookedSeats = seats;

	bookedSeats.save(function(err, bookedSeats) {
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
					res.json({
						theatreId: theatre._id,
						theatre: theatre.name,
						location: theatre.location,
						bookedSeats: bookedSeats.bookedSeats.map(function(item) { return { row: item.row, seatNo: item.seatNo}})
					});	
				}
				
			})
		}
	});

}

exports.book = book;
exports.status = status;