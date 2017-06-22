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
            data => {
                Shelf.loadAll(data);
                callback();
            }
        );
    };
    Shelf.loadAll = data => {
        Shelf.all = data;
    };
    module.Shelf = Shelf;
}(app));