const Coleira = require('../models/coleiraModel');

// Cadastrar uma nova coleira
exports.createColeira = async (req, res) => {
    try {
        const { nameColeira, rg, id, responsible }
        = req.body;
        
        const coleira = 
        new Coleira({ nameColeira, rg, id, responsible });

        await coleira.save();
        res.status(201).json(coleira);
    } catch (err) {
        res.status(400).json({ error: err.message});
    }
};