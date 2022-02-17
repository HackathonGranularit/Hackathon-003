const express = require('express')
const { getCustomers, getCustomerById } = require('../controllers/customer')
const router = express.Router()

router.get('/', (req,res) => {
    getCustomers(req,res)
})

router.get('/:id', (req,res) => {
    getCustomerById(req,res)
})

// router.route('/:id').get(getCustomerById)

module.exports = router
