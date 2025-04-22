const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);


// Parâmetros para parfil do usuário
const userSchema = 
new mongoose.Schema({
    nome: 
    { type: String, 
    required: true },

    numero:
    { type: Number, 
    required: true, 
    minlength: 11, 
    unique: true },

    email: 
    { type: String, 
    required: true, 
    unique: true },

    senha: 
    { type: String, 
    required: true, 
    minlength: 8, 
    match: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$%^&*!])[A-Za-z\d@#$%^&*!]{6,}$/ }
    //O match garante que a senha tenha ao menos um caractere de cada elemento pedido
});

// Criptografia do usuário
userSchema.pre('save', async function (next) 
{
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const user = mongoose.model('User', userSchema);
module.exports = mongoose.model('User', userSchema);