var router = require('express').Router();
var theatreService = require('../service/theatre');
var theatreController = require('../controller/theatre');

router.get('/list', theatreController.getAll, theatreService.getAll);
router.post('/add', theatreController.add, theatreService.add);


module.exports = router;