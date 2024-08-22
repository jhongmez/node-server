/*
	* RUTA: /api/upload/:busqueda
*/
const { Router } = require('express');
const expressFileUpload = require('express-fileupload')
const { validateJWT } = require('../middlewares/validate-jwt');
const { uploadFiles } = require('../controllers/upload-controller');

const router = Router();

router.use( expressFileUpload() );

router.put('/:type/:id', uploadFiles)

// * Exportacion del modulo router
module.exports = router;