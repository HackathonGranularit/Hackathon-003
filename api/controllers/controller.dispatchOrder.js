const { emailEventsEmitter } = require("../functions/func.emailSender");
const Order = require("../models/Orders");

const dispatchOrder = async (req, res) => {
  const orderId = req.params.id;
  try {
    let order = await Order.findOneAndUpdate(
      { id: orderId },
      {
        state: "dispatched",
      }
    );
    //Get the update order
    order = await Order.findOne({ id: orderId });

    //Notify our customer the email is dispatched
    emailEventsEmitter.emit("order-dispatched", order);
    //Return updated order
    res.status(200).json(order);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: "Could not dispatch order" });
  }
};

module.exports = dispatchOrder;
