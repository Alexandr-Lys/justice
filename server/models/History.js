const mongoose = require('mongoose')
const Schema = mongoose.Schema

const historySchema = new Schema({
  give: {
    type: Number,
    required: true,
  },
  get: {
    type: Number,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  giveCurrency: {
    type: String,
    required: true,
  },
  getCurrency: {
    type: String,
    required: true,
  },
  status: String,
  user: {
    ref: 'users',
    type: Schema.Types.ObjectId
  }
})

module.exports = mongoose.model('history', historySchema)
