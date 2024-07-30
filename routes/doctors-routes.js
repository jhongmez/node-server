/*
	* RUTA: /api/doctors
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');
const { getDoctors, createDoctor, updateDoctor, deleteDoctor } = require('../controllers/doctors-controller');
const router = Router();

router.get( '/', getDoctors );

router.post( '/' , 
    [
		validateJWT,
		check('name', 'El nombre del DOCTOR es obligatorio').not().isEmpty(),
		validateFields
	],
	createDoctor
)

router.put( '/:id',
	[],  
	updateDoctor
);

router.delete( '/:id', 
	deleteDoctor
)


module.exports = router;