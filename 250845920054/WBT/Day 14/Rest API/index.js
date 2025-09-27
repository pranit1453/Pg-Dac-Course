const express = require('express');
const userData = require('./MOCK_DATA.json');
const path = require('path');
const fs = require('fs');

const PORT = 8080;
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Home route
app.get('/', (req, res) => {
    res.send("👋 Welcome to the world of Express JS 😊");
});

// Get all users
app.get('/users', (req, res) => {
    res.json(userData);
});

// Get user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = userData.find(u => u.id === userId);
    user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

// Delete user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const index = userData.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    const deletedUser = userData.splice(index, 1)[0];
    fs.writeFile('./MOCK_DATA.json', JSON.stringify(userData, null, 2), err => {
        if (err) {
            return res.status(500).json({ error: "Failed to delete user" });
        }
        res.json({ message: "User deleted", user: deletedUser });
    });
});

// Get user by ID and Email
app.get('/users/:id/:email', (req, res) => {
    const userId = parseInt(req.params.id);
    const email = req.params.email;
    const user = userData.find(u => u.id === userId && u.email === email);
    user ? res.json(user) : res.status(404).json({ error: "User not found" });
});

// Get user by ID or Email
app.get('/usersdata/:id/:email', (req, res) => {
    const userId = parseInt(req.params.id);
    const email = req.params.email;
    const userById = userData.find(u => u.id === userId);
    const userByEmail = userData.find(u => u.email === email);

    if (userById || userByEmail) {
        res.json({
            userById: userById || null,
            userByEmail: userByEmail || null
        });
    } else {
        res.status(404).json({ error: "User not found" });
    }
});

// Add new user
app.post('/addUser', (req, res) => {
    const newUser = { ...req.body, id: userData.length + 1 };
    userData.push(newUser);

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(userData, null, 2), err => {
        if (err) {
            return res.status(500).json({ error: "Failed to add user" });
        }
        res.json({ message: "User added", user: newUser });
    });
});

// Serve about.html at /users/aboutus

app.get('/aboutus', (req, res) => {
      console.log("Serving about.html");
    res.sendFile(path.join(__dirname, 'about.html'));
});

// Update user by ID

app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedData = req.body;
    const index = userData.findIndex(u => u.id === userId);

    if (index === -1) {
        return res.status(404).json({ error: "User not found" });
    }

    // Merge existing user data with new data
    //the spread operator to update a user object
    userData[index] = { ...userData[index], ...updatedData };

    fs.writeFile('./MOCK_DATA.json', JSON.stringify(userData, null, 2), err => {
        if (err) {
            return res.status(500).json({ error: "Failed to update user" });
        }
        res.json({ message: "User updated", user: userData[index] });
    });
});

// Start server

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
