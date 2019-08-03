const express = require('express');
const router = express.Router();
const passport = require('passport');
//JS uses index by default, no need to add controller/index
const {
  postRegister
} = require('../controllers');
const {
  errorHandler
} = require('../middleware');

/* GET Home page */
router.get('/', (req, res, next) => {
  res.render('index', {
    title: 'Urban Gurus - Home'
  });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /resgister */
router.post('/register', errorHandler(postRegister));

/* GET /login*/
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login*/
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/login'
}));

/* GET /logout*/
router.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect('/');
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