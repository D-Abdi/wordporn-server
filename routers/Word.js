const express = require('express');
const Word = require('../models/Word');

const router = express.Router();

// Create new Word 

router.post('/word/create', async (req, res) => {
    const word = new Word(req.body);

    try {
        await word.save();
        res.send(word);
    } catch (e) {
        res.status(400).send(e);
    };
});

// Get single word

router.get('/word/:id', async (req,res) => {
    try {
        const word = await Word.findById({ _id: req.params.id })

        if (!word) {
            res.status(404).send();
        }

        res.send(word)
    } catch (e) {
        res.status(400).send(e);
    }
})

// Get all words

router.get('/words', async (req, res) => {
    Word.find({}, (err, result) => {
        try {
            res.send(result);
        } catch (e) {
            console.log(e);
        };
    });
});

module.exports = router;