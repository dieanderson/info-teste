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

    const veiculo = new VeiculosModel({
        placa,
        chassi,
        renavan,
        modelo,
        marca,
        ano,     
    })

    veiculo.save()
    res.send({ message: 'success' })
}

async function put(req,res) {
    const { id } = req.params

    const veiculo = await VeiculosModel.findOneAndUpdate({ _id: id }, req.body, { new: true })

    res.send({ 
        message: 'success', 
        veiculo,
    })
}

async function remove(req,res) {
    const { id } = req.params

    const remove = await VeiculosModel.deleteOne({ _id: id })

    const msg = remove.deletedCount ? 'success' : 'error'

    res.send({ message: msg })
}

module.exports = {
    get,
    post,
    put,
    remove,
}