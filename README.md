# Backend-Code-Challenge-Semantix
Backend Code Challenge by Semantix

<h3>para usar o aplicativo do tipo api, basta iniciar ele usando node e acessar as endpoins explicadas abaixo, o aplicativo possui as seguintes funcionalidades</h3>

   -listar, cadastrar, atualizar e deletar um produto, cliente e compra.

   -filtrar as compras por cliente.

   -listar as compras de um cliente por dia, mês e ano.

   -listar de forma ordenada os produtos mais vendidos por dia, mês e ano.

   -listar de forma ordenada os clientes que mais gastam por dia, mês e ano.

 <br>

<h3>para as operações de crud para os dados do cliente , são usados os seguintes parametros</h3>

  -id: id inteiro que identifica o cliente no banco de  dados

  -name: string representando o nome do cliente

  -tel: string representando o telefone do cliente

  -email: string representando o Email do cliente

 <br>
<h3>as operações de crud  e seus endpoints  para os dados do cliente são:</h3>

listar clientes:
[GET] http://localhost:3000/client

criar clientes:
[POST] http://localhost:3000/client/name/tel/email

atualizar clientes:
[PUT] http://localhost:3000/client/id/name/tel/email

deletar clientes:
[DELETE] http://localhost:3000/client/id

<br>
<h3>para as operações de crud para os dados do produto , são usados os seguintes parametros</h3>

  -name: string representando o nome do produto

  -quantity: Inteiro representando a quantidade do produto em estoque

  -price: double representando o valor do produto

   <br>
<h3>as operações de crud  e seus endpoints para os dados do produto são:</h3>

listar produtos:
[GET] http://localhost:3000/product

criar produtos:
[POST] http://localhost:3000/product/name/quantity/price

atualizar produtos:
[PUT] http://localhost:3000/product/name/quantity/price

deletar produtos:
[DELETE] http://localhost:3000/product/name

<br>
<h3>para as operações de crud para os dados de compras, são usados os seguintes parametros</h3>

  -id: Inteiro que identifica  a compra no banco de  dados

  -idclient:  id inteiro que identifica o cliente que comprou o produto no banco de  dados

  -product: String que representa o produto comprado

  -date:String que representa a data de compra.

 <br>
<h3>as operações de crud  e seus endpoints para os dados de compras são:</h3>

listar produtos:
[GET] http://localhost:3000/purchases

criar produtos:
[POST] http://localhost:3000/purchases/idclient/product/date

atualizar produtos:
[PUT] http://localhost:3000/purchases/id/idclient/product/date

deletar produtos:
[DELETE] http://localhost:3000/purchases/id

<br>
<h3>parametros usados nas endpoints abaixo:</h3>

id: Inteiro que representa o id do cliente  e é usado para identificar o cliente no banco de dados .

type: String que representa o tipo de comparação de data, dia, mês e ano, onde basta passar  "day" para comparar por  dia, "month" por mês e "year" por ano.

date:String que representa a data a ser comparada, bastando passar data  ou String no padrão "YYYY-MM-DD".

<h3>Funcionalidades e seus respectivos endpoints </h3>
<br>
para filtrar as compras por cliente, basta acessar a seguinte endpoint, com o parametro id

[GET] http://localhost:3000/clientPurchases/id

para listar as compras de um cliente por dia, mês e ano, basta acessar a endpoint abaixo, com os parametros id, type e date.

[GET] http://localhost:3000/clientPurchasesDate/id/type/date

para listar de forma ordenada os produtos mais vendidos por dia, mês e ano. basta acessar a endpoint abaixo, com os parametros  type e date.

[GET] http://localhost:3000/mostPurchasedProduct/type/date

para listar de forma ordenada os clientes que mais gastam por dia, mês e ano. basta acessar a endpoint abaixo, com os parametros  type e date.

[GET] http://localhost:3000/mostSpendestClient/type/date


<h3>para realizar testes, basta rodar o comando nmp test</h3>
