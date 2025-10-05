const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Connecting SQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',           // changing to username
    password: 'yourpassword', // cahnge this to mqsql password
    database: 'EasyMedDB'
});

db.connect(err => {
    if (err) throw err;
    console.log("✅ Connected to MySQL Database");
});

// ✅ Registration API
app.post('/register', (req, res) => {
    const { name, email, contact, password } = req.body;

    const sql = "INSERT INTO Patients (name, email, contact, password) VALUES (?, ?, ?, ?)";
    db.query(sql, [name, email, contact, password], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: '❌ Registration failed' });
        }
        res.status(200).json({ 
            message: '✅ Registration successful', 
            patientId: result.insertId 
        });
    });
});

// ✅ Start Server
app.listen(port, () => {
    console.log(`🚀 Server is running on port ${port}`);
});
