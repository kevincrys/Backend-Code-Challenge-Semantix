var express = require('express');
var app = express();

var dbsql = require('./db/dbsql');
//var client = dbsql.selectClient();
//  client.then(sql => {console.log(sql)})

var product = dbsql.selectProduct();
 product.then(sql => {console.log(sql)})

//var Purchases = dbsql.selectPurchases();
 //Purchases.then(sql => {console.log(sql)})

//var client = dbsql.insertClient({name:'kevin' ,tel:'tel:(21)-78994-4768',email:'ikevin@gmail.com'})
//  client.then(sql => {console.log(sql)})

//var product = dbsql.insertProduct({name:'calça' ,quantity:50 ,price:80.00})
//  product.then(sql => {console.log(sql)})

//var Purchases = dbsql.insertPurchases({})
//  Purchases.then(sql => {console.log(sql)})



app.listen(3000, function(){});
