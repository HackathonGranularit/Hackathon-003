const express = require("express")
const { getVendorById, getVendors } = require("../controllers/vendors")
const router = express.Router()

router.get("/", (req, res) => {
  getVendors(req, res)
})

router.get("/:id", (req, res) => {
  getVendorById(req, res)
})

// router.route('/:id').get(getCustomerById)

module.exports = router
