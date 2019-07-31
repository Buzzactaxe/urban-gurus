const express = require('express');
const router = express.Router();

/* GET posts index /posts. */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Urban Gurus - Home'
  });
});

module.exports = router;