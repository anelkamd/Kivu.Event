const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes de base
app.get('/', (req, res) => {
    res.send('Kivu.Event API is running...');
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
