const express = require('express');
const fs = require('fs');
const cors = require('cors');
/*
    CORS (Cross-Origin Resource Sharing) in Express.js is a mechanism that allows web applications running on 
    one domain (origin) to make requests to resources on another domain.
*/
const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

app.post('/save-user-data', (req, res) => {
    const newUserData = req.body;

    fs.readFile('userData.json', 'utf8', (readErr, data) => {
        let existingData = [];

        if (!readErr && data) {
            try {
                existingData = JSON.parse(data);
            } catch (parseErr) {
                console.error('Error parsing existing data:', parseErr);
            }
        }

        existingData.push(newUserData);

        fs.writeFile('userData.json', JSON.stringify(existingData, null, 2), (writeErr) => {
            if (writeErr) {
                console.error('Error writing file:', writeErr);
                return res.status(500).send('Error saving data');
            }
            res.send('Data saved successfully');
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
