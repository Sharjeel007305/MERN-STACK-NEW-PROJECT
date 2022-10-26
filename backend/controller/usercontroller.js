const Usermodel = require("../models/userModel");


async function Logincontroller (req,res) { 
    const {username,password} = req.body;
    try{
        const user = await Usermodel.findOne({username, password});
        if(user){
            res.send(user)
        } else {
             return res.status(400).json(error)
        }

    }catch(error){
        return res.status(400).json(error)
    }
  
}


async function Registercontroller (req,res) { 
    const {username,password} = req.body;
    try{
        const newUser = await Usermodel(req.body);
        await newUser.save();
        res.send('User Registered Successfully!');
    }catch(error){
        return res.status(400).json(error)
    }
  
}

module.exports = {
    Logincontroller,
    Registercontroller
  };