// define([
//     'jquery',
//     'underscore',
//     'backbone',
//     'text',
//     'text!templates/offers/list.html',
//     'js/collections/offers',
//     'js/models/PostUser'
// ], function($, _, Backbone, text, list, ProjectCollection, PostPrimary) {

//     var link1View = Backbone.View.extend({
//         el: $('#content'),
//         template: _.template(list),
//         events: {},
//         initialize: function() {
//             this.collection = new UserCollection();
//             this.collection.fetch({
//                 success: function(res) {
//                     console.log(res);
//                     that.render();
//                 }
//             });
//         },
//         render: function() {
//             this.$el.html(this.template({
//                 collection: this.collection.toJSON()
//             }));
//         }

//     });
//     return link1View;

// });