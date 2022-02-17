const mongoose = require("mongoose");
const db = require("api/config/db.js")
const customerSchema = mongoose.Schema({
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

const Customer = mongoose.model("Customer", customerSchema);
// console.log(Customer);

module.exports = Customer;
