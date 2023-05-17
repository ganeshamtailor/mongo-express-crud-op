const{ default: mongoose} = require('mongoose')


const Schema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const User=mongoose.model('User',Schema)
module.exports=User;