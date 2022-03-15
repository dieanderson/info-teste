const router = require('express').Router()

const VeiculosController = require('../controllers/veiculos')

router.get('/veiculos/:id?', VeiculosController.get)
router.post('/veiculos', VeiculosController.post)
router.put('/veiculos/:id', VeiculosController.put)
router.delete('/veiculos/:id', VeiculosController.remove)

module.exports = router