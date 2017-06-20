'use strict';
var app = app || {};

(function(module){
    const resultsController = {};
    resultsController.index = (ctx) => app.resultsView.index(ctx.results);

})(app);