const connection = require('../config/database')
const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  ingredients: String,
  description: String,
  img_recipe: String
})

module.exports = connection.model('Recipes', schema)