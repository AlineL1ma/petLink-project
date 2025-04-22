const Location = require('../models/locationModel')
const Coleira = require('../models/coleiraModel')

// Criar um ponto fixo na localização
exports.createLocation = async (req, res) => {
    try {
        const { nomeLocal, rua, numero, bairro, cidade }
        = req.body;
        
        const location = 
        new Location({ nomeLocal, rua, numero, bairro, cidade });

        await location.save();
        res.status(201).json(location);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};

// Procurar loc por meio da coleira
exports.searchColeira = async (req, res) => {
    try {
        const { nameColeira, rg, id, responsible }
        = req.body;
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};