'use strict';

var app = app || {};

(function(module) {
    const shelfView = {};

    const render = function(result) {
        let template = Handlebars.compile($('#shelf-template').text());
        return template(result);
    };

    shelfView.initPage = function() {
        $('#shelf').show().siblings().hide();
        $('#shelf article').remove();
        if (app.Shelf.all.length === 0) {
            $('no-shelf').show();
        } else {
            app.Shelf.all.forEach(a => $('#shelf').append(render(a)));
            app.shelfView.killFave();
        }
    };
    shelfView.killFave = function () {
        $('.kill-fave').on('click', function (event) {
            var bookId = $(this).attr('data-book-id');
            //var arrayPos = app.Shelf.all[index];
            app.Shelf.deleteRecord(bookId);
            $(this).parent().parent().slideUp();
        });
    };

    module.shelfView = shelfView;
})(app);