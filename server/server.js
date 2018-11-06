const path = require('path');
const express = require('express');
const app = express(); //Creates an express application
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

// express.static: Create a new middleware function to serve files from within a given root directory.
app.use(express.static(publicPath)); 

app.get('*', (req, res) => {
    // Transfer the file at the given 'path'
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log('Server is up!');
});