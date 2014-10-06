/**
 * @author VovanR <mail@vovanr.com>
 */

define([
    'jquery',
], function (
    $
) {

    'use strict';

    var TagsFilter;
    var activeClass = '_state_active';

    /**
     * TagsFilter module
     *
     * @param {Object} o Options
     * @param {jQuery} o.block
     * @constructor
     */
    TagsFilter = function (o) {
        this._block = o.block;

        this._initialize();
    };

    TagsFilter.prototype = {
        /**
         * Initialize
         *
         * @private
         */
        _initialize: function () {
            console.info('TagsFilter init');

            this._bindControls();
        },

        /**
         * Bindings
         *
         * @private
         */
        _bindControls: function () {
            this._block.on('click', '.js-tags-filter__item', function (e) {
                $(this).toggleClass(activeClass);

                e.preventDefault();
            });
        },
    };

    return TagsFilter;

});
