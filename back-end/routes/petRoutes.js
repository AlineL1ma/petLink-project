const express = require('express');
const router = express.Router();
const petController = require('../controllers/petController');
const authMiddleware = require('../middleware/auth');

// Rotas para pets
router.post('/', authMiddleware, petController.createPet); // Criar pet (protegido)
router.get('/', petController.getPet); // Listar todos os pets
router.get('/:id', petController.getPet); // Buscar pet por ID
router.put('/:id', authMiddleware, petController.updatePet); // Atualizar pet (protegido)
router.delete('/:id', authMiddleware, petController.deletePet); // Excluir pet (protegido)

module.exports = router;