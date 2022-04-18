const Company = require('../model/company.model');

module.exports = async (company_name, value) => {
    try {
        const company = Company.create({ company_name, value });
        return company;
    } catch (error) {
        throw error
    }
}