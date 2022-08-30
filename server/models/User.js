const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: String,
  city: String,
  dob: String,
  phoneNumber: String,
})

module.exports = mongoose.model('users', userSchema)
