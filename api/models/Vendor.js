const mongoose = require("mongoose");

const vendorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    match: [
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
    ],
  },
  location: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

const Vendor = mongoose.model("Vendor", vendorSchema);

module.exports = Vendor;
