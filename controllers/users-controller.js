const Users = require('../models/user');

const getUsers = (req, res) => { // * req: Info de los headers - res: Info que le mostraremos al usuario
	
	res.json({
		success: true,
        message: 'Datos obtenidos correctamente',
		users: []
	})

}

const createUser = async(req, res) => {

    const { fullname, email, password } = req.body;

    const user = new Users( req.body );

    await user.save();

    res.json({
		success: true,
        message: 'Usuario creado correctamente',
        user // * mostramos el dato enviado
	})

}

module.exports = {
    getUsers, 
    createUser
}