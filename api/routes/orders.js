const express = require('express')
const { createOrder } = require('../controllers/orders')

const router = express.Router()

router.post('/',(req,res) => {
    createOrder(req,res)
})

module.exports = router