const mongoose = require('mongoose');

// Parâmetros para localização
const locationSchema = 
new mongoose.Schema({
    nomeLocal:
    { type: String, required: true},
    rua:
    { type: String, required: true},
    numero:
    { type: Number, required: true},
    bairro:
    { type: String, required: true},
    cidade:
    { type: String, required: true},
});

const Location = mongoose.model('Location', locationSchema);

module.exports = Location;