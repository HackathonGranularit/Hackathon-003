const Customer = require("../models/Customer");

//This controller gets all our customers
const getAllCustomers = async (req, res) => {
  try {
    const allCustomers = await Customer.find();
    res.status(200).res.send(allCustomers);
  } catch (e) {
      //Catch any errors 
    res.status(500).res.send({ message: 'Something wrong happened' });
    console.error(e); 
    }
};

module.exports = {getAllCustomers};
