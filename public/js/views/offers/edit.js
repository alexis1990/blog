define([
    'jquery',
    'underscore',
    'backbone',
    'text',
    'text!templates/offers/edit.html',
    'js/models/PostPrimary'
], function($, _, Backbone, text, edit, PostPrimary) {

    var homeView = Backbone.View.extend({
        el: $('#content'),
        events: {
            "click  #btn-submit": "onClickBtnLogin"
        },
        initialize: function() {},
        render: function() {

            var compiledTemplate = _.template(edit);

            this.$el.html(compiledTemplate);
        },
        onClickBtnLogin: function() {
            var titre = $("#title").val();
            var contenu = $("#contenu").val();
            if (titre != '' && contenu != null) {
                var DataModel = new PostPrimary({
                    title: titre,
                    content: contenu
                });
                DataModel.save();
                $("#title").val('');
                $("#contenu").val('');
            }
        }
    });
    return homeView;

});