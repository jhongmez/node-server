const { response } = require('express');
const bcrypt = require('bcryptjs');
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

	const { email, password } = req.body;

	try {
		
		const existEmail = await Users.findOne({ email });

		// * Validacion para correos unicos
		if ( existEmail ) {
			return res.status(400).json({
				success: false,
				message: 'El correo ya está en uso'
			})
		}

		const user = new Users( req.body );

		// * Encriptar contraseña
		const salt = bcrypt.genSaltSync(); // * Genera una data aleatoria
		user.password = bcrypt.hashSync( password, salt )
	
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

const updateUser = async(req, res = response) => {
	// TODO: Validar token y comprobar si es el usuario correcto
	
	const uid = req.params.id;

	try {

		const userDB = await Users.findById( uid )

		if ( !userDB ) {
			return res.status(400).json({
				success: false,
				message: 'El usuario no existe'
			})
		}

		
		const fields = req.body;
		delete fields.password;
		delete fields.google;
		
		if ( userDB.email === req.body.email ) {
			delete fields.email;
		} else {
			
			const existEmail = await Users.findOne({ email: req.body.email })

			if ( existEmail ) {
				res.status(400).json({
					success: false,
					message: 'ERROR el correo ya existe',
				});
			}

		}

		// * New: Me muestra el campo tal cual se actualiza
		const updateUser = await Users.findByIdAndUpdate( uid, fields, { new: true });


		res.json({
			success: true,
			user: updateUser,
			message: 'Usuario actualizado correctamente'
		})

	} catch (error) {
		console.log(error);
		res.status(500).json({
			success: false,
			message: 'ERROR al actualizar el usuario',
		});
	}

}

module.exports = {
	getUsers, 
	createUser,
	updateUser
}