'use strict';
var app = app || {};

(function (module) {
    function Result(rawDataObj) {
        Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
    }
    Result.all = [];

    Result.fetchAll = callback => {
        $.get('/results')
            .then(
            data => {
                Result.loadAll(data);
                callback();
            }

            )
    };
    Result.loadAll = data => {
        // Similar.Results from TasteDive API
        const dataResults = JSON.parse(data).Similar.Results;
        Result.all = dataResults.map(obj => new Result(obj));
    }
    module.Result = Result;
})(app);
