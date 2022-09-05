const mongoose = require('mongoose')
const Schema = mongoose.Schema

const walletSchema = new Schema({
  amount: {
    type: Number,
    required: true,
  },
  currencyName: {
    type: String,
    required: true,
  },
  operation: {
    type: Number,
  },
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('wallet', walletSchema)
