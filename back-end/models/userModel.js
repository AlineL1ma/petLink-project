const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Parâmetros para perfil do usuário
const userSchema = new mongoose.Schema({
  nome: { 
    type: String, 
    required: true 
  },
  numero: { 
    type: Number, 
    required: true, 
    minlength: 11, 
    unique: true 
  },
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  senha: { 
    type: String, 
    required: true, 
    minlength: 8, 
    match: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,}$/ 
  }
});

// Criptografia da senha antes de salvar
userSchema.pre('save', async function (next) {
  if (!this.isModified('senha')) return next();
  const salt = await bcrypt.genSalt(10);
  this.senha = await bcrypt.hash(this.senha, salt);
  next();
});

module.exports = mongoose.model('User', userSchema);