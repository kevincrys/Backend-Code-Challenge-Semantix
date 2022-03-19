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
    const sql = 'INSERT INTO client(name,tel,email) VALUES ($1,$2,$3);';
    const values = [customer.idClient, customer.product, customer.price, customer.date];
    return await conn.query(sql, values);
}


async function updateClientById(id, customer){
    const conn = await connect();
    const sql = 'UPDATE Client SET name=?,tel=?,email=? WHERE Client.id=?';
    const values = [ customer.name, customer.tel, customer.email,id];
    return await conn.query(sql, values);
}
async function updateProductById(id, customer){
    const conn = await connect();
    const sql = 'UPDATE Product SET name=?,quantity=?,price=? WHERE Product.name=?';
    const values = [ customer.name, customer.quantity, customer.price,id];
    return await conn.query(sql, values);
}
async function updatePurchasesById(id, customer){
    const conn = await connect();
    const sql = 'UPDATE Purchases SET idClient=?,product=?,price=?,date=? WHERE Purchase.idProduct=?';
    const values = [ customer.idClient, customer.product, customer.price, customer.date,id];
    return await conn.query(sql, values);
}


async function deleteClientById(id){
      const client = await connect();
      const sql = 'DELETE FROM Client where Client.id=?;';
      return await client.query(sql, [id]);
}
async function deleteProductById(id){
      const client = await connect();
      const sql = 'DELETE FROM Product where Product.name=?;';
      return await client.query(sql, [id]);
}
async function deletePurchasesById(id){
      const client = await connect();
      const sql = 'DELETE FROM Purchases where Purchase.idProduct=?;';
      return await client.query(sql, [id]);
}










module.exports = {selectClient,selectProduct,selectPurchases,insertClient,insertProduct,insertPurchases,updateClientById,updateProductById,updatePurchasesById,deleteClientById,deleteProductById,deletePurchasesById}
