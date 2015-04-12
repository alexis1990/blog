define([
    'underscore',
    'backbone',
    'js/views/offers/edit'
], function(_, Backbone) {

    var PostUser = Backbone.Model.extend({
        idAttribute: "_id",
        urlRoot: 'api/register',
        defaults: {
            username: '',
            password: '',
            mail: ''
        }
    });
    return PostUser;
});