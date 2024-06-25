  const express = require('express');
  const app = express();
  const port = 3000;

app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/home.html');
})

app.get('/bio', (req, res) => {
  res.sendFile(__dirname + '/bio.html');
})

app.get('/hobbies', (req, res) => {
  res.sendFile(__dirname + '/hobbies.html');
})

app.listen(port, () => {
    console.log('Server is running at https;//localhost:${port}');
});
