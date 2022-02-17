const Order = require('../models/Orders')

module.exports.createOrder = asyncHandler(async (req,res,next) => {

    const order = {
        gasSize:req.body.gasSize,
        state:req.body.state,
        customerId:req.body.customerId
    }
    if(!order.gasSize || !order.state){
        res.status(400).json({ success: true, data: 'Missing required field' });
    }

    const createdOrder = Order.create(order)
    res.status(201).json({ success: true, data: order });

})