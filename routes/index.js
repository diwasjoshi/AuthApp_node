var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', ensureUserAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Profile' });
});

function ensureUserAuthenticated(req, res, next){console.log(req.isAuthenticated());
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/users/login');
}
module.exports = router;
