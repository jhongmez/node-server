/*
	* RUTA: /api/hospitals
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const { getHospitals, createHospital, updateHospital, deleteHospital } = require('../controllers/hospitals-controller')
const router = Router();

router.get( '/', getHospitals );

router.post( '/' , 
    [
		validateJWT,
		check('name', 'El nombre del HOSPITAL es obligatorio').not().isEmpty(),
		validateFields
	],
	createHospital
)

router.put( '/:id',
	[],  
	updateHospital
);

router.delete( '/:id', 
	deleteHospital
)


module.exports = router;