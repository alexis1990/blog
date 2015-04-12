define([
    'jquery',
    'underscore',
    'backbone',
    'text',
    'text!templates/users/edit.html',
    'js/collections/users',
    'js/models/PostUser'
], function($, _, Backbone, text, edit, UserCollection, PostUser) {

    var accueilView = Backbone.View.extend({
        el: $('#content'),
        events: {
            "click  #submitUser": "onClickPostUser"
        },
        initialize: function() {
            this.collection = new UserCollection();
            this.collection.fetch({
                success: function(res) {
                    console.log(res);
                }
            });
        },
        render: function() {

            var compiledTemplate = _.template(edit);

            this.$el.html(compiledTemplate);
        },
        onClickPostUser: function() {
            var uname = $("#username").val();
            var passwrd = $("#password").val();
            var email = $("#mail").val();
            if (uname != '' && passwrd != '' && email != '') {
                var PostU = new PostUser({
                    username: uname,
                    password: passwrd,
                    mail: email
                });
                PostU.save();
                $("#username").val('');
                $("#password").val('');
                $("#mail").val('');
            }
        }
    });
    return accueilView;

});