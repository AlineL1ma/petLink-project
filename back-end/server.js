const express = require('express');
const connectDB = require('./database');

const app = express();

// Conectar ao MongoDB
connectDB();

// Configurações do Express
app.use(express.json());

// Rotas
app.get('/', (req, res) => res.send('API rodando'));

// Iniciar servidor
const PORT = process.env.PORT || 27405;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));