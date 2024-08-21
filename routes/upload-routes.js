/*
	* RUTA: /api/upload/:busqueda
*/
const { Router } = require('express');
const { validateJWT } = require('../middlewares/validate-jwt');
const { uploadFiles } = require('../controllers/upload-controller');

const router = Router();

router.put('/:type/:id', uploadFiles)

// * Exportacion del modulo router
module.exports = router;