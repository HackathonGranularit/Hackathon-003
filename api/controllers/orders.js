const asyncHandler = require('../middleware/async');
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
    res.status(201).json({ success: true, data: createdOrder });

})


module.exports.getOrderById = asyncHandler((req,res,next) => {
    if(req.params.id){
        res.status(400).json({ success: true, data: 'Missing id' });
    }
    const order = Order.findById(req.params.id)
    res.status(201).json({ success: true, data: order });
})