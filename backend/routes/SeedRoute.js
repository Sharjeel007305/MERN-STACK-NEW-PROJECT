const express = require('express');
const SeedRouter = express.Router();
const SeedController = require('../controller/seedcontroller');
 
SeedRouter.get("/",SeedController.SeedController);


module.exports = SeedRouter;

