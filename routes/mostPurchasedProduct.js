var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

//operação de listagem de produtos mais vendidos em data determinada
router.get('/:type/:date', function(req, res, next) {
  var purchases= dbsql.selectPurchasesByCountandDate(req.params.type,req.params.date)
    purchases.then(sql => {res.send(sql)})
    purchases.catch(function(e) {
   console.log(e);
     })
})
module.exports = router;
