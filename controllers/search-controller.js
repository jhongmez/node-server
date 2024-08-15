const { response } = require('express');

const getResults = ( req, res = response ) => {

    const search = req.params.busqueda;

    res.json({
		success: true,
		message: 'Datos obtenidos correctamente',
        search
	})
}

module.exports = {
    getResults
}