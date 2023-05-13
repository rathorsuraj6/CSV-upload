const dbHandler = require('../util/moongose-handler');
const vehicleService = require('../services/vehicle_sevice');
const vehicleModel = require('../models/vehicle');

//vehicle mock data
const vehicleMockup = new vehicleModel ({
    uuid: "54928438923",
    vin: "VIN8483892034",
    make:  "BMW X6",
    model:  "X6",
    mileage: 0,
    year: 2020,
    zipcode: "000",
    createDate: "20200410",
    updateDate: "20200415",
    csv_name: "test_data",
    imagePath: "https://www.autobild.es/sites/autobild.es/public/styles/main_element/public/dc/fotos/01_P90373801_highRes_the-new-bmw-x6-m50i-.jpg?itok=I4GHxKbE"
});

//validate connection  to in memory mongo server
beforeAll(async () => await dbHandler.connect());

//clear all collection in database
afterEach(async () => await dbHandler.clearDatabase());

//close connection to database
afterAll(async () => await dbHandler.closeDatabase());

///create a vehicle
describe('vehicle ', () => {

    //check vehicle can create using service method
    it('can be created correctly', async () => {
        expect(async () => await vehicleService.saveVehicle(vehicleMockup))
            .not
            .toThrow();
    });
});

