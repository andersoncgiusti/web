const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({ 
    link_image: {
        type: String,
        required: true
    },
    link_catalogue: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('BOOKS', booksSchema);