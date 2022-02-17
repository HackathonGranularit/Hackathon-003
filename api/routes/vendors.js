const express = require('express')
const { getVendor, getVendorById } = require('../controllers/vendor')
const router = express.Router()

router.get('/', (req,res) => {
    getVendor(req,res)
})

router.get('/:id', (req,res) => {
    getVendorById(req,res)
})

// router.route('/:id').get(getCustomerById)

module.exports = router
