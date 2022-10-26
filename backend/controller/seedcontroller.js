const data = require ( "../data");
const  Cars = require  ("../models/carsModel.js");


async function SeedController (req,res) { 
  await Cars.remove({});
  const createdCars = await Cars.insertMany(data.cars);

 res.send({createdCars});
}

module.exports = {
  SeedController
};