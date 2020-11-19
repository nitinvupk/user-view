const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/user-view'
const options = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}
mongoose.connect(url, options , (err,data)=>{
	console.log(`database is connected`)
})
