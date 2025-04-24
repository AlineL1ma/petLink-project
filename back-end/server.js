const express = require('express');
const cors = require('cors');
const connectDB = require('./database');
const userRoutes = require('./routes/userRoutes');
const petRoutes = require('./routes/petRoutes');
const coleiraRoutes = require('./routes/coleiraRoutes');
const locationRoutes = require('./routes/locationRoutes');

const app = express();

// Conectar ao MongoDB
connectDB();

// Configurações do Express
app.use(cors()); // Permitir requisições de outros domínios
app.use(express.json());

// Servir os arquivos estáticos da PWA (frontend)
app.use(express.static(__dirname));

// Rotas da API
app.use('/api/users', userRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/coleiras', coleiraRoutes);
app.use('/api/locations', locationRoutes);

// Rota de teste
app.get('/api', (req, res) => res.send('API rodando'));

// Iniciar servidor
const PORT = process.env.PORT || 27405;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));