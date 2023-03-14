import express from 'express';
const app = express();

const bodyParser = require('body-parser');

app.post('/', (req, res) => {
  console.log('/api/');
  res.send('API test');
})

module.exports = {
  path: '/api',
  handler: app
}

app.use(bodyParser.json())
