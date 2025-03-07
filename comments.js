// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Add middleware
app.use(bodyParser.json());

// Store comments
const comments = [];

// Create comment
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.json(comment);
});

// Get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start server
app.listen(4001, () => {
    console.log('Comments service started on port 4001');
});