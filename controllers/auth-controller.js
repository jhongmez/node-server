const { response } = require('express');
const bcrypt = require('bcryptjs');

const User = require('../models/user');
const { generateJWT } = require('../helpers/jwt');


const login = async(req, res = response) => {

    const { email, password } = req.body

    try {

        // * Busque el usuario por el email
        const userDB = await User.findOne({ email }); 

        // * Verifica el email
        if ( !userDB ) {
            return res.status(404).json({
                success: false,
                message: 'ERROR el email no se encontró'
            })
        }

        // * Verificar contraseña
        const validPassword = bcrypt.compareSync( password, userDB.password );

        if( !validPassword ) {
            return res.status(404).json({
                success: false,
                message: 'ERROR el password es invalido'
            })
        }

        // * Generar JWT
        const generateToken = await generateJWT( userDB.id );

        res.json({
            success: true,
            token: generateToken,
        });

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