// * Creacion de modelo USUARIO

const { type } = require('express/lib/response');
const { Schema, model } = require('mongoose');


const UserSchema = Schema({
	
	fullname: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String,
	},
	role: {
		type: String,
		required: true,
		default: 'USER_ROLE'
	},
	google: {
		type: Boolean,
		default: false
	},

})

// * Exportacion del modelo
module.exports = model( 'USERS', UserSchema );