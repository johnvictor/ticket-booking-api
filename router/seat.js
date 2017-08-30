var router = require('express').Router();
var seatService = require('../service/seat');
var seatController = require('../controller/seat');

router.post('/book', seatController.book, seatService.book);
router.get('/status/:id', seatController.status, seatService.status);


module.exports = router;