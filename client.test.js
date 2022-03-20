test('testando Cliente', async () => {
const dbsql = require("./db/dbsql");

  const  client = await dbsql.selectClient();
    expect(client.length).toBeGreaterThan(0)
//testando se o resultado não é um array vazio


});
