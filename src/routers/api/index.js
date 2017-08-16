const express = require('express');
const bodyParser = require('body-parser');

const controller = require('../../controllers/api');

const router = express.Router();

router.post('/todos', bodyParser.json({}), (req, res, next) => {
  const text = req.body.text;

  controller.createTodo({ text });

  res.status(204).end();
});

router.get('/todos', (req, res, next) => {
  res.json(controller.readTodos());
});

module.exports = router;
