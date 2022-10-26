const express = require('express');
const userRouter = express.Router();
const UserController = require('../controller/usercontroller');
 
userRouter.post("/login",UserController.Logincontroller);
userRouter.post("/register",UserController.Registercontroller);


module.exports = userRouter;