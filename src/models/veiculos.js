const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    //O ID é criado automaticamente pelo mongo
    placa: String,
    chassi: String,
    renavan: String,
    modelo: String,
    marca: String,
    ano: String,
})

const Model = mongoose.model('veiculos', schema)

module.exports = Model