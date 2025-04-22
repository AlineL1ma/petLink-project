const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

// Criar um novo usuário
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Listar todos os usuários
router.get('/', async (req, res) => {
  try {
    const user = await User.find();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;