const express = require('express');
const router = express.Router();

/* GET Home page */
router.get('/', (req, res, next) => {
  res.send('index', {
    title: 'Urban Gurus - Home'
  });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /resgister */
router.post('/register', (req, res, next) => {
  res.send('POST /register');
});

/* GET /login*/
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login*/
router.post('/login', (req, res, next) => {
  res.send('POST /login');
});

/* GET /profile*/
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT /profile/:user_id*/
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});

/* GET /forgot-pw*/
router.get('/forgot-pw', (req, res, next) => {
  res.send('GET /fogot-pw');
});

/* PUT /forgot-pw*/
router.put('/forgot-pw', (req, res, next) => {
  res.send('PUT /fogot-pw');
});

/* GET /reset-pw/:token*/
router.get('/reset-pw/:token', (req, res, next) => {
  res.send('GET /reset-pw/:token');
});

/* PUT /reset-pw/:token*/
router.put('/reset-pw/:token', (req, res, next) => {
  res.send('put /reset-pw/:token');
});
module.exports = router;