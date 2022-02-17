const Vendor = require("../models/Vendor.js");

const getAllVendors = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json({
      msg: "Success",
      status: 200,
      vendors,
    });
  } catch (error) {
    res.status(500).json({
      message: `Something went wrong`,
    })
  }
};

const getSingleVendor = async(req, res) => {
  const vendorId = req.params.id;
  try {
    const vendor = await Vendor.findById(vendorId);
    res.json({
      msg: "Success",
      status: 200,
      vendor,
    })
  } catch (error) {
    res.status(500).json({
      message: `Vendor with that an id of ${vendorId} does not exist`,
    });
  };
};

module.exports = {
  getAllVendors,
  getSingleVendor,
};
