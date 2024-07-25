const { response } = require('express');
const bcrypt = require('bcryptjs');

const Hospitals = require('../models/hospitals');
const { generateJWT } = require('../helpers/jwt');

const getHospitals = async( req, res = response ) => {
    
    const hospitals = await Hospitals.find();

    res.json({
		success: true,
		message: 'Datos obtenidos correctamente',
	})
}

const createHospital = async( req, res = Response ) => {
    res.json({
		success: true,
        message: 'Hospital creado correctamente',
	})
}

const updateHospital = async( req, res = Response ) => {
    res.json({
		success: true,
        message: 'Hospital actualizado correctamente',
	})
}

const deleteHospital = async( req, res = Response ) => {
    res.json({
		success: true,
        message: 'Hospital eliminado correctamente',
	})
}

module.exports = {
    getHospitals,
    createHospital,
    updateHospital,
    deleteHospital
}