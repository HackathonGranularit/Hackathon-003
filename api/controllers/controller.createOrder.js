const Order = require('../models/Orders')
const createOrder = async (req, res) => {
    try {
        const request = req.body
        await Order.create({ ...request })
            .then(data => {
                res.status(200).json(data);
            } 
            )
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Unable to create order",
            err: error
        });
    }
    
}

module.exports = createOrder;