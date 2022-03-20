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
    sql2 = 'UPDATE product SET quantity=quantity-1 WHERE name=$1'
    const query1=await conn.query(sql, values)
  const query2= await conn.query(sql2,[customer.product])
    return  query1;
}


async function updateClientById(id, customer){
    const conn = await connect();
    const sql = 'UPDATE Client SET name=$1,tel=$2,email=$3 WHERE Client.id=$4';
    const values = [ customer.name, customer.tel, customer.email,id];
    return await conn.query(sql, values);
}
async function updateProductById( customer){
    const conn = await connect();
    const sql = 'UPDATE Product SET quantity=$1,price=$2 WHERE Product.name=$3';
    const values = [ customer.quantity, customer.price, customer.name];
    return await conn.query(sql, values);
}
async function updatePurchasesById(id, customer){
    const conn = await connect();
    const sql = 'UPDATE purchases SET idclient=$1,product=$2,date=$3 WHERE idpurchases=$4';
    const values = [ customer.idclient, customer.product, customer.date,id];
    return await conn.query(sql, values);
}


async function deleteClientById(id){
      const client = await connect();
      const sql = 'DELETE FROM Client where Client.id=$1;';
      return await client.query(sql, [id]);
}
async function deleteProductById(name){
var nome=14
      const client = await connect();
      const sql = 'DELETE FROM Product where name=$1;';
      return await client.query(sql, [nome]);
}
async function deletePurchasesById(id){
      const client = await connect();
      const sql = 'DELETE FROM Purchases where idpurchases=$1;';
      return await client.query(sql, [id]);
}


async function selectPurchasesByClient(id){
      const client = await connect();
      const sql = 'SELECT * FROM purchases WHERE purchases.idclient=$1;';
      const rows = await client.query(sql, [id]);
      return rows.rows
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

async function selectPurchasesByCountandDate(type,data){
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
      const sql = 'SELECT product,COUNT(product) AS total  from purchases WHERE to_char(DATE, $1)= to_char(date($2) , $1) GROUP BY product ORDER BY total desc';
      const rows =  await client.query(sql,[typedata,data]);
      return rows.rows;
}

async function selectClientBySpentandDate(type,data){
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
      const sql = 'SELECT client.name, SUM(product.price) AS spent from purchases JOIN client ON purchases.idclient=client.id JOIN product ON product.name=purchases.product WHERE   to_char(DATE, $1)= to_char( date($2) , $1) GROUP BY  client.name ORDER BY spent desc';
      const rows =  await client.query(sql,[typedata,data]);
      return rows.rows;
}








module.exports = {selectClient,selectProduct,selectPurchases,insertClient,insertProduct,insertPurchases,updateClientById,updateProductById,updatePurchasesById,deleteClientById,deleteProductById,deletePurchasesById,selectPurchasesByClient,selectPurchasesByClientandDate,selectPurchasesByCountandDate,selectClientBySpentandDate}
