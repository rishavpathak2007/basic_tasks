var express = require('express');
var router = express.Router();
const database = require('./users'); // import

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', );
});

// POST: saving somehing
// GET: showing a views page.
router.post('/send', function(req,res){
  const name_data = req.body.username;
  const feedback_data = req.body.feedback;

  database.create({
    username: name_data,
    userfeedback: feedback_data,
  })

  console.log(name_data, feedback_data);
  res.redirect("/");


});


router.get('/test' , function(req,res){
  database.find({})
  .then(function(data){
    console.log(data)
    res.render("test",{data:data}); 
  })
})

module.exports = router;
