const Pet = require('../models/petModel');

// Adicionar um novo pet
exports.createPet = async (req, res) => {
    try {
        const { nome, gender, peso, idade, raca, rg, coleira, responsible } 
        = req.body;

        const pet 
        = new Pet({ nome, gender, peso, idade, raca, rg, coleira, responsible });
        
        await pet.save();
        res.status(201).json(pet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Listar pets existentes
exports.getPet = async (req, res) => {
    try {
        const pet = await Pet.find().populate('responsible', 'nome');
        res.status(200).json(pet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

exports.getPet = async (req, res) => {
    try {
        const pet = await Pet.findById(req.params.id).populate('responsible', 'nome');
        if (!pet) {
            return res.status(404).json({ message: 'Pet não encontrado' });
        }
        res.status(200).json(pet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Atualizar informações do pet
exports.updatePet = async (req, res) => {
    try {
        const { id } 
        = req.params;

        const { nome, gender, peso, idade, raca, rg, coleira, responsible } 
        = req.body;

        const updatedPet = await Pet.findByIdAndUpdate
        (id, { nome, gender, peso, idade, raca, rg, coleira, responsible }, { new: true });
        if (!updatedPet) 
            return res.status(404).json({ message: 'Pet não encontrado.' });

        res.status(200).json(updatedPet);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Apagar um perfil de pet
exports.deletePet = async (req, res) => {
    try {
        const { id } 
        = req.params;
        
        const deletedPet = await Pet.findByIdAndDelete(id);
        if (!deletedPet) return res.status(404).json({ message: 'Pet não encontrado' });

        res.status(200).json({ message: 'Pet excluído com sucesso.' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
