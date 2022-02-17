const Vendor = require("../models/Vendor.js");

const getAllVendors = (req, res) => {
  Vendor.find()
    .then((vendors) => {
      res.json(vendors);
    })
    .catch((e) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
};

const getSingleVendor = (req, res) => {
  const vendorId = req.params.id;
  Vendor.findById(vendorId)
    .then((vendor) => {
      res.json(vendor);
    })
    .catch((e) => {
      res.status(500).json({
        message: "Something went wrong",
      });
    });
};

module.exports = {
  getAllVendors,
  getSingleVendor,
};
