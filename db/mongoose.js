const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:adminadmin@cluster0.hexe5.mongodb.net/list-of-words?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})