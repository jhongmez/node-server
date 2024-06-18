/*
	* RUTA: /api/users
*/

const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');

const { getUsers, createUser, updateUser, deleteuser } = require('../controllers/users-controller');

const router = Router();

// * Estructura: Ruta, Middleware, Controlador
router.get( '/', getUsers );

router.post( '/',
	[
		check('fullname', 'El nombre es obligatorio').not().isEmpty(),
		check('password', 'La contraseña es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatoria').isEmail(),
		validateFields
	], 
	createUser 
);

router.put( '/:id',
	[
		check('fullname', 'El nombre es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatoria').isEmail(),
		check('role', 'El rol es obligatorio').not().isEmpty(),
		validateFields
	],  
	updateUser 
);

router.delete( '/:id', deleteuser )


// * Exportacion del modulo router
module.exports = router;