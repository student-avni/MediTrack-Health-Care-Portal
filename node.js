const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/register', (req, res) => {
    
    res.status(200).json({ message: 'Registration successful' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});