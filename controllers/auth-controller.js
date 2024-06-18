const { response } = require('express');
const Auth = require('../models/user');


const login = async(req, res = response) => {

    try {
        res.json({
            success: true,
            message: 'Conexion exitosa'
        })
    } catch (error) {
        console.log(error);
		res.status(500).json({
			success: false,
			message: 'ERROR al deshabilitar el usuario',
		});
    }

}

module.exports = {
	login,
}