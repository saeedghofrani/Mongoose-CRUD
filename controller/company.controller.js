// wrapper contain trycatch for error handling
const safeCall = require('../utils/safeCall.utils');
const createCompany = require('../services/createcompany.service');
const Company = require('../model/company.model');

const _get = safeCall(async (request, response, _next) => {

    const company = await Company.find({});
    return response.json({ path: request.originalUrl, success: true, result: company });

});

const _post = safeCall(async (request, response, _next) => {

    const { company_name, value } = request.body;
    const company = await createCompany(company_name, value);
    return response.json({ path: request.originalUrl, success: true, result: { message: 'Company created', data: company } });

});

const _delete = safeCall(async (request, response, _next) => {

    const companyId = request.body.id;
    let dletedCompany = await Company.findByIdAndDelete(companyId);

    dletedCompany ?
        response.json({ path: request.originalUrl, success: true, result: 'Company deleted' })
        : response.json({ path: request.originalUrl, success: false, result: 'Company not found' });
});

const _put = safeCall(async (request, response, _next) => {
    const companyId = request.body.id;

    const data = {
        company_name,
        value
    } = request.body;

    let dletedCompany = await Company.findOneAndUpdate(companyId, data, { new: true });
    return response.json({ path: request.originalUrl, success: true, result: dletedCompany });

});


module.exports = {
    _get,
    _post,
    _delete,
    _put
};