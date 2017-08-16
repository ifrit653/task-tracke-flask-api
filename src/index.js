const express = require('express');

const config = require('./config');
const apiRouter = require('./routers/api');

const app = express();

app.use('/', express.static('./src/static'));

app.use('/api', apiRouter);

const server = app.listen(config.port, () => {
  console.log(`Listening on port ${config.port}`);
});
