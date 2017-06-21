'use strict';

var app = app || {};

(function (module) {
    const resultsView = {};
    const render = function (result) {
        let template = Handlebars.compile($('#results-template').text());
        return template(result);

        //end of const render    
    };
    resultsView.index = function () {
        $('#results').show().siblings().hide();
        $('#results article').remove();
        if (app.Result.all.length === 0) {
            $('#no-results').show();
            $('#no-results-text').text('Sorry, no results for “' + app.searchView.titleStringRaw + '.”');
        } else {
            app.Result.all.forEach(a => $('#results').append(render(a)));
            app.resultsView.initFave();
        }
    };

    resultsView.initFave = function () {
        $('.save-fave').on('click', function (event) {
            var index = $(this).parent().parent().index() - 1;
            var arrayPos = app.Result.all[index];
            var obj = {
                name: arrayPos.Name,
                type: arrayPos.Type,
                teaser: arrayPos.wTeaser,
                url: arrayPos.wUrl
            };
            app.Result.insertRecord(obj);
        });
    };

    module.resultsView = resultsView;
    //end of first IIFE function    
})(app);