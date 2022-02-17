const express = require('express');
const { getAllCustomers } = require('../controllers/controller.getAllCustomers');
const { sendEmail } = require('../controllers/controller.sendEmails');
const getallorders = require('../controllers/controller.getallorders')
const createOrder = require('../controllers/controller.createOrder')

const apiRouter = express.Router();


apiRouter.route('/customers').get(getAllCustomers);
apiRouter.route('/email').post(sendEmail);

apiRouter.route('/orders').get(getallorders)
apiRouter.route('/order').post(createOrder)

module.exports = apiRouter;


