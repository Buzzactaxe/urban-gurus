const express = require('express');
const router = express.Router();
//JS uses index by default, no need to add controller/index
const {
	landingPage,
	getRegister,
	postRegister,
	getLogin,
	postLogin,
	getLogout,
	getProfile,
	updateProfile
} = require('../controllers');

const { asyncErrorHandler, isLoggedIn, isValidPassword, changePassword } = require('../middleware');

/* GET Home page */
router.get('/', asyncErrorHandler(landingPage));

/* GET /register */
router.get('/register', getRegister);

/* POST /resgister */
router.post('/register', asyncErrorHandler(postRegister));

/* GET /login*/
router.get('/login', getLogin);

/* POST /login*/
router.post('/login', asyncErrorHandler(postLogin));

/* GET /logout*/
router.get('/logout', getLogout);

/* GET /profile*/
router.get('/profile', isLoggedIn, asyncErrorHandler(getProfile));

/* PUT /profile*/
router.put(
	'/profile',
	isLoggedIn,
	asyncErrorHandler(isValidPassword),
	asyncErrorHandler(changePassword),
	asyncErrorHandler(updateProfile)
);

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
