const express = require('express');
const { getAllCustomers } = require('../controllers/controller.getAllCustomers');
const getallorders = require('../controllers/controller.getallorders')

const apiRouter = express.Router();


apiRouter.route('/customers').get(getAllCustomers);

apiRouter.route('/orders').get(getallorders)


module.exports = apiRouter;


