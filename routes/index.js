var express = require('express');
var router = express.Router();
var functions = require('../public/javascripts/logic.js');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: 'express'});
});

router.post('/', function(req, res, next){
  var departureCity= req.body.departurecity;
  var arrivalCity= req.body.arrivalcity;
  var classUpgrade= req.body.upgrade;
  var wifi= req.body.wifi;
  var discountCode= req.body.discount;
  var bags= req.body.bags;
  var total= functions.cost(departureCity, arrivalCity, bags, wifi, discountCode) + Number(classUpgrade)
  console.log(total);
  res.render('index', { price: total});
})

module.exports = router;
