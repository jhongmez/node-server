const { response } = require('express');
const bcrypt = require('bcryptjs');

const Hospital = require('../models/hospitals');
const { generateJWT } = require('../helpers/jwt');

const getHospitals = async( req, res = response ) => {

    try {

        const hospitals = await Hospital.find().populate('user', 'fullname');

        res.json({
		    success: true,
		    message: 'Datos obtenidos correctamente',
            hospitals
	    })

    } catch (error) {
        console.log(error);
		res.status(500).json({
			success: false,
			message: 'ERROR al obtener los hospitales',
		});
    }

}

const createHospital = async( req, res = Response ) => {

    const uid = req.uid;
    const hospital = new Hospital({ 
        user: uid,
        ...req.body 
    });
    
    try {

        const hospitalSave = await hospital.save();

        res.json({
		    success: true,
            message: 'Hospital creado correctamente',
            hospitalSave
	    });

    } catch (error) {
        console.log(error);
		res.status(500).json({
			success: false,
			message: 'ERROR al crear el hospital',
		});
    }

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