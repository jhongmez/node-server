const mongoose = require('mongoose');
require('dotenv').config();

const connectionDB = async () => {

	try {
		await mongoose.connect( process.env.DB_CNN );

		console.log('BASE DE DATOS EN LINEA');
	} catch (error) {
		console.warn(error)
		throw new Error('Error al iniciar la base de datos!')
	}


}

// * Se realiza la exportacion de la funcion para ser usada en otros lugares
module.exports = {
	connectionDB
}
