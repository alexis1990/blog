define([
    'underscore',
    'backbone',
    'js/views/offers/edit'
], function(_, Backbone) {
    var PostPrimary = Backbone.Model.extend({
        idAttribute: "_id",
        urlRoot: 'api/comments',
        defaults: {
            title: "title",
            content: "content"
        }
    });
    return PostPrimary;
});