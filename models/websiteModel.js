const mongoose = require('mongoose');

const websiteSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: [true, 'Website must have a name']
    },
    photo: String,
    link: {
        type: String,
        unique: true,
        required: [true, 'Website must have a url']
    }
});


const Website = mongoose.model('Website', websiteSchema);

module.exports = Website;