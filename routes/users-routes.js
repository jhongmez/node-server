/*
  * RUTA: /api/users
*/

const { Router } = require('express');
const { getUsers, createUser } = require('../controllers/users-controller');

const router = Router();

router.get( '/', getUsers )

router.post( '/', createUser )


// * Exportacion del modulo router
module.exports = router;