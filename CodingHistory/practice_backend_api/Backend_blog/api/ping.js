const router = require('express').Router();


router.get('/ping', (req, res) => {
  res.json({
    "Success": true 
 }).status(200); 
})


// router.post('/ping', function(req, res) {
 

// });





module.exports = router;