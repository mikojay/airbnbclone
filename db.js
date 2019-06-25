//require pg package
const {Client} = require('pg')

//create connection
const db = new Client ({
	connectionString: localhost3000
})

db.connect((err) =>{
	if(err) {
		console.log('Connection to PostgresSQL failed');
	} else {
		console.log('Connection to PostgresSQL was successful');
	}
})
module.exports = db
