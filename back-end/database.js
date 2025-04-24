const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://alinekaren27lima:zmDvxuJ8QjebIar7@petlink.8d5hess.mongodb.net/?retryWrites=true&w=majority&appName=PetLink://localhost:27405/PetLinkBD', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB conectado com sucesso!');
  } catch (error) {
    console.error('Erro ao conectar ao MongoDB:', error);
    process.exit(1); // Encerra o processo em caso de erro
  }
};

const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://alinekaren27lima:zmDvxuJ8QjebIar7@petlink.8d5hess.mongodb.net/?retryWrites=true&w=majority&appName=PetLink://localhost:27405/PetLinkBD';
const client = new MongoClient(uri);

async function connectDB() {
  try {
    await client.connect();
    console.log('Conectado ao MongoDB!');
    return client.db('PetLinkBD');
  } catch (error) {
    console.error('Erro ao conectar:', error);
    process.exit(1);
  }
}

module.exports = connectDB;