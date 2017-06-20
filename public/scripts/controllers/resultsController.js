'use strict';
var app = app || {};

(function(module){
    const resultsController = {};
    resultsController.index = () => {
        app.Result.fetchAll(app.resultsView.index);
    }

    module.resultsController = resultsController;
})(app);