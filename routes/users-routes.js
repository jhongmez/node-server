/*
	* RUTA: /api/users
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const { getUsers, createUser, updateUser, deleteuser } = require('../controllers/users-controller');

const router = Router();

// * Estructura: Ruta, Middleware, Controlador
router.get( '/', validateJWT, getUsers );

router.post( '/',
	[
		check('fullname', 'El nombre es obligatorio').not().isEmpty(),
		check('password', 'La contraseña es obligatoria').not().isEmpty(),
		check('email', 'El email es obligatorio').isEmail(),
		validateFields,
	], 
	createUser 
);

router.put( '/:id',
	[
		validateJWT,
		check('fullname', 'El nombre es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatorio').isEmail(),
		check('role', 'El rol es obligatorio').not().isEmpty(),
		validateFields
	],  
	updateUser 
);

router.delete( '/:id', 
	validateJWT,
	deleteuser 
)


// * Exportacion del modulo router
module.exports = router;