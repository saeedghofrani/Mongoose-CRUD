const getCompany = require('../controller/company.controller')._get;

describe('Test Handlers', function () {


    test('should get all companies', async () => {
        await getCompany();
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ username: 'hugo' });
    });

});