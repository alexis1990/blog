require.config({
    paths: {
        jquery: './js/libs/jquery',
        underscore: './js/libs/underscore',
        backbone: './js/libs/backbone',
        text: './text'
    }

});

require([
    'app',
], function(init) {
    init.initialize();
});