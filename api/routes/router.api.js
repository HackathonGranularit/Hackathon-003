const express = require('express');
const { getAllCustomers } = require('../controllers/controller.getAllCustomers');

const apiRouter = express.Router();


apiRouter.route('/customers').get(getAllCustomers);


module.exports = apiRouter;


