const Order = require('../models/Orders')

// get all orders no filter
const getOrders = async (req,res) => {
    try {
        const orders =  await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({message:"Unable to get orders"});
    }
}

module.exports = getOrders;