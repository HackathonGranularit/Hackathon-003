const express = require('express');
const sendEmail= require('../controllers/controller.sendEmails');
const getallorders = require('../controllers/controller.getallorders');
const getAllCustomers = require('../controllers/controller.getAllCustomers');

const apiRouter = express.Router();


apiRouter.route('/email').post(sendEmail); //send email
apiRouter.route('/orders').get(getallorders) //get all orders & create order
apiRouter.route('/customers').get(getAllCustomers) //get all customers;

module.exports = apiRouter;


