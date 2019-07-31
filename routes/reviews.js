const express = require('express');
const router = express.Router({
    merfeParams: true
});

/* GET reviews index /posts/:id/reviews. */
router.get('/', (req, res, next) => {
    res.send('INDEX /posts/:id/reviews');
});

/* review reviews create /posts/:id/reviews */
router.post('/', (req, res, next) => {
    res.send('CREATE /posts/:id/reviews');
});
/* GET reviews show /posts/:id/review/:review_id */
router.get('/:review_id', (req, res, next) => {
    res.send('SHOW /posts/:id/review/:id');
});
/* GET reviews edit /posts/:id/review/:review_id/edit  */
router.get('/:review_id/edit', (req, res, next) => {
    res.send('EDIT /posts/:id/review/:id/edit');
});
/* PUT reviews Update /posts/:id/review/:review_id */
router.put('/:review_id', (req, res, next) => {
    res.send('UPDATE /posts/:id/reviews/:id');
});
/* DELETE reviews Destroy /posts/:id/review/:review_id */
router.delete('/:review_id', (req, res, next) => {
    res.send('DELETE /posts/:id/reviews/:review_id');
});

module.exports = router;