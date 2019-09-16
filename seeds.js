const faker = require('faker');
const Post = require('./models/post');

async function seedPosts() {
	await Post.remove({});
	for (const i of new Array(40)) {
		const post = {
			title       : faker.lorem.word(),
			description : faker.lorem.text(),
			coordinates : [ -51.22172, 6.77616 ],
			author      : {
				_id      : '5d709fa0c0ab8d1dd0f4d58b',
				username : 'valliant'
			}
		};
		await Post.create(post);
	}
	console.log('40 new posts created');
}

module.exports = seedPosts;
