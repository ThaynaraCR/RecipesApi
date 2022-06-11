const connection = require('../config/database')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  login: String,
  password: String
})

module.exports = connection.model('Users', schema)