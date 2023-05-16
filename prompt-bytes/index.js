const express = require('express');
const app = express();

const port = 4030;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello Prompt-Bytes!');
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
