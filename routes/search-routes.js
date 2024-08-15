/*
	* RUTA: /api/search/:busqueda
*/
const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getResults } = require('../controllers/search-controller')

const router = Router();

router.get( '/:busqueda', validateJWT, getResults );


// * Exportacion del modulo router
module.exports = router;