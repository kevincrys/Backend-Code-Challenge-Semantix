var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

//operação de leitura dos dados de usuários cadastrados
router.get('/', function(req, res, next) {
  var client = dbsql.selectClient();
    client.then(sql => {res.send(sql)})
   client.catch(function(e) {
  console.log(e);
    })
})

//operação de criação de dados de usuários 
router.post('/:name/:tel/:email', (req, res) => {
  var client = dbsql.insertClient({name: req.params.name,tel: req.params.tel,email: req.params.email});
  client.then(sql => {res.send(sql)})
  client.catch(function(e) {
  console.log(e);
    })

    });

//operação de atualização dos dados de usuários cadastrados
  router.put('/:id/:name/:tel/:email', (req, res) => {
    var client = dbsql.updateClientById(req.params.id,{name: req.params.name,tel: req.params.tel,email: req.params.email});
      client.then(sql => {res.send({sql})})
     client.catch(function(e) {
    console.log(e);
      })

      });

//operação de deleção dos dados de usuários cadastrados
  router.delete('/:id', (req, res) => {
    var client = dbsql.deleteClientById(req.params.id);
      client.then(sql => {res.send(sql)})
     client.catch(function(e) {
    console.log(e);
      })

          });




module.exports = router;
