const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
//JS uses index by default, no need to add controller/index
const {
	landingPage,
	getRegister,
	postRegister,
	getLogin,
	postLogin,
	getLogout,
	getProfile,
	updateProfile,
	getForgotPw,
	putForgotPw,
	getReset,
	putReset
} = require('../controllers');

const { asyncErrorHandler, isLoggedIn, isValidPassword, changePassword } = require('../middleware');

/* GET Home page */
router.get('/', asyncErrorHandler(landingPage));

/* GET /register */
router.get('/register', getRegister);

/* POST /resgister */
router.post('/register', upload.single('image'), asyncErrorHandler(postRegister));

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
	upload.single('image'),
	asyncErrorHandler(isValidPassword),
	asyncErrorHandler(changePassword),
	asyncErrorHandler(updateProfile)
);

/* GET /forgot-password*/
router.get('/forgot-password', getForgotPw);

/* PUT /forgot-password*/
router.put('/forgot-password', asyncErrorHandler(putForgotPw));

/* GET /reset-password/:token*/
router.get('/reset/:token', asyncErrorHandler(getReset));

/* PUT /reset-password/:token*/
router.put('/reset/:token', asyncErrorHandler(putReset));

module.exports = router;
