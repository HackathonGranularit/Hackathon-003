const express = require('express')
const { createOrder, getOrderById,getOrders, modifyOrder } = require('../controllers/orders')

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

router.put('/:id',(req,res) => {
    modifyOrder(req,res)
})

module.exports = router