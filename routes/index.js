var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

// Pagina de creditos
router.get('/author', function(req, res, next) {
    res.render('author');
});

//Pagina de ayuda
router.get('/help', function(req, res, next) {
    res.render('help');
});

module.exports = router;
