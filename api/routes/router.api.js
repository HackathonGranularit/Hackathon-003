const express = require('express');
const { getAllCustomers } = require('../controllers/controller.getAllCustomers');
const { sendEmail } = require('../controllers/controller.sendEmails');

const apiRouter = express.Router();


apiRouter.route('/customers').get(getAllCustomers);
apiRouter.route('/email').post(sendEmail);


module.exports = apiRouter;


