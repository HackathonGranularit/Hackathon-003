const express = require('express')
const { getVendor, getVendorById } = require('../controllers/vendor')
const {sendEmail} = require('../actions/sendEmail')
const router = express.Router()

router.get('/', (req,res) => {
    getVendor(req,res)
})

router.get('/:id', (req,res) => {
    getVendorById(req,res)
})
router.get('/mail/:id', (req,res) => {
    sendEmail(req.res)
})

// router.route('/:id').get(getCustomerById)

module.exports = router
