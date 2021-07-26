const mongoose = require('mongoose');

const credentialSchema = new mongoose.Schema({
    loginId: {
        type: String,
        required: [true, 'Credentials must have a username/login id']
    },
    password: {
        type: String,
        required: [true, 'Credentials must have a password']
    },
    websiteId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'login info must belong to a website!'],
        ref: 'Website'
    },
    userId: {
        type: mongoose.Schema.ObjectId,
        required: [true, 'login info must belong to a user!'],
        ref: 'User'
    }
});

const Credential = mongoose.model('Credential', credentialSchema);

module.exports = Credential;