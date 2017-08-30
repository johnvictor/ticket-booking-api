var Common = require('../common');

function book(req, res, next) {
	var theatreId = req.body.theatreId,
			seats = req.body.seats;

	if(!theatreId || !seats) {
		res.json(Common.fieldError);
	} else {
		next();
	}
}

function status(req, res, next) {
	if(!req.params.id) {
		res.json(Common.fieldError);
	} else {
		next();
	}
}

exports.book = book;
exports.status = status;