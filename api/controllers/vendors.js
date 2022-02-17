const Vendor = require("../models/Vendor")

const asyncHandler = require("../middleware/async")

module.exports.getVendors = asyncHandler(async (req, res, next) => {
  const vendors = await Vendor.find()
  res.status(200).json({ count: vendors.length, data: vendors })
})

module.exports.getVendorsById = asyncHandler(async (req, res, next) => {
  const id = req.params.id
  const vendors = await Vendor.findById(id).catch(() => {
    res.status(400).json({ data: "Invalid id" })
  })

  if (!vendors) {
    res.status(404).json({ data: `Vendor with id:${id} not found` })
  }
  res.status(200).json({ count: 1, data: vendors })
})
