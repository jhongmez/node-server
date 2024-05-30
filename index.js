require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { connectionDB } = require('./database/config');



// * Crear servidor de Express
const app = express();

// * Configuracion CORS
app.use( cors() ); // * user es un middleware

// * Base de datos
connectionDB();

// * Rutas
app.get( '/', (req, res) => { // * req: Info de los headers - res: Info que le mostraremos al usuario
    
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })

})

// * Escuchar o levantar el servidor 
app.listen( process.env.PORT, () => {   // * Puerto
    console.info(`SERVIDOR CORRIENDO CORRECTAMENTE EN EL PUERTO ${process.env.PORT}`) // * Mensaje satisfactorio
})