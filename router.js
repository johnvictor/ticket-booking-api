var router = require('express').Router();

router.use('/theatre', require('./router/theatre'));
router.use('/seat', require('./router/seat'));

module.exports = router;
