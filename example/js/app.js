/**
 * @author VovanR <mail@vovanr.com>
 */

define([
    'jquery',
    '../../index',
], function (
    $,
    TagsFilter
) {

    var App;

    App = function () {
        this._initialize();
    };

    App.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _initialize: function () {
            console.info('App init');

            this.TagsFilter = new TagsFilter();
        },
    };

    return App;

});
