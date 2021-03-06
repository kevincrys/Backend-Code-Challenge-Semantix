var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

//operação de leitura dos dados de produtos cadastrados
router.get('/', function(req, res, next) {
  var product = dbsql.selectProduct();
   product.then(sql => {res.send(sql)})
   product.catch(function(e) {
  console.log(e);
    })
})

//operação de criaçao de dados de produtos cadastrados
router.post('/:name/:quantity/:price', (req, res) => {
  var client = dbsql.insertProduct({name: req.params.name,quantity: req.params.quantity,price: req.params.price});
  client.then(sql => {res.send(sql)})
  client.catch(function(e) {
  console.log(e);
    })

    });

//operação de atualização de dados de produtos cadastrados
  router.put('/:name/:quantity/:price', (req, res) => {
    var client = dbsql.updateProductById({name: req.params.name,quantity: req.params.quantity,price: req.params.price});
      client.then(sql => {res.send(sql)})
     client.catch(function(e) {
    console.log(e);
      })

      });

//operação de deleção de dados de produtos cadastrados
  router.delete('/:name', (req, res) => {
    var client = dbsql.deleteProductById(req.params.name);
      client.then(sql => {res.send(sql)})
   client.catch(function(e) {
    console.log(e);
     })
  });


module.exports = router;
