'use strict';

var app = app || {};

(function(module){
    const shelfController = {};
    shelfController.index = () => {
        // app.shelfView.initPage();
        app.Shelf.fetchAll(app.shelfView.initPage);
    };
    module.shelfController = shelfController;
})(app);