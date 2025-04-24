const express = require('express');
const router = express.Router();
const coleiraController = require('../controllers/coleiraController');

// Rotas para coleiras
router.post('/', coleiraController.createColeira); // Criar coleira

module.exports = router;