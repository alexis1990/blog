// Filename: collections/projects
define([
    'underscore',
    'backbone',
    // Pull in the Model module from above
    'js/models/PostPrimary'
], function(_, Backbone, PostPrimary) {
    var ProjectCollection = Backbone.Collection.extend({
        url: "http://localhost:3000/api/comments",
        model: PostPrimary
    });
    // You don't usually return a collection instantiated
    return ProjectCollection;
});