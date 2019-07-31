const express = require('express');
const router = express.Router();


/* GET home page. */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts');
});

/* GET post new /posts/new */
router.get('/new', (req, res, next) => {
    res.send('NEW /posts/new');
});
/* POST home page. */
router.post('/', (req, res, next) => {
    res.send('CREATE /post');
});
/* GET post show /post/:id */
router.get('/:id', (req, res, next) => {
    res.send('SHOW /post/:id');
});
/* GET post edit /post/:id/edit  */
router.get('/:id/edit', (req, res, next) => {
    res.send('EDIT post/:id/edit');
});
/* PUT post Update /post/:id */
router.put('/:id', (req, res, next) => {
    res.send('UPDATE /posts/:id');
});
/* DELETE post Destroy /post/:id */
router.delete('/:id', (req, res, next) => {
    res.send('DELETE /posts/:id');
});

module.exports = router;