'use strict';
var app = app || {};

(function(module){
    const searchController = {};
    searchController.index = () => {
        app.searchView.initPage();
        
    };

    module.searchController = searchController;
})(app);