const mongose = require('mongoose');

const vehiculeModel = new mongose.Schema({
    uuid: { type: String},
    vin: { type: String},
    make: { type: String },
    model: { type: String },
    mileage: { type: Number },
    year: { type: Number },
    zipcode: { type: String },
    createDate: { type: String },
    updateDate: { type: String },
    csv_name: { type: String} , 
    imagePath: { type: String}
});

module.exports = mongose.model('vehicle',vehiculeModel);