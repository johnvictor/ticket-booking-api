var Theatre = require('../model/theatre');
var Common = require('../common');

function getAll(req, res, next) {
	console.log('called');
	Theatre.find({}, function(err, theatres) {
		if(err) {
			res.json(Common.dbError);
		} else {
			res.json(theatres);
		}
	});
	
}

function add(req, res, next) {
		var name = req.body.name,
			seats = req.body.seats,
			location = req.body.location;

		var newTheatre = new Theatre();
		newTheatre.name = name;
		newTheatre.seats = seats;
		newTheatre.location = location;

		newTheatre.save(function(err, theare) {
			if(err) {
				res.json(Common.dbError);
			} else {
				res.json(theare);
			}
		});
}

exports.getAll = getAll;
exports.add = add;