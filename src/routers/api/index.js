const express = require('express');

const controller = require('../../controllers/api');

const router = express.Router();

router.get('/square/:number', controller.handleTest);

module.exports = router;
