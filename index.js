//require path

const express = require('express')

//require path
const path = require('path')

//get express running
const app = express()

// require db
const db = require('./db')
// serve every file inside 'client' folder as static
app.use('/', express.static(path.join(__dirname, 'client')))

app.get('/',(req,res) => {
	res.sendFile(path.join(__dirname, 'client/shop.html'))
})

//listen to sever:
app.listen(3000,() => {
	console.log('Server listening on Port 3000');
})
// app.listen(process.env.PORT, () => {
// 	console.log(`Server listening on port ${process.env.PORT}`);
// })
