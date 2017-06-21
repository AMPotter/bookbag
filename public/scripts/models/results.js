'use strict';
var app = app || {};

(function (module) {
    function Result(rawDataObj) {
        Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
    }
    Result.all = [];

    Result.fetchAll = (titleString, callback) => {
        $.get(`/api/results/${titleString}`)
            .then(
                data => {
                    Result.loadAll(data);
                    callback();
                }

            );
    };
    Result.loadAll = data => {
        // Similar.Results from TasteDive API
        const dataResults = JSON.parse(data).Similar.Results;
        Result.all = dataResults.filter(ele => ele.Type === 'book').map(obj => new Result(obj));
    };
    Result.loadShelf = () => {
        $.get('/shelf')
    }

    Result.insertRecord = function (obj, callback) {
        console.log(obj);
        $.post('/shelf', obj)
            .then(console.log)
            .then(callback);
    };
    module.Result = Result;
})(app);
