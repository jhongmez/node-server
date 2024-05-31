const { response } = require('express');
const Users = require('../models/user');

const getUsers = async(req, res) => { // * req: Info de los headers - res: Info que le mostraremos al usuario
	
    const users = await Users.find();

	res.json({
		success: true,
        message: 'Datos obtenidos correctamente',
        users
	})

}

const createUser = async(req, res = response) => {

    const { fullname, email, password } = req.body;


    try {
        
        const existEmail = await Users.findOne({ email });

        // * Validacion para correos unicos
        if ( existEmail ) 
            return res.status(400).json({
                success: false,
                message: 'El correo ya está en uso'
            })


        const user = new Users( req.body );
    
        await user.save();
    
        res.json({
            success: true,
            message: 'Usuario creado correctamente',
            user // * mostramos el dato enviado
        })
        
    } catch (error) {

        console.log(error);
        res.status(500).json({
            success: false,
            message: 'ERROR al crear el usuario',
        });

    }


}

module.exports = {
    getUsers, 
    createUser
}