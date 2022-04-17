const express = require('express');
const router = express.Router();

//Junction Box
const employeeRouter = require('./employee.route.js');
const companyRouter = require('./company.route.js');
const taskRouter = require('./task.route.js');

//route and address 
router.use('/employee', employeeRouter);
router.use('/company', companyRouter);
router.use('/task', taskRouter);

module.exports = router;