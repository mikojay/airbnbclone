//require the db

const db = require('../db')

module.exports = (req,res) => {

	let query = `SELECT
		properties.id,
		properties.name,
		properties.price,
		properties.rooms,
		properties.rating,
		properties.img,
		properties.city,
		properties.type,
		properties.country,
		countries.name AS "country",
		cities.name AS "city",
		types.name AS "type"
		FROM properties

		LEFT JOIN countries ON properties.country = countries.id
		LEFT JOIN cities ON properties.city = cities.id
		LEFT JOIN types ON properties.type = types.id `

	if (req.query && Object.keys(req.query).lenght) {
		//add WHERE if request has query
		query += `WHERE `
	}

	for (i=0; i<Object.keys(req.query).lenght; i++) {

		if (req.query.rating){
			query+= `properties.rating = ${req.query.rating}`
		}
		// else if (Object.keys(req.query)[i]=='rating'){
		// 	query+= ` AND properties.rating = ${req.query.rating}`
		// }
		// if (Object.keys(req.query)[i]=='rooms'&&i==0){
		// 	query+= `properties.rooms = ${req.query.rooms}`
		// } else if (Object.keys(req.query)[i]=='rooms'){
		// 	query+= ` AND properties.rooms = ${req.query.rooms}`
		// }
		// if (Object.keys(req.query)[i]=='city'&&i==0){
		// 	query+= `cities.id = ${req.query.city}`
		// } else if (Object.keys(req.query)[i]=='city'){
		// 	query+= ` AND cities.id = ${req.query.city}`
		// }
		// if (Object.keys(req.query)[i]=='country'&&i==0){
		// 	query+= `countries.id = ${req.query.country}`
		// } else if (Object.keys(req.query)[i]=='country'){
		// 	query+= ` AND countries.id = ${req.query.country}`
		// }
		// if (Object.keys(req.query)[i]=='price'&&i==0){
		// 	query+= `properties.price = ${req.query.price}`
		// } else if (Object.keys(req.query)[i]=='price'){
		// 	query+= ` AND properties.price = ${req.query.price}`
		// }
		// if (Object.keys(req.query)[i]=='type'&&i==0){
		// 	query+= `type.id = ${req.query.type}`
		// } else if (Object.keys(req.query)[i]=='type'){
		// 	query+= ` AND type.id = ${req.query.type}`
		// }
		// if (Object.keys(req.query)[i]=='plus'&&i==0){
		// 	query+= `properties.plus = ${req.query.plus}`
		// } else if (Object.keys(req.query)[i]=='plus'){
		// 	query+= ` AND properties.plus = ${req.query.plus}`
		// }
	}

	console.log(req.query);
	console.log('query', query);

	// let query = `SELECT * FROM properties `
	// if (req.params.city) {
	// 	query += `WHERE city = ${req.params.city}`
	// }
	db.query(query, (err, result) => {
		if (err) {
			// res.send(err)
			console.log('err', err);
		} else {
			res.send(result.rows)
		}
	})

}
