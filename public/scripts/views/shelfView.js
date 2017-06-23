'use strict';

var app = app || {};

(function (module) {
    const shelfView = {};

    const render = function (result) {
        let template = Handlebars.compile($('#shelf-template').text());
        return template(result);
    };

    shelfView.initPage = function () {
        $('#shelf').show().siblings().hide();
        $('#shelf article').remove();
        $('#shelf-header').show();
        if (app.Shelf.all.length === 0) {
            $('#no-shelf').show();
            $('#shelf-header').hide();
        } else {
            app.Shelf.all.forEach(a => $('#shelf').append(render(a)));
            app.shelfView.killFave();
            $('#no-shelf').hide();
        }
    };
    shelfView.killFave = function () {
        $('.kill-fave').on('click', function (event) {
            var bookId = $(this).attr('data-book-id');
            //var arrayPos = app.Shelf.all[index];
            app.Shelf.deleteRecord(bookId);
            $(this).parent().parent().slideUp(300, function () {
                // console.log(app.Shelf.all.length);
                // if (app.Shelf.all.length === 0) {
                //     $('#no-shelf').show();
                //     $('#shelf-header').hide();
                // }
            });
        });
    };

    module.shelfView = shelfView;
})(app);