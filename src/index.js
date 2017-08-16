const express = require('express');

const app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

const port = parseInt(process.env.PORT || 8080, 10);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
