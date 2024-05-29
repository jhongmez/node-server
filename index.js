const express = require('express');

// * Crear servidor de Express
const app = express();

// * Rutas
app.get( '/', (req, res) => { // * req: Info de los headers - res: Info que le mostraremos al usuario
    
    res.json({
        ok: true,
        msg: 'Hola Mundo'
    })

})

// * Escuchar o levantar el servidor 
app.listen( 3000, () => {   // * Puerto
    console.info('Servidor corriendo en el puerto 3000') // * Mensaje satisfactorio
})