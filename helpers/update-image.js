const User = require('../models/user');
const Doctor = require('../models/doctors');
const Hospital = require('../models/hospitals');

const updateImage = ( type, id, path, nameFile ) => {
	console.log('Vamos Bien');

	switch( type ){
		case 'users':
			break;
		case 'doctors':
			break;
		case 'hospitals':
			break;
		default:
			break;
	}

}

module.exports = {
	updateImage
}