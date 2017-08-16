const express = require('express');

const controller = require('../../controllers/api');

const router = express.Router();

router.get('/todos', (req, res, next) => {
  res.json(controller.readTodos());
});

module.exports = router;
