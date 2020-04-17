const mongoose = require('mongoose')
const schema = require('./schema')

const model = mongoose.model('User', schema)

module.exports = model
