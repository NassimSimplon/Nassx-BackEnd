const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    
    min: 3,
    max: 20,
    unique: true,
  },
  phonenumber: {
    type: String,
  
  },
  

  email: {
    type: String,
    
    unique: true,
    max: 50,
  },
  password: {
    type: String,
    
    min: 8,
  },
  latitude:{
    type: String,
    
  },
  longitude:{
    type: String,
    
  },
  isAvatarImageSet: {
    type: Boolean,
    default: false,
  },
  avatarImage: {
    type: String,
    default: "",
  },

  role:{
    type:String,
    enum:['user','motor'],
    default: 'user'
}
});

module.exports = mongoose.model("users", userSchema);
