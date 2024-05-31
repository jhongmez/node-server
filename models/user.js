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

UserSchema.method('toJSON', function() {

	const { __v, _id, password, ...object } = this.toObject();

	object.uid = _id;

	return object;

})



// * Exportacion del modelo
module.exports = model( 'USERS', UserSchema );