const express = require('express');
const { getAllCustomers } = require('../controllers/controller.getAllCustomers');
const { sendEmail } = require('../controllers/controller.sendEmails');
const getallorders = require('../controllers/controller.getallorders')

const apiRouter = express.Router();


apiRouter.route('/customers').get(getAllCustomers);
apiRouter.route('/email').post(sendEmail);

apiRouter.route('/orders').get(getallorders)


module.exports = apiRouter;


