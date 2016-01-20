var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET Hello World page. */
router.get('/helloworld', function(req, res) {
    res.render('helloworld', { title: 'Hello, World!' });
});

router.get('/userlist', function(req, res) {
  req.db.get("usercollection").find({},{},function(e,doc){
    res.render('userlist', {userlist: doc})
  }); //this is probably asynchronous and will fail.
})
module.exports = router;
