const Customer = require('../models/Customer')

const asyncHandler = require('../middleware/async');


module.exports.getCustomers = asyncHandler(async (req,res,next) => {
    const customers = await Customer.find();
    res
    .status(200)
    .json({ count: customers.length, data: customers });
})

module.exports.getCustomerById = asyncHandler(async (req,res,next) => {
    const id = req.params.id
    const customer = await Customer.findById(id).catch(() => {
        res
        .status(400)
        .json({data:'Invalid id'})
    })

    if(!customer){
        res
        .status(404)
        .json({data: `Customer with id:${id} not found`})
    }
    res
    .status(200)
    .json({count: 1, data: customer})
} )

