var express = require('express');
var router = express.Router();
var blogPosts = require('./sampleBlog');

//GET blogpost
router.get('/',(req, res, next)=> {
    res.json(blogPosts);
  });
  







module.exports = router; 