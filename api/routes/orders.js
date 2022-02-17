const express = require('express')
const { createOrder, getOrderById } = require('../controllers/orders')

const router = express.Router()

router.post('/',(req,res) => {
    createOrder(req,res)
})

router.get('/:id', (req,res) => {
    getOrderById(req,res)
})


module.exports = router