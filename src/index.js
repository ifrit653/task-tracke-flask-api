const express = require('express');

const app = express();

app.use('/', express.static('./src/static'));

app.get('/api/test', (req, res, next) => {
  res.json({ message: 'Testing' });
});

const port = parseInt(process.env.PORT || 8080, 10);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
