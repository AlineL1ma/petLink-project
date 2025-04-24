const Location = require('../models/locationModel');
const Coleira = require('../models/coleiraModel');

// Criar um ponto fixo na localização
exports.createLocation = async (req, res) => {
  try {
    const { nomeLocal, rua, numero, bairro, cidade } = req.body;
    const location = new Location({ nomeLocal, rua, numero, bairro, cidade });
    await location.save();
    res.status(201).json(location);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Procurar localização por meio da coleira
exports.searchColeira = async (req, res) => {
  try {
    const { id } = req.body; // ID da coleira
    const coleira = await Coleira.findOne({ id });
    if (!coleira) {
      return res.status(404).json({ message: 'Coleira não encontrada' });
    }

    // Aqui você pode integrar com um serviço de mapas para obter a localização real
    // Por enquanto, vamos assumir que a localização está associada a um registro no banco
    const location = await Location.findOne(); // Simulação: buscar uma localização fixa
    if (!location) {
      return res.status(404).json({ message: 'Localização não encontrada' });
    }

    res.status(200).json({ coleira, location });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};