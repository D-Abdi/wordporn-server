const express = require('express');
const cors = require('cors');
const wordRouter = require('./routers/Word');
const app = express();
const port = process.env.PORT || 3001

require('./db/mongoose');


// Recieve information in JSON format
app.use(express.json());

// Cors?
app.use(cors());

// Add routers
app.use(wordRouter)

// Listen on given port
app.listen(port, () => {
    console.log("Port is live! " + port);
}); 