const { response } = require('express');
const path = require('path');
const fileSystem = require('fs');

const { v4: uuidv4 } = require('uuid');
const { updateImage } = require('../helpers/update-image');

const uploadFiles = ( req, res = response ) => {

	const type = req.params.type;
	const id = req.params.id;

	// * Validar tipos
	const validateTypes = ['users', 'hospitals', 'doctors'];
	if( !validateTypes.includes(type) ) {
		return res.status(400).json({
			success: false,
			message: 'ERROR en los tipos de carga'
		})
	}

	// * Validar que exista el archivo
	if (!req.files || Object.keys(req.files).length === 0) {
    	return res.status(400).json({
			success: false,
			message: 'ERROR no hay ningun archivo'
		});
  	}

	const getFile = req.files.image;
	// * Cortamos el nombre del archivo para poder obtener su extension
	const splitName = getFile.name.split('.');
	const extensionFile = splitName[ splitName.length - 1 ];

	// * Validar extensiones
	const validateExtension = ['jpeg', 'png', 'jpg', 'gif']
	if( !validateExtension.includes(extensionFile) ) {
		return res.status(400).json({
			success: false,
			message: 'ERROR archivo no permitido'
		})
	}

	//  * Generar nombre del archivo
	const createNameFile = `${ uuidv4() }.${ extensionFile }`;

	//  * Crear path
	const path = `./uploads/${ type }/${ createNameFile }`;

	// * Usamos mv() para mover los archivos
	getFile.mv( path , (err) => {
		if (err) {
			return res.status(500).json({
				success: false,
				message: 'ERROR el archivo no pudo ser cargado correctamente',
				err
			});
		}

		// * Actualizar BD
		updateImage( type, id, createNameFile );

		res.json({
			success: true,
			message: 'Datos obtenidos correctamente',
			nameFile: createNameFile
		})
	});

}

const getFiles = ( req, res = response ) => {
	const type = req.params.type;
	const img = req.params.image;

	const pathImage = path.join( __dirname, `../uploads/${type}/${img}`);

	if ( fileSystem.existsSync(pathImage) ) {
		res.sendFile( pathImage );
	} else {
		const pathImage = path.join( __dirname, `../uploads/no-img.jpg`);
		res.sendFile( pathImage );
	}
}

module.exports = {
    uploadFiles,
	getFiles
}