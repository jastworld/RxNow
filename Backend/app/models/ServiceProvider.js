const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;


var UserSchema = new Schema({
	name: {
		type: String,
		required: [true, "can't be blank"],
		match: [/^[a-zA-Z0-9 ]+$/, 'is invalid']
	},
	location : {
		type: String,
		lowercase: true,
		//required: [true, "can't be blank"],
		match: [/^[a-zA-Z0-9_.-]+$/, 'is invalid'],
		//index: true,
		//unique: true
	},
	email: {
		type: String,
		lowercase: true,
		required: [true, "can't be blank"],
		match: [/\S+@\S+\.\S+/, 'is invalid'],
		index: true,
		//unique: true
	},
	phoneNumber: {
		type: String,
		//required: [true, "can't be blank"],
	},
	password: {
		type: String,
		required: true
	},
	access: {
		type: String,
		required: [true, "cant be blank"]
	},
	nokName:{
		type: String,
	},
	nokEmail:{
		type: String,
	},
	nokPhoneNumber:{
		type: String,
	},
	nokAddress:{
		type: String,
	},
	pcpName:{
		type: String,
	},
	pcpEmail:{
		type: String,
	},
	pcpPhoneNumber:{
		type: String,
	},
	pcpSpecialization: {
		type: String,
	},
    pcpHospital: {
		type: String,
	},
    pcpHospitalAddress: {
		type: String,
	},
	enabled:{
		type: Boolean,
		default: false
	},
	profile_image_meta:{
		bucket: String,
		etag : String,
		key: String,
		location: {
			type: String,
			default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
		},	
	},
	
},{timestamps: true, collection: 'users'});

UserSchema.pre('save', function(next) {
    var user = this;

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if (err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

UserSchema.index({fullName: 'text', userName:'text', email:'text'});


module.exports = mongoose.model('User', UserSchema);
