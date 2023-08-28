const express = require('express')
const app = express()
const port = 3000

// Define a root route for the site
app.get('/', (req, res) => {
    res.send('Hello, world!');
})

app.get('/blah', (req, res) => {
    res.send('Blah blah blah!');
})

app.get('/ha', (req, res) => {
    res.send('Hahahahaha!');
})

// Start the server so it listens for requests
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})