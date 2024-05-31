/*
	* RUTA: /api/users
*/

const { Router } = require('express');
const { check } = require('express-validator')
const { getUsers, createUser } = require('../controllers/users-controller');

const router = Router();

// * Estructura: Ruta, Middleware, Controlador
router.get( '/', getUsers );

router.post( '/',
	[
		check('fullname', 'El nombre es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatorio').not().isEmpty(),
		check('password', 'La contraseña es obligatoria').isEmail(),
	], 
	createUser 
);


// * Exportacion del modulo router
module.exports = router;