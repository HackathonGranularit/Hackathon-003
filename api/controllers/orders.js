const getDistance = require('../integrations/gcp');
const asyncHandler = require('../middleware/async');
const Order = require('../models/Orders');
const { getCustomerById } = require('./services/customer');
const { fetchVender } = require('./services/vender');

module.exports.createOrder = asyncHandler(async (req,res,next) => {


    if(!req.body.gasSize || !req.body.customerId || !req.body.location){
        res.status(400).json({ success: true, data: 'Missing required field' });
    }


    
    if(!customer){
        res
        .status(404)
        .json({data: `Customer with id:${req.params.id} not found`})
    }
    const customerLocation = req.body.location
    const vender = await fetchVender()
    const venderLocation = vender.location

    const distance = await getDistance(customerLocation,venderLocation)
    
    const order = {
        gasSize:req.body.gasSize,
        customerId:req.body.customerId,
        distance:distance
    }


    const createdOrder = Order.create(order)
    res.status(201).json({ success: true, data: createdOrder });

})


module.exports.getOrderById = asyncHandler(async(req,res,next) => {
    if(!req.params.id){
        res.status(400).json({ data: 'Missing id' });
    }
    const order = await Order.findById(req.params.id)
    .catch(() => {
        res
        .status(400)
        .json({data:'Invalid id'})
    })

    if(!order){
        res
        .status(404)
        .json({data: `Customer with id:${req.params.id} not found`})
    }

    res.status(200).json({ success: true, data: order })
    
})

module.exports.getOrders = asyncHandler(async(req,res,next) => {
    const orders = await Order.find()
    res.status(200).json({ success: true, data: orders });
})

module.exports.modifyOrder = asyncHandler(async(req,res,next) => {
    const id = req.params.id
    if(!id){
        res.status(400).json({ data: 'Missing id' });
    }

    const order = await Order.findByIdAndUpdate(id,req.body,{
        new: true,
        runValidators: true
      })
      .catch(() => {
        res.status(500).json({ data: 'Something went wrong updating the order' });
      })

      if(!order){
        res.status(404).json({ data: `Order id ${id} not found` });
      }

      res.status(200).json({ success: true, data: order });
})