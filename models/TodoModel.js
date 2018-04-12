const mongoose = require('mongoose')
const Schema = mongoose.Schema

// TodoApp Schema
var TodoAppModel = new Schema({

  text: {type: String},
  checked: {type: Boolean, default: false}

})
module.exports = mongoose.model('Book', TodoAppModel)
