'use strict';

var app = app || {};

(function (module) {
    const resultsView = {};
    const render = function (result) {
        let template = Handlebars.compile($('#results-template').text());
        return template(result);

        //end of const render    
    }
    resultsView.index = function (results) {
        $('#results').show().siblings().hide();
        $('#results article').remove();
        results.forEach(a => $('#results').append(render(a)));
    }

    module.resultsView = resultsView;
    //end of first IIFE function    
})(app);