const { response } = require('express');
const bcrypt = require('bcryptjs');

const Doctors = require('../models/doctors');
const { generateJWT } = require('../helpers/jwt');

const getDoctors = async( req, res = response ) => {
    
    const doctors = await Doctors.find();

    res.json({
		success: true,
		message: 'Datos obtenidos correctamente',
	})
}

const createDoctor = async( req, res = Response ) => {
    res.json({
		success: true,
        message: 'Doctor creado correctamente',
	})
}

const updateDoctor = async( req, res = Response ) => {
    res.json({
		success: true,
        message: 'Doctor actualizado correctamente',
	})
}

const deleteDoctor = async( req, res = Response ) => {
    res.json({
		success: true,
        message: 'Doctor eliminado correctamente',
	})
}

module.exports = {
    getDoctors,
    createDoctor,
    updateDoctor,
    deleteDoctor
}