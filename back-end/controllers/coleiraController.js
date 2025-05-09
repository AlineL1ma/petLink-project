const Coleira = require('../models/coleiraModel');

// Cadastrar uma nova coleira
exports.criarColeira = async (req, res) => {
    try {
        const { nomeColeira, id, responsible }
        = req.body;
        
        const coleira = 
        new Coleira({ nomeColeira, id, responsible });

        await coleira.save();
        res.status(201).json(coleira);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};