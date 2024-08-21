/*
	* RUTA: /api/search/:busqueda
*/
const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getResults, getCollection } = require('../controllers/search-controller')

const router = Router();

router.get( '/:busqueda', validateJWT, getResults );

router.get( '/collection/:tabla/:busqueda', validateJWT, getCollection )


// * Exportacion del modulo router
module.exports = router;