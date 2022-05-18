var express = require('express');
var router = express.Router();


// GET datetime page
router.get('/',(req, res, next)=> {
    res.json(`${new Date()}`);
  });
  

module.exports = router;