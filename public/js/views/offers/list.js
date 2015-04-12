define([
    'jquery',
    'underscore',
    'backbone',
    'text',
    'text!templates/offers/list.html',
    'js/collections/offers',
    'js/models/PostPrimary'
], function($, _, Backbone, text, list, ProjectCollection, PostPrimary) {

    var link1View = Backbone.View.extend({
        el: $('#content'),
        template: _.template(list),
        events: {
            "click  .delete": "remove",
            "click  #btn-edit": "change",
            "click  .edit": "showForm"
        },
        initialize: function() {
            var that = this;
            this.collection = new ProjectCollection();
            this.collection.fetch({
                success: function(res) {
                    that.render();
                }
            });
            _.bindAll(this, 'render');
            this.collection.bind('reset', this.render);
            this.collection.bind('change', this.render);
            this.collection.bind('add', this.render);
            this.collection.bind('remove', this.render);
        },
        remove: function(e) {
            e.preventDefault();
            var ID = $(e.currentTarget).data("id");
            var DataModel = new PostPrimary({
                _id: ID
            });
            DataModel.destroy();
            this.collection.remove(ID);

        },
        showForm: function(e) {
            e.preventDefault();
            var ID = $(e.currentTarget).data("id");
            $(".editForm[data-id='" + ID + "']").show(500);
        },
        change: function(e) {
            e.preventDefault();
            var ID = $(e.currentTarget).data("id");
            var titre = $("#titledit[data-id='" + ID + "']").val();
            var contenue = $("#contenuedit[data-id='" + ID + "']").val();
            var DataModel = new PostPrimary({
                _id: ID,
                title: titre,
                content: contenue
            });
            DataModel.save();
            this.collection.fetch({});
        },
        render: function() {
            this.$el.html(this.template({
                collection: this.collection.toJSON()
            }));
        }

    });
    return link1View;

});