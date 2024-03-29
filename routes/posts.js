const express = require('express');
const router = express.Router();
const multer = require('multer');
const { storage } = require('../cloudinary');
const upload = multer({ storage });
const { asyncErrorHandler, isLoggedIn, isAuthor } = require('../middleware');
const { postIndex, postNew, postCreate, postShow, postEdit, postUpdate, postDestroy } = require('../controllers/posts');

/* GET posts Index /posts */
router.get('/', asyncErrorHandler(postIndex));

/* GET posts new /posts/new */
router.get('/new', isLoggedIn, postNew);

/* POST posts create /posts */
router.post('/', isLoggedIn, upload.array('images', 4), asyncErrorHandler(postCreate));

/* GET post show /post/:id */
router.get('/:id', asyncErrorHandler(postShow));

/* GET post edit /post/:id/edit  */
router.get('/:id/edit', isLoggedIn, asyncErrorHandler(isAuthor), postEdit);

/* PUT post Update /post/:id */
router.put('/:id', isLoggedIn, asyncErrorHandler(isAuthor), upload.array('images', 4), asyncErrorHandler(postUpdate));

/* DELETE post Destroy /post/:id */
router.delete('/:id', isLoggedIn, asyncErrorHandler(isAuthor), asyncErrorHandler(postDestroy));

module.exports = router;
