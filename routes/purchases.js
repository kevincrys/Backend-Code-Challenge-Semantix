var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

router.get('/', function(req, res, next) {
  var purchases = dbsql.selectPurchases();
   purchases.then(sql => {res.send(sql)})

})
module.exports = router;
