var Common = require('../common');

function getAll(req, res, next) {
	//field validation goes here
	next();
}

function add(req, res, next) {
	var name = req.body.name,
			seats = req.body.seats,
			location = req.body.location;

	if(!name || !seats || !location) {
		res.send(Common.fieldError);
	} else {
		next();
	}
}

exports.getAll = getAll;
exports.add = add;