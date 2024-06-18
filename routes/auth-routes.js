/*
	* RUTA: /api/login
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth-controller');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.post('/', 
    [
        check('password', 'La contraseña es obligatorio').not().isEmpty(),
		check('email', 'El email es obligatorio').isEmail(),
        validateFields
    ], 
    login
);


// * Exportacion del modulo router
module.exports = router;