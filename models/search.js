// * Creacion de modelo BUSQUEDA

const { type } = require('express/lib/response');
const { Schema, model } = require('mongoose');

const SearchSchema = Schema({

})

// * Exportacion del modelo
module.exports = model( 'SEARCH', SearchSchema );