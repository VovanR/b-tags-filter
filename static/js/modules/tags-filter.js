/**
 * @author VovanR <mail@vovanr.com>
 */

define([
], function (
) {

    'use strict';

    var TagsFilter;

    /**
     * TagsFilter module
     *
     * @constructor
     */
    TagsFilter = function () {
        this._name = 'TagsFilter';
    };

    TagsFilter.prototype = {
        /**
         * Returns module name
         *
         * @returns {String} name
         */
        getName: function () {
            return this._name;
        },
    };

    return TagsFilter;

});
