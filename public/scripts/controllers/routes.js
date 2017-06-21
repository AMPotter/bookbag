'use strict';
var app = app || {};

page('/', app.searchController.index);
page('/results', app.resultsController.index);
//page('/shelf', app.shelfController.loadAll, app.shelfController.index);

page();
