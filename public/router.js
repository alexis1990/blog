define([
        'jquery',
        'underscore',
        'backbone',
        'js/views/offers/edit',
        'js/views/offers/list',
        'js/views/users/edit',
    ],
    function($, _, Backbone, homeView, link1View, accueilView) {

        var Router = Backbone.Router.extend({
            routes: {
                "": "accueil",
                "home": "home",
                "work": "work",
                "*actions": "accueil"
            }
        });

        var initialize = function() {

            var router = new Router();

            router.on("route:accueil", function() {
                var accueilV = new accueilView();
                accueilV.render();
            });

            router.on("route:home", function() {
                var homeV = new homeView();
                homeV.render();
            });

            router.on("route:work", function() {
                var link1V = new link1View();
                link1V.render();
            });

            Backbone.history.start();
        };

        return {
            initialize: initialize
        };

    });