var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

router.get('/:id', function(req, res, next) {
  var purchases= dbsql.selectPurchasesByClient(req.params.id)
    purchases.then(sql => {res.send(sql)})
    purchases.catch(function(e) {
   console.log(e);
     })

})
module.exports = router;
