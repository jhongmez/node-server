const { response } = require('express');
const jwt = require('jsonwebtoken');


const validateJWT = ( req, res = response, next ) => {

    // * Leer token
    const tokenHeader = req.header( 'x-token' );
    
    if ( !tokenHeader ) {
        return res.status(401).json({
            success: false,
            message: 'ERROR no cuentas con un token en la petición'
        })
    }

    try {

        const { uid } = jwt.verify( tokenHeader, process.env.SECRET_KEY );
        
        req.uid = uid;
        next();
        
    } catch (error) {
        console.log(error);
		res.status(500).json({
			success: false,
			message: 'ERROR token incorrecto',
		});
    }

}

module.exports = {
    validateJWT
}