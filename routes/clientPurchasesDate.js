var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

//operação de listagem de compra por cliente em data determinada
router.get('/:id/:type/:date', function(req, res, next) {
  var purchases= dbsql.selectPurchasesByClientandDate(req.params.id,req.params.type,req.params.date)
    purchases.then(sql => {res.send(sql)})
    purchases.catch(function(e) {
   console.log(e);
     })
})
module.exports = router;
