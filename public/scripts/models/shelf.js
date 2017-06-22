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
    module.Shelf = Shelf;
}(app));