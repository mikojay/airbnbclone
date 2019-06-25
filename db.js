//require pg package
const {Client} = require('pg')

//create connection
const db = new Client ({
	connectionString:'postgres://Jaschi:@localhost:5432:/airbnb'
})

//connect to db
db.connect((err) =>{
	if(err) {
		console.log('Connection to PostgresSQL failed');
	} else {
		console.log('Connection to PostgresSQL was successful');
	}
})
module.exports = db
