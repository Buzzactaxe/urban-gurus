const Post = require('../models/post');

module.exports = {
	//Post index
	async postIndex(req, res, next) {
		let posts = await Post.find({});
		res.render('posts/index', {
			posts
		});
	},
	//Posts New
	postNew(req, res, next) {
		res.render('posts/new');
	},
	//Posts Create
	async postCreate(req, res, next) {
		// use req.body to create a new Post
		let post = await Post.create(req.body.post);
		res.redirect(`/posts/${post.id}`);
	},
	//Posts Show
	async postShow(req, res, next) {
		let post = await Post.findById(req.params.id);
		res.render('posts/show', { post });
	},
	async postEdit(req, res, next) {
		let post = await Post.findById(req.params.id);
		res.render('posts/edit', { post });
	},
	async postUpdate(req, res, next) {
		let post = await Post.findByIdAndUpdate(req.params.id, req.body.post);
		res.redirect(`/posts/${post.id}`);
	},
	async postDestroy(req, res, next) {
		await Post.findByIdAndRemove(req.params.id);
		res.redirect('/posts');
	}
};
