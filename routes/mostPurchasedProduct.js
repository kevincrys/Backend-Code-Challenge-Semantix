var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

router.get('/:type/:date', function(req, res, next) {
  var purchases= dbsql.selectPurchasesByCountandDate(req.params.type,req.params.date)
    purchases.then(sql => {res.send(sql)})

})
module.exports = router;
