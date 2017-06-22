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
            $('#yes-results').hide();
            $('#no-results-text').text('Sorry, no results for “' + app.searchView.titleStringRaw + '.”');
        } else {
            $('#no-results').hide();
            $('#yes-results').show();
            $('#yes-results h2').text('Showing results for “' + app.searchView.titleStringRaw + '.”');
            app.Result.all.forEach(a => $('#results-container').append(render(a)));
            app.resultsView.initFave();
        }
    };

    resultsView.initFave = function () {
        $('.save-fave').on('click', function (event) {
            var index = $(this).parent().parent().index();
            console.log(index);
            var arrayPos = app.Result.all[index];
            console.log(arrayPos);
            var obj = {
                name: arrayPos.Name,
                type: arrayPos.Type,
                teaser: arrayPos.wTeaser,
                url: arrayPos.wUrl
            };
            console.log('obj = ' + obj);
            app.Result.insertRecord(obj);
        });
    };

    module.resultsView = resultsView;
    //end of first IIFE function    
})(app);