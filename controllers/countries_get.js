//require the db

const db = require('../db')

module.exports = (req,res) => {
	// let query = `SELECT * FROM properties `
	// if (req.params.city) {
	// 	query += `WHERE city = ${req.params.city}`
	// }
	db.query(`SELECT * FROM countries`, (err, result) => {
		if (err) {
			res.send(err)
		} else {
			res.send(result.rows)
		}
	})
}
