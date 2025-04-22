const mongoose = require('mongoose'); 

// Parâmetros para perfil do pet
const petSchema = 
new mongoose.Schema({
    nome:
    { type: String, required: true},
    gender:
    { type: String, required: true},
    peso:
    { type: String, required: true},
    idade: 
    { type: String, required: true},
    raca:
    { type: String, required: true},
    rg:
    { type: Number, minlenght: 12, required: true, unique: true},
    responsible: 
    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;