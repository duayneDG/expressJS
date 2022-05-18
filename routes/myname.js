var express = require('express');
var router = express.Router();

router.get('myname', function(req, res, next){
    res.render('Duayne')
})




module.exports = router;
