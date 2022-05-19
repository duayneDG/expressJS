var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.get('/myname', function(req, res, next){
    let firstName = req.query.firstName;
    let lastName = req.query.lastName;
    firstName = "Duayne"
    lastName = "Gordon"
    res.send(`The current user is: ${firstName} ${lastName}`)
})

router.get('/getone/:userNumber', (req, res) => {
  const userNumber = req.params.userNumber
  const foundUser = users[userNumber];
  });
// router.get('/myfavoritemovie', (req,res){
//   let favoriteMovie = "Interview with a Vampire"
// })



module.exports = router;
