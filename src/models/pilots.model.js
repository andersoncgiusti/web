const mongoose = require('mongoose');

const pilotsSchema = new mongoose.Schema({  
    photo: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('PILOTS', pilotsSchema);