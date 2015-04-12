var mongoose = require('mongoose');
var Schema = mongoose.Schema;
passportLocalMongoose = require('passport-local-mongoose');

var UserSchema = new Schema({
    username: String,
    password: String,
    mail: String
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', UserSchema);