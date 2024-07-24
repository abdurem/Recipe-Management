// import express
const express = require('express');

// create an express app
const app = express();

// use the express-static middleware
app.use(express.static('public'));

// allow cross-origin requests
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// define the first route
app.get('/api', (req, res) => {
  res.send('Hello from the API');
});

// start the server listening for requests
app.listen(process.env.PORT || 3000, () => console.log('Server is running...'));