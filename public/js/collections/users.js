// Filename: collections/projects
define([
    'underscore',
    'backbone',
    // Pull in the Model module from above
    'js/models/PostUser'
], function(_, Backbone, PostUser) {
    var UserCollection = Backbone.Collection.extend({
        url: "http://localhost:3000/api/login",
        model: PostUser
    });
    // You don't usually return a collection instantiated
    return UserCollection;
});