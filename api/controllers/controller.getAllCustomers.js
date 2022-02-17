const Customer = require("../models/Customer");

//This controller gets all our customers
const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await Customer.find();
    res.status(200).send(allCustomers);
  } catch (e) {
      //Catch any errors 
    res.status(500).json({ message: 'Something wrong happened' });
    console.error(e); 
  }
};

// get single customer
const getSingleCustomer = async (req, res) => {
  console.log("getSingleCustomer");
  try {
    const customer = await Customer.findById(req.params.id);
    res.status(200).json(customer);
  } catch (e) {
    res.status(500).json({ message: 'Something wrong happened' });
    console.error(e);
  };
}

module.exports = {
  getAllCustomers,
  getSingleCustomer
};
