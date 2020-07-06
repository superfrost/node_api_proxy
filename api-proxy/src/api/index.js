/* eslint-disable linebreak-style */
const express = require('express');

const marsWether = require('./mars-wether');

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋',
  });
});

router.use('/mars-wether', marsWether);

module.exports = router;
