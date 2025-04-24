const mongoose = require('mongoose'); 

// Parâmetros para coleira do pet
const coleiraSchema = 
new mongoose.Schema({
    nomeColeira:
    { type: String, required: true},
    rg:
    { type: Number, minlength: 12, required: true, unique: true},
    id:
    { type: String, required: true, unique: true},
    responsible: 
    { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
});

const Coleira = mongoose.model('Coleira', coleiraSchema);

module.exports = Coleira;