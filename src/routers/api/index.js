const express = require('express');

const router = express.Router();

router.get('/test', (req, res, next) => {
  res.json({ message: 'Testing' });
});

module.exports = router;
