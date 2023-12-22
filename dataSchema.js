const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
loc: {
        type: String,
        required: true
    },
typ: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', ReactFormDataSchema);
module.exports = User;