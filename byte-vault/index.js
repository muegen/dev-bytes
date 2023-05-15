const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const port = 4000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

// const express = require('express');
// const app = express();
// const path = require('path');

// app.get('/', (req, res) => {
//   const filePath = path.join(__dirname, 'index.js');
//   console.log(`Serving file: ${filePath}`);
//   res.sendFile(filePath);
// });

// const port = 4000;

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });
