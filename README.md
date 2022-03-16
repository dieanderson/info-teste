## Sobre info-teste:

Desenvolvimento de API em Node.Js para CRUD de veículos utilizando MongoDb, testes unitários com Mocha e Chai.

## Recursos utilizados no desenvolvimento:
Node.Js;
Express.Js;
Conceito RestFul;
MongoDb;
Mongoose;
JSON data (para retornar os dados);
PostMan (testar a API criada);
Mocha;
Chai;

## Executar Localmente:

Você deve simplesmente clonar o repositório do projeto na sua máquina e instalar as dependências.

## Pré-Requisitos:

Antes de instalar as dependências no projeto, você precisa já ter instalado na sua máquina:

Node.Js;
MongoDb;

## Instalando as Dependências:

npm install

Ao digitar a instrução acima, automaticamente ele irá baixar todas as dependências listadas no arquivo package.json

## Executando a Aplicação:

Iniciar o server para o projeto ser executado localmente: npm run dev

## Consumindo a API:

A API estará disponível em http://localhost:8080/api/veiculos e possui os seguintes métodos:

GET: retorna todos os veículos, se informado o id do veículo(/id) retorna o veículo em questão;

POST: cadastra um veículo, deve-se informar no body(PLACA, CHASSI, RENAVAN, MODELO, MARCA, ANO);

PUT: altera um veículo, informar o id do veículo(/id) e no body o que foi modificado;

DELETE: remove um veículo, informar o id do veículo(/id);

