test('testando Cliente', async () => {
const dbsql = require("./db/dbsql");

  const  purchases = await dbsql.selectPurchases();
    expect(purchases.length).toBeGreaterThan(0)

//testando se o resultado não é um array vazio

});
