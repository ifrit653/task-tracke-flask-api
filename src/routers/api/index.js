const express = require('express');

const controller = require('../../controllers/api');

const router = express.Router();

router.get('/square/:number', (req, res, next) => {
  const number = parseInt(req.params.number, 10);

  const result = controller.square(number);

  res.json({ result });
});

module.exports = router;
