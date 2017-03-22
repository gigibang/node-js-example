var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('about',{title:"about",
    name:'About Xiaoxing'});
});

module.exports = router;
