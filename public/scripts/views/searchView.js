'use strict';

var app = app || {};

(function(module) {
    const searchView = {};

    searchView.initPage = function() {
        $('#search').show().siblings().hide();
    }
    
    searchView.initSearch = function() {
        $('#search-form').on('submit', searchView.submit);
    };

    searchView.submit = function(event) {
        event.preventDefault();
        // replace spaces with plus signs for URL
        const titleStringRaw = $('#search-title').val();
        app.searchView.titleStringRaw = titleStringRaw;
        const titleString = titleStringRaw.split(' ').join('+');
        console.log(titleString);
        // let searchQuery = new app.Result({
        //     Name: $('#search-title').val()
        // });
        app.Result.fetchAll(titleString, app.resultsView.index);
    };

    searchView.initSearch();
    module.searchView = searchView;
})(app);