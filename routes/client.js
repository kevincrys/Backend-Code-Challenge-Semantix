var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

router.get('/', function(req, res, next) {
  var client = dbsql.selectClient();
    client.then(sql => {res.send(sql)})
   client.catch(function(e) {
  console.log(e);
    })
})

router.post('/:name/:tel/:email', (req, res) => {
  var client = dbsql.insertClient({name: req.params.name,tel: req.params.tel,email: req.params.email});
  client.then(sql => {res.send(sql)})
  client.catch(function(e) {
  console.log(e);
    })

    });
  router.put('/:id/:name/:tel/:email', (req, res) => {
    var client = dbsql.updateClientById(req.params.id,{name: req.params.name,tel: req.params.tel,email: req.params.email});
      client.then(sql => {res.send({sql})})
     client.catch(function(e) {
    console.log(e);
      })

      });
  router.delete('/:id', (req, res) => {
    var client = dbsql.deleteClientById(req.params.id);
      client.then(sql => {res.send(sql)})
     client.catch(function(e) {
    console.log(e);
      })

          });




module.exports = router;
