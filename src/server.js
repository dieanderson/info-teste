const express = require('express')
const cors = require('cors')

const db = require('./database/db')
const routes = require('./routes/routes')

const app = express()

//conexao com BD
db.connect()

//habilita CORS
app.use(cors())

//habilita recepção de dados via json
app.use(express.json())

//definindo as rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.port || 8080
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

module.exports = app
