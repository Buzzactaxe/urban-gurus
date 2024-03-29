const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const ReviewSchema = new Schema({
	body   : String,
	rating : Number,
	author : {
		type : Schema.Types.ObjectId,
		ref  : 'User'
	}
});

module.exports = mongoose.model('Review', ReviewSchema);
