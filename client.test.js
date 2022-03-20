test('testando Cliente', async () => {
const dbsql = require("./db/dbsql");

  const  client = await dbsql.selectClient();
    expect(client.length).toBeGreaterThan(0)



});
