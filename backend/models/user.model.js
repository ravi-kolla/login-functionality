const  mongoose = require('mongoose');

const Schema =  mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minlength: 3
  },
  email:{
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  }
},{
  timestamps:true
});

const User = mongoose.model('User', userSchema);

module.exports = User;
