const Customer = require('../../models/Customer')

module.exports.getCustomerById = async (id) => {
    const customer = await Customer.findById(id)
    return customer
}