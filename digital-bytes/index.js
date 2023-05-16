const express = require('express');
const app = express();

const port = 4020;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello Digital-Bytes!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
