const express = require('express');
const app = express();

const port = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello Byte-Vault!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
