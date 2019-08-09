const express = require('express');
const router = express.Router();
const { asyncErrorHandler } = require('../middleware');
const { postIndex, postNew, postCreate, postShow, postEdit, postUpdate, postDestroy } = require('../controllers/posts');

/* GET posts Index /posts */
router.get('/', asyncErrorHandler(postIndex));

/* GET post new /posts/new */
router.get('/new', postNew);

/* POST posts create /posts */
router.post('/', asyncErrorHandler(postCreate));

/* GET post SHOW /post/:id */
router.get('/:id', asyncErrorHandler(postShow));

/* GET post edit /post/:id/edit  */
router.get('/:id/edit', asyncErrorHandler(postEdit));
/* PUT post Update /post/:id */
router.put('/:id', asyncErrorHandler(postUpdate));
/* DELETE post Destroy /post/:id */
router.delete('/:id', asyncErrorHandler(postDestroy));

module.exports = router;
