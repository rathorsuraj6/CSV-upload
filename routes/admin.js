const express = require('express');
const fs = require('fs');
const adminCtrl = require('../controllers/adminCtrl');
const router = express.Router();
const multer = require('multer');
const csv_json=require('csvtojson')
const upload = multer({ dest: 'csv' });
const csvCols = require('../util/supplierCols');
const vehicleModel = require('../models/vehicle');
const vehicleService = require('../services/vehicle_sevice');
const images = require('../models/imagesPaths')

router.get('/', adminCtrl.getVehicleList);
router.get('/admin/add-file', adminCtrl.getUploadView);

router.post('/admin/processFile', upload.single('file'), function (req, res) {
    //assume each header text in csv have not an white space
    let csvName = req.body.csv_name;
    csv_json()
    .fromFile(req.file.path)
    .then((jsonObj)=>{
        jsonObj.forEach(csvJson => {
            //turns all key properties to lower case in order to do a search and comparision easily
            //according with car supplier if some column lack vs our configuration file
            //we will persist this lack data as null value
            const newObj = Object.fromEntries(
                Object.entries(csvJson).map(([k, v]) => [k.toLowerCase(), v])
            );
            
            let imgPath = images.randomImg();
            //by default requeriments say persist next 10 column information which comes into csv, then more easy all time make a mapping
            //to this 10 colums if column if no present in CSV->Json out put means that columns was not send by provider
            var data = new vehicleModel ({
                uuid: newObj.uuid !== undefined ? newObj.uuid : null,
                vin: newObj.vin !== undefined ? newObj.vin : null,
                make:  newObj.make !== undefined ? newObj.make : null,
                model:  newObj.model !== undefined ? newObj.model : null,
                mileage: newObj.mileage !== undefined ? newObj.mileage : null,
                year: newObj.year !== undefined ? newObj.year : null,
                zipcode: newObj.zipcode !== undefined ? newObj.zipcode : null,
                createDate: newObj.createdate !== undefined ? newObj.createdate : null,
                updateDate: newObj.updatedate !== undefined ? newObj.updatedate : null,
                csv_name: csvName,
                imagePath: imgPath
            });

            vehicleService.saveVehicle(data).then(res => {
                console.log(res);
            }).catch(err=> {
                console.log("insert error: " + err);
            })
            data=null;
            
            //remove no allowed columns from json source good idea could be storage in 
            //database and then show up to user in some view which columns was excluded
            for (var colCaption in newObj) {
                var result = csvCols.findIndex(c => c === colCaption.toLowerCase());
                if(result<0){
                    console.log("Exclude columns: " + colCaption);
                    removeFromObject(colCaption.toLowerCase(),newObj);
                }
            }
        });
        //forward to list vehicle view
        adminCtrl.getVehicleList(req,res,null);
    })
});

function removeFromObject(keyPart, objSource){
    for (var i in objSource){          
        if(~i.indexOf(keyPart)){ 
            delete objSource[i];    
            console.log("csv column removed: " + i);
        }
    }
}
module.exports = router;
