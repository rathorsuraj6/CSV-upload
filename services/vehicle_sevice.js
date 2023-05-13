const vehicleInfo = require('../models/vehicle');

exports.saveVehicle = (objEntity) => {
  if(!objEntity){
    throw new Error("No vehicle information!");
  }
   return vehicleInfo.create(objEntity);
};

exports.listOfVehicles = async () => {
   const res = await vehicleInfo.find();
   return res;
};