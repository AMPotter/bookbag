'use strict';

var app = app || {};

(function (module) {
    function Shelf(rawDataObj) {
        Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);

    }

    Shelf.fetchAll = callback => {
        $.get('/data/shelf')
            .then(
            data => {
                console.log(data);
                data.Object.forEach(a => $('#shelf').append(render(a)));
            callback();
            }
          );
};
    module.Shelf = Shelf;
}(app));