const Mongoose = require('mongoose')
Mongoose.Promise = global.Promise 

const schema = new Mongoose.Schema({
  userId: { type: String, default: ''},
  viewDate: Date,
  productId: { type: String, default: ''},
},{
  timestamps: true
})

module.exports = Mongoose.model('UserView', schema)
