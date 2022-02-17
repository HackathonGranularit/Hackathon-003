const Customer = require("../models/Customer");

//This controller gets all our customers
const getAllCustomers = async (req, res) => {
  console.log("getAllCustomers");
  try {
    const allCustomers = await Customer.find();
    res.status(200).json(allCustomers);
  } catch (e) {
      //Catch any errors 
    res.status(500).res.json({ message: 'Something wrong happened' });
    console.error(e); 
    }
};

module.exports = {getAllCustomers};
