async function connect() {
    if (global.connection)
        return global.connection.connect();

    const { Pool } = require('pg');
    const pool = new Pool({
        connectionString: 'postgres://whwnptzy:A30EQMKZdvZtHdQ_sFUPsj4SA5g4auad@motty.db.elephantsql.com/whwnptzy'
    });
    const client = await pool.connect();
   console.log("Conectado");

   global.connection = pool;
   return pool.connect();
}

async function selectClient(){
    const conn = await connect();
    const rows = await conn.query('SELECT * FROM client');
    return rows.rows;
}
async function selectProduct(){
    const conn = await connect();
    const rows = await conn.query('SELECT * FROM product');
    return rows.rows;
}
async function selectPurchases(){
    const conn = await connect();
    const rows = await conn.query('SELECT * FROM purchases');
    return rows.rows;
}


async function insertClient(customer){
    console.log("função chamadaS")
    const conn = await connect();
    const sql = 'INSERT INTO client(name,tel,email) VALUES ($1,$2,$3);';;
    const values = [customer.name, customer.tel, customer.email];
    return await conn.query(sql, values);
}
async function insertProduct(customer){
    const conn = await connect();
    const sql = 'INSERT INTO Product(name,quantity,price) VALUES ($1,$2,$3);';
    const values = [customer.name, customer.quantity, customer.price];
    return await conn.query(sql, values);
}
async function insertPurchases(customer){
    const conn = await connect();
    const sql = 'INSERT INTO Purchases(idclient,product,date) VALUES ($1,$2,$3);';
    const values = [customer.idclient, customer.product, customer.date];
    return await conn.query(sql, values);
}


async function updateClientById(id, customer){
    const conn = await connect();
    const sql = 'UPDATE Client SET name=$1,tel=$2,email=$3 WHERE Client.id=$4';
    const values = [ customer.name, customer.tel, customer.email,id];
    return await conn.query(sql, values);
}
async function updateProductById(id, customer){
    const conn = await connect();
    const sql = 'UPDATE Product SET name=$1,quantity=$2,price=$3 WHERE Product.name=$4';
    const values = [ customer.name, customer.quantity, customer.price,id];
    return await conn.query(sql, values);
}
async function updatePurchasesById(id, customer){
    const conn = await connect();
    const sql = 'UPDATE Purchases SET idClient=$1,product=$2,price=$3,date=$4 WHERE Purchase.idProduct=$5';
    const values = [ customer.idClient, customer.product, customer.price, customer.date,id];
    return await conn.query(sql, values);
}


async function deleteClientById(id){
      const client = await connect();
      const sql = 'DELETE FROM Client where Client.id=$1;';
      return await client.query(sql, [id]);
}
async function deleteProductById(id){
      const client = await connect();
      const sql = 'DELETE FROM Product where Product.name=$1;';
      return await client.query(sql, [id]);
}
async function deletePurchasesById(id){
      const client = await connect();
      const sql = 'DELETE FROM Purchases where Purchase.idProduct=$1;';
      return await client.query(sql, [id]);
}


async function selectPurchasesByClient(id){
      const client = await connect();
      const sql = 'SELECT * FROM purchases WHERE purchases.idclient=$1;';
      return await client.query(sql, [id]);
}

async function selectPurchasesByClientandDate(id,type,data){
  var typedata='';
  switch (type) {
                  case 'day':
                  typedata='DD-MM-YYYY';
                  break;
                  case 'month':
                  typedata='MM-YYYY';
                  break;
                  case 'year':
                  typedata='YYYY';
                  break;
                  default:
                  typedata='DD-MM-YYYY';
                }
      console.log(typedata)
      const client = await connect();
      const sql = 'SELECT * from purchases WHERE purchases.idclient=$1  AND  to_char(DATE, $2)= to_char(date($3) , $2);';
      const rows =  await client.query(sql,[id,typedata,data]);
      return rows.rows;
}







module.exports = {selectClient,selectProduct,selectPurchases,insertClient,insertProduct,insertPurchases,updateClientById,updateProductById,updatePurchasesById,deleteClientById,deleteProductById,deletePurchasesById,selectPurchasesByClientandDate}
