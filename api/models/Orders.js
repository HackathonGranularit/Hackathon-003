const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
  orderId: {
    type: String,
    required: true,
  },
  gasSize: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
    default: "New",
  },
  distance: {
    type: Number,
    required: true,
  },
  customerId: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
