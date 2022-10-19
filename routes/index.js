var express = require('express');
var router = express.Router();
var indexCtrl = require('../controllers/index')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/about', indexCtrl.aboutShow);
router.get('/projects', indexCtrl.projectsShow);
router.get('/contact', indexCtrl.contactShow);

module.exports = router;
