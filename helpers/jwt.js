const jwt = require('jsonwebtoken');

const generateJWT = ( uid ) => {

    return new Promise( (resolve, reject) => {

        const payload = {
            uid
        }
    
        jwt.sign( payload, process.env.SECRET_KEY, { 
            expiresIn: '12h' 
        }, ( err, token ) => {
            
            if ( err ) {
                console.log(err);
                reject(`ERROR no se pudo generar el JWT: ${err}`);
            } else {
                resolve( token )
            }
    
        });
    
    })

}

module.exports = {
	generateJWT,
}