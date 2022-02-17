const express = require('express')
const { createOrder, getOrderById,getOrders } = require('../controllers/orders')

const router = express.Router()

router.post('/',(req,res) => {
    createOrder(req,res)
})

router.get('/:id', (req,res) => {
    getOrderById(req,res)
})

router.get('/', (req,res) => {
    getOrders(req,res)
})

module.exports = router