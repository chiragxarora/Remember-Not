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
});

const Credential = mongoose.model('Credential', credentialSchema);

module.exports = Credential;