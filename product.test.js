test('testando produtos', async () => {
const dbsql = require("./db/dbsql");

  const product = await dbsql.selectProduct();
    expect(product.length).toBeGreaterThan(0)



});
