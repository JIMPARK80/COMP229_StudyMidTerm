const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/info', (req, res) => {
  res.send('Site Info');
});

app.get('/contact', (req, res) => {
  res.send('Contact us');
});

app.get('/Products', (req, res) => {
  res.send('Here are Products');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});