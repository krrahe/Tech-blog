const router = require('express').Router();
const htmlroutes = require('./html-routes');

router.use('/',htmlroutes);

module.exports = router;