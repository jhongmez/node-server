/*
	* RUTA: /api/upload/:busqueda
*/
const { Router } = require('express');
const expressFileUpload = require('express-fileupload')
const { validateJWT } = require('../middlewares/validate-jwt');
const { uploadFiles, getFiles } = require('../controllers/upload-controller');

const router = Router();

router.use( expressFileUpload() );

router.put('/:type/:id', uploadFiles)

router.get('/:type/:image', getFiles)

// * Exportacion del modulo router
module.exports = router;