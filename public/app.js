define([
    'jquery',
    'underscore',
    'backbone',
    'router'
], function($, _, Backbone, Router) {

    var initialize = function() {
        Router.initialize();
    }; //end of initialize

    return {
        initialize: initialize
    };


});