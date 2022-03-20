var express = require('express');
var app = express();

var dbsql = require('./db/dbsql');


//recebendo arquivos com as rotas 
var client = require('./routes/client');
var product = require('./routes/product');
var purchases = require('./routes/purchases');
var clientPurchases = require('./routes/clientPurchases');
var clientPurchasesDate = require('./routes/clientPurchasesDate');
var mostPurchasedProduct = require('./routes/mostPurchasedProduct');
var mostSpendestClient = require('./routes/mostSpendestClient');

//defininindo rotas  
app.use('/client', client);
app.use('/product', product);
app.use('/purchases', purchases);
app.use('/clientPurchases', clientPurchases);
app.use('/clientPurchasesDate', clientPurchasesDate);
app.use('/mostPurchasedProduct', mostPurchasedProduct);
app.use('/mostSpendestClient', mostSpendestClient);

 //definindo porta 
 app.listen(3000, function(){});
