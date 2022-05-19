var express = require('express');
const { request } = require('../app');
var router = express.Router();
var blogImport = require('./sampleblogs')

// GET blogpost
router.get('/',(req, res, next)=> {
  let blogs = blogImport.blogPosts.map(function(element, index){
  return element
  });
  // Note: json works with objects even if they are in an Array. 
  res.json(blogs)
  });
  
// getting a single blog
router.get('singleblog/:blogId', (req,res, next) => {
  let blogId = req.params.blogId;
  const findBlogId = function(blogId) {
  const foundBlog = blogImport.blogPosts.find(element => element.id === blogId);
  console.log(foundBlog);
  }
  res.send(findBlogId)
})
 
 

  


  // listedPosts()

  // function listedPosts(blogPosts){
  //   console.log(blogPosts)
  // }





  







module.exports = router; 