const express = require('express');
const router = express.Router();
const locationController = require('../controllers/locationController');

// Rotas para localizações
router.post('/', locationController.createLocation); // Criar localização
router.post('/search', locationController.searchColeira); // Buscar localização por coleira (incompleto)

module.exports = router;