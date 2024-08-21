const { response } = require('express');
const User = require('../models/user');
const Doctor = require('../models/doctors');
const Hospital = require('../models/hospitals');

const getResults = async( req, res = response ) => {

	const search = req.params.busqueda;

	const regexp = new RegExp( search, 'i' )


	const [ users, doctors, hospitals ] = await Promise.all([
		User.find({ fullname: regexp }),
		Doctor.find({ name: regexp }),
		Hospital.find({ name: regexp })
	])

	res.json({
		success: true,
		message: 'Datos obtenidos correctamente',
		users,
		doctors,
		hospitals
	})

}

const getCollection = async( req, res = response ) => {

	const search        = req.params.busqueda;
	const collection    = req.params.tabla;
	const regexp        = new RegExp( search, 'i' );

	let data;

	switch (collection) {
		case 'doctors':
			data = await Doctor.find({ name: regexp })
								.populate('user', 'fullname avatar')
								.populate('hospital', 'name');

			break;
		case 'hospitals':
			data = await Hospital.find({ name: regexp }).populate('user', 'fullname avatar');

			break;
		case 'users':
			data = await User.find({ fullname: regexp });
			
			break;
		default:
			res.status(400).json({
				success: false,
				message: 'ERROR en la busqueda de coleccion',
			})
			break;
	}

	res.json({
		success: true,
		message: 'Datos obtenidos correctamente',
		results: data,
	})
	
}

module.exports = {
	getResults,
	getCollection
}