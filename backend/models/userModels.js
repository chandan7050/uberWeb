const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    fullName:{
       firstName:{type:String,
        required:true,
        minlength: [3,'First name must be at leat 3 characters long'],
       },
       LastName:{
        type:String,
        // required:true,
        minlength: [3,'First name must be at leat 3 characters long'],
    },
    },
    
    email:{
        type:String,
        requires:true,
        unique:true,
        minlength:[5,'Email must be at leat 5 characters long']
    },
    password:{
        type:String,
        requires:true,
        select:false
    },
    socketId:{
        type:String,
    }
})

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({_id:this._id}, process.env.JWT_SECRET)
    return token;
}
userSchema.methods.comparePassword = async function (password) {
   return await bcrypt.compare(password,this.password);
}

userSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password,10);
    
}

const userModel = mongoose.model('user',userSchema);

module.exports = userModel;