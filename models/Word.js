const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    language: {
        type: String,
        required: true,
    },
    word: {
        type: String,
        required: true,
    },
    definition: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Word = mongoose.model('Word', wordSchema);

module.exports = Word;