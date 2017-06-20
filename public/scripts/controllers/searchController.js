'use strict';
var app = app || {};

(function(module){
    const searchController = {};
    searchController.index = (ctx) => app.searchView.index(ctx.results)
})