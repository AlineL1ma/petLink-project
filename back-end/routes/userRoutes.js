const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

// Rotas para usuários
router.post('/register', userController.createUser); // Cadastro
router.post('/login', userController.login); // Login
router.get('/', authMiddleware, userController.getUsers); // Listar todos os usuários (protegido)
router.get('/:id', authMiddleware, userController.getUserById); // Buscar usuário por ID (protegido)
router.put('/:id', authMiddleware, userController.updateUser); // Atualizar usuário (protegido)
router.delete('/:id', authMiddleware, userController.deleteUser); // Excluir usuário (protegido)

module.exports = router;