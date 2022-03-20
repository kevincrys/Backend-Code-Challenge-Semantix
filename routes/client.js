var express = require('express');
var router = express.Router();
const dbsql = require("../db/dbsql");

router.get('/', function(req, res, next) {
  var client = dbsql.selectClient();
    client.then(sql => {res.send(sql)})
  //  client.catch(function(e) {
  //console.log(e);
  //  })
})
module.exports = router;
