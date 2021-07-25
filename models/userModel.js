const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')
const validator = require('validator');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name']
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: [true, 'A user must have an email'],
        validate: [validator.isEmail, 'Please provide a valid email!']
    },
    photo: String,
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'A user must have a password'],
        minlength: [8, 'Password should be atleast 8 characters long'],
        select: false
    },
    passwordConfirm: {
        type: String,
        required: [true, 'A user must have a password'],
        validate: {
            validator: function (el) {
                return this.password === el;
            } 
        }  
    }
});

// Encrypting password!!
userSchema.pre('save', async function(next) {
    if(!this.isModified('password')){    // will run only if password field is changed or created(signup)
        return next();
    }
    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
    next();
});

// checking login credentials
userSchema.methods.correctPassword = async function (candidatePass, userPass) {
    return await bcrypt.compare(candidatePass, userPass);
}

const User = mongoose.model('User', userSchema);

module.exports = User;