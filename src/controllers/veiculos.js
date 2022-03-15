const VeiculosModel = require('../models/veiculos')

async function get(req, res) {
    const { id } = req.params
    const obj = id ? { _id: id } : null
    
    const veiculos = await VeiculosModel.find( obj )
    res.send(veiculos)

}

module.exports = {
    get,
}