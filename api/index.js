const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_Trost);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

var db = mongoose.connection;
db.once('open', function(){
  console.log('연결')
})
db.on('error', function(err) {
  console.log('DBerror:', err);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
