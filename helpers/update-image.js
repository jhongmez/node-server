const fileSystem = require('fs');

const User = require('../models/user');
const Doctor = require('../models/doctors');
const Hospital = require('../models/hospitals');

const deleteImage = async( path ) => {
	if ( fileSystem.existsSync( path) ) {
		// * Elimina la imagen anterior
		fileSystem.unlinkSync( path )
	}
}

const updateImage = async( type, id, nameFile ) => {

	switch( type ){
		case 'users':
			const user = await User.findById( id );
			if (!user) {
				console.log('ERROR No es un usuario');
				return false;
			};

			let oldPathUser = `./uploads/users/${ user.avatar }`;
			deleteImage( oldPathUser  );

			user.avatar = nameFile;
			await user.save();
			return true;

			break;

		case 'doctors':
			const doctor = await Doctor.findById( id );
			if (!doctor) {
				console.log('ERROR No es un doctor');
				return false;
			};

			let oldPathDoctor = `./uploads/users/${ doctor.image }`;
			deleteImage( oldPathDoctor  );

			doctor.image = nameFile;
			await doctor.save();
			return true;
			break;

		case 'hospitals':
			const hospital = await Hospital.findById( id );
			if (!hospital) console.log('ERROR No es un hospital');

			let oldPathHospital = `./uploads/users/${ hospital.image }`;
			deleteImage( oldPathHospital  );

			hospital.image = nameFile;
			await hospital.save();
			return true;
			break;
		default:
			break;
	}

}

module.exports = {
	updateImage
}