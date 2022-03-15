const router = require('express').Router()

router.get('/veiculos', (req,res) => {
    res.send({
        ok: 123
    })
})

module.exports = router