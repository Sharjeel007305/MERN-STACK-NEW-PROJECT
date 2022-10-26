//Create table for cars
const mongoose = require ('mongoose')

const carsSchema = new mongoose.Schema ({
    name:{type: String, required: true},
    image:{type: String, required: true},
    payPerDay:{type: Number, required: true},
    fuelType:{type: String, required: true},
    bookedTimeSolts:[
        {
            form: {type: String, required: true},
            to: {type: String, required: true},
        }
    ],
    capacity:{type: Number, required: true},
}, {
    timestamps: true,
});

const Carsmodel = mongoose.model('Cars', carsSchema)
module.exports = Carsmodel
