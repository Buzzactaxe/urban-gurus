const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const PostSchema = new Schema({
    title: String,
    price: String,
    description: String,
    images: [String],
    lat: Number,
    lng: Number,
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
});

module.exports = mongoose.model('Post', PostSchema)