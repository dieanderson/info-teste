const express = require('express')
//const path = require('path')

//const db = require('./database')
const routes = require('./routes/routes')

const app = express()

//conexao com BD
//db.connect()

//habilita recepção de dados via POST
app.use(express.urlencoded({ extended: true }))

//definindo as rotas
app.use('/api', routes)

//executando o servidor
const port = process.env.port || 8080
app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))

