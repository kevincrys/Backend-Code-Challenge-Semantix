test('testando Cliente', async () => {
const dbsql = require("./db/dbsql");

  const  purchases = await dbsql.selectPurchases();
    expect(purchases.length).toBeGreaterThan(0)



});
