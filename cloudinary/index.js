const crypto = require('crypto');
const cloudinary = require('cloudinary');
cloudinary.config({
	cloud_name : 'dmxvla004',
	api_key    : '136844136788613',
	api_secret : process.env.CLOUDINARY_SECRET
});
const cloudinaryStorage = require('multer-storage-cloudinary');
const storage = cloudinaryStorage({
	cloudinary,
	folder         : 'urban-gurus',
	allowedFormats : [ 'jpeg', 'jpg', 'png' ],
	filename       : function(req, file, cb) {
		let buf = crypto.randomBytes(16);
		buf = buf.toString('hex');
		let uniqFileName = file.originalname.replace(/\.jpeg|\.jpg|\.png/gi, '');
		uniqFileName += buf;
		cb(undefined, uniqFileName);
	}
});

module.exports = {
	cloudinary,
	storage
};
