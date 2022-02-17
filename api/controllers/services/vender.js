const Vendor = require('../../models/Vendor')

module.exports.fetchVender = () => {
    const vender = Vendor.find()
    return vender[0]
}