'use strict';

var app = app || {};

(function (module) {
    const resultsView = {};
    const render = function(result) {
        let template = Handlebars.compile($('#results-template').text());
        return template(result);

    //end of const render    
    }
module.resultsView = resultsView;
//end of first IIFE function    
})(app);