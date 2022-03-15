const VeiculosModel = require('../models/veiculos')

async function get(req, res) {
    const { id } = req.params
    const obj = id ? { _id: id } : null
    
    const veiculos = await VeiculosModel.find( obj )
    res.send(veiculos)
}

async function post(req,res) {
    const {
        placa,
        chassi,
        renavan,
        modelo,
        marca,
        ano,    
    } = req.body

    const veiculos = new VeiculosModel({
        placa,
        chassi,
        renavan,
        modelo,
        marca,
        ano,     
    })

    veiculos.save()
    res.send({ message: 'success' })
}

module.exports = {
    get,
    post,
}