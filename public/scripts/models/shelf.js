'use strict';

var app = app || {};

(function (module) {
    function Shelf(rawDataObj) {
        Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);

    }
    Shelf.all = [];
    Shelf.fetchAll = callback => {
        $.get('/data/shelf')
            .then(
            res => {
                Shelf.all = res.data;
                callback();
            }
            );
    };
    Shelf.deleteRecord = function (bookId, callback) {
        $.ajax({
            url: `/shelf/${bookId}`,
            method: 'DELETE'
        });
    }
    module.Shelf = Shelf;
})(app);