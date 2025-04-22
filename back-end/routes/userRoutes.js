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

const express = require('express');
const connectDB = require('./database');

const app = express();
app.use(express.json());

app.post('/user', async (req, res) => {
  const db = await connectDB();
  const result = await db.collection('user').insertOne(req.body);
  res.status(201).send(result);
});

app.listen(5000, () => console.log('Servidor na porta 5000'));

module.exports = router;