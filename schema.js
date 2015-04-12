var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
    title: String,
    content: String
});


module.exports = mongoose.model('Commentaires', CommentSchema);