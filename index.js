require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { connectionDB } = require('./database/config');


// * Crear servidor de Express
const app = express();

// * Configuracion CORS
app.use( cors() ); // * user es un middleware

// * Lectura y parseo del Body
app.use( express.json() );

// * Base de datos
connectionDB();

// * Rutas
app.use( '/api/users', require( './routes/users-routes' ) );
app.use( '/api/login', require( './routes/auth-routes' ) );

// * Escuchar o levantar el servidor 
app.listen( process.env.PORT, () => {   // * Puerto
	console.info(`SERVIDOR CORRIENDO CORRECTAMENTE EN EL PUERTO ${process.env.PORT}`) // * Mensaje satisfactorio
})