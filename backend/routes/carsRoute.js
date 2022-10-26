
const express = require('express');
const carRouter = express.Router();
const carsController = require('../controller/carscontroller');
 
carRouter.get("/getall",carsController.carscontroller);


module.exports = carRouter;
