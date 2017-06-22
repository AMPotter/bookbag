'use strict';

var app = app || {};

(function(module) {
    const shelfView = {};

    const render = function(result) {
        let template = Handlebars.compile($('#shelf-template').text());
        return template(result);
    };

    shelfView.initPage = function() {
        $('#shelf').show().siblings().hide();
        app.Shelf.all.forEach(a => $('#shelf').append(render(a)));
    };

    module.shelfView = shelfView;
})(app);