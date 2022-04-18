// wrapper contain trycatch for error handling
const safeCall = require('../utils/safeCall.utils');
const Employee = require('../model/employee.model');

const _get = safeCall(async (request, response, _next) => {

    const employee = await Employee.find({});
    return response.json({ path: request.originalUrl, success: true, result: employee });

});

const _post = safeCall(async (request, response, _next) => {

    const data = { first_name, last_name, password, username } = request.body;
    await Employee.create(data);
    return response.status(201).json({ path: request.originalUrl, success: true, result: 'Employee created' });

});

const _delete = safeCall(async (request, response, _next) => {

    const employeeId = request.body.id;
    let deletedEmployee = await Employee.findByIdAndDelete(employeeId);

    deletedEmployee.deletedCount !== 0 ?
        response.json({ path: request.originalUrl, success: true, result: 'Employee deleted' })
        : response.json({ path: request.originalUrl, success: false, result: 'Employee not found' });
});

const _put = safeCall(async (request, response, _next) => {

    const employeeId = request.body.id;
    const data = {
        first_name, last_name, password, username
    } = request.body;

    let updatedEmployee = await Employee.findOneAndUpdate(employeeId, data, { new: true });
    return response.json({ path: request.originalUrl, success: true, result: updatedEmployee });

});


module.exports = {
    _get,
    _post,
    _delete,
    _put
};