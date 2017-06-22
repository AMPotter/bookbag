'use strict';

var app = app || {};

(function(module) {
    const searchView = {};

    searchView.initPage = function() {
        $('#search').show().siblings().hide();
        $('#no-results').hide();
    };
    
    searchView.initSearch = function() {
        $('#search-form').on('submit', searchView.submit);
    };

    searchView.submit = function(event) {
        event.preventDefault();
        page('/results');
        // replace spaces with plus signs for URL
        const titleStringRaw = $('#search-title').val();
        app.searchView.titleStringRaw = titleStringRaw;
        const titleString = titleStringRaw.split(' ').join('+');
        app.Result.fetchAll(titleString, app.resultsView.index);
    };

    searchView.initSearch();
    module.searchView = searchView;
})(app);