var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var obj = {
    title: 'À propos',
    req: req
  };

  res.render('pages/public/about', obj);
});

module.exports = router;
