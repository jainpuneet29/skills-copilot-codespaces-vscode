// Create web server

// Imports
const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');

// Create web server
const app = express();

// Use body parser
app.use(bodyParser.json());

// Use cors
app.use(cors());

// Create comments object
const commentsByPostId = {};

// Create route for getting comments
app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

// Create route for creating comments
app.post('/posts/:id/comments', (req, res) => {
    // Create id
    const commentId = randomBytes(4).toString('hex');

    // Get content from body
    const { content } = req.body;

    // Get post comments
    const comments = commentsByPostId[req.params.id] || [];

    // Add comment to post
    comments.push({ id: commentId, content });

    // Update comments
    commentsByPostId[req.params.id] = comments;

    // Send back comments
    res.status(201).send(comments);
});

// Listen on port 4001
app.listen(4001, () => {
    console.log('Listening on 4001');
});