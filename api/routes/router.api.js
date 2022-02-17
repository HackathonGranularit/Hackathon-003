const express = require('express');
const sendEmail= require('../controllers/controller.sendEmails');
const getallorders = require('../controllers/controller.getallorders');
const dispatchOrder = require('../controllers/controller.dispatchOrder');
const {getAllCustomers, getSingleCustomer} = require('../controllers/controller.getAllCustomers');
const { getAllVendors, getSingleVendor } = require('../controllers/controllers.vendors');

const apiRouter = express.Router();


apiRouter.route('/email').post(sendEmail); //send email
apiRouter.route('/orders')
    .get(getallorders) //get all orders
    .patch(dispatchOrder); //dispatch order


apiRouter.route('/customers').get(getAllCustomers) //get all customers;
apiRouter.route('/vendors').get(getAllVendors) //get all vendors;
apiRouter.route('/vendors/:id').get(getSingleVendor) //get single vendor;
apiRouter.route('/customer/:id').get(getSingleCustomer) //get single customer;

module.exports = apiRouter;


