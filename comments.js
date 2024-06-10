// Create web server
// npm install express
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const comments = require('./comments.json');

app.use(bodyParser.json());

// GET /comments
// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// POST /comments
// Create a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json(comment);
});

// GET /comments/:id
// Get a comment by ID
app.get('/comments/:id', (req, res) => {
    res.json(comments[req.params.id]);
});

// PUT /comments/:id
// Update a comment by ID
app.put('/comments/:id', (req, res) => {
    const comment = req.body;
    comments[req.params.id] = comment;
    res.json(comment);
});

// DELETE /comments/:id
// Delete a comment by ID
app.delete('/comments/:id', (req, res) => {
    const comment = comments[req.params.id];
    comments.splice(req.params.id, 1);
    res.json(comment);
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000/');
});

// npm install nodemon
// nodemon comments.js
// Open Postman
// GET http