const vehicleService = require('../services/vehicle_sevice');

exports.getUploadView = (req, res, next) => {
  res.render('add-file', {
    pageTitle: 'Upload documents',
    path: 'isAddVehicle'
  });
};

exports.getVehicleList = async (req, res, next) => {
  var result = await vehicleService.listOfVehicles();
  console.log(result);
  res.render('vehicle-list', {
    pageTitle: 'List: Vehicles',
    vehicles: result,
    path: '/'
  });

};

