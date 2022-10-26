const Cars = require ("../models/carsModel.js");


async function carscontroller (req,res) { 
 const cars = await Cars.find();
 res.send(cars)
}

module.exports = {
    carscontroller
  };