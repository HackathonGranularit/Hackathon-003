const Customer = require("../models/Customer");

//This controller gets all our customers
const getAllCustomers = async (req, res) => {
  console.log("getAllCustomers");
  try {
    const allCustomers = await Customer.find();
    res.status(200).send(allCustomers);
  } catch (e) {
      //Catch any errors 
    res.status(500).send({ message: 'Something wrong happened' });
    console.error(e); 
    }
};

module.exports = {getAllCustomers};
