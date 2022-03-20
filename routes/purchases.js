var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

//operação de leitura dos dados de compras cadastradas
router.get('/', function(req, res, next) {
  var purchases = dbsql.selectPurchases();
   purchases.then(sql => {res.send(sql)})
   purchases.catch(function(e) {
  console.log(e);
    })
})

//operação de criação de dados de compras 
router.post('/:idclient/:product/:date', (req, res) => {

  var client = dbsql.insertPurchases({idclient: req.params.idclient, product: req.params.product, date: req.params.date});
  client.then(sql => {res.send(sql)})
  client.catch(function(e) {
  console.log(e);
    })

    });

//operação de atualização de dados de compras cadastradas
  router.put('/:id/:idclient/:product/:date', (req, res) => {
    var client = dbsql.updatePurchasesById(req.params.id,{idclient: req.params.idclient,product: req.params.product,date: req.params.date});
      client.then(sql => {res.send(sql)})
     client.catch(function(e) {
    console.log(e);
      })

      });
      

//operação de deleção de dados de compras cadastradas
  router.delete('/:id', (req, res) => {
    var client = dbsql.deletePurchasesById(req.params.id);
      client.then(sql => {res.send(sql)})
     client.catch(function(e) {
    console.log(e);
    })
    });
module.exports = router;
