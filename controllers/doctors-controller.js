const { response } = require('express');
const bcrypt = require('bcryptjs');

const Doctor = require('../models/doctors');
const { generateJWT } = require('../helpers/jwt');

const getDoctors = async( req, res = response ) => {


    try {

        const doctors = await Doctor.find()
                                    .populate('hospital', 'name')
                                    .populate('user', 'fullname');

        res.json({
		    success: true,
		    message: 'Datos obtenidos correctamente',
            doctors
	    })
        
    } catch (error) {
        console.log(error);
		res.status(500).json({
			success: false,
			message: 'ERROR al obtener los doctores',
		});
    }
}

const createDoctor = async( req, res = Response ) => {

    const userId = req.uid;
    const doctor = new Doctor({
        user: userId,
        ...req.body
    })

    try {

        const doctorSave = await doctor.save();

        res.json({
		    success: true,
            message: 'Doctor creado correctamente',
            doctorSave
	    })
    } catch (error) {

        console.log(error);
		res.status(500).json({
			success: false,
			message: 'ERROR al crear el usuario',
		});

    }
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