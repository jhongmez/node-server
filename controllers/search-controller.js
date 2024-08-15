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

module.exports = {
    getResults
}