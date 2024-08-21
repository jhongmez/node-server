const { response } = require('express');

const uploadFiles = ( req, res = response) => {
    res.json({
		success: true,
		message: 'Datos obtenidos correctamente',
	})
}

module.exports = {
    uploadFiles
}