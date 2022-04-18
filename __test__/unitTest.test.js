const createCompany = require('../services/createcompany.service');
const db = require('./db');
// jest.setTimeout(30000);

// beforeAll(async () => {
//     await db.connect()
// });

// afterEach(async () => {
//     await db.clearDatabase()
// });

// afterAll(async () => {
//     await db.closeDatabase()
// });
beforeAll(async () => await db.connect());

afterEach(async () => await db.clearDatabase());

afterAll(async () => await db.closeDatabase());

// require("../db/connection.db");


describe('company will created when', function () {

    test('First company', async () => {
        const company = await createCompany('lalallal0', '12444444444');
        expect(company.company_name).toEqual('lalallal0');
        expect(company.value).toEqual('12444444444');
    });

});