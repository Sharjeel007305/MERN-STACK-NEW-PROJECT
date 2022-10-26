//Create table for User
const mongoose = require ('mongoose')

const userSchema = new mongoose.Schema ({
    username:{type: String, required: true},
    password:{type: String, required: true},

}, {
    timestamps: true,
});

const Usermodel = mongoose.model('User', userSchema)
module.exports = Usermodel