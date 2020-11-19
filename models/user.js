const Mongoose = require('mongoose')
Mongoose.Promise = global.Promise 

const schema = new Mongoose.Schema({
},{
  timestamps: true
})

module.exports = Mongoose.model('Users', schema)
