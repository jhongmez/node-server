const express = require('express');

// * Crear servidor de Express
const app = express();

// * Escuchar o levantar el servidor 
app.listen( 3000, () => {   // * Puerto
    console.info('Servidor corriendo en el puerto 3000') // * Mensaje satisfactorio
})