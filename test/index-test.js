requirejs([
    '../vendor/chai/chai',
    'jquery',
    '../index',
], function (
    chai,
    $,
    TagsFilter
) {

    'use strict';

    mocha.setup('bdd');
    var assert = chai.assert;

    describe('TagsFilter', function () {
        var module = function () {
            return new TagsFilter({
                block: $('#fixtures').find('.js-tags-filter'),
            });
        };

        var _bFixtureTemplate = $('#fixture-template');
        var _fixtureTemplate = _bFixtureTemplate.html();
        _bFixtureTemplate.empty();

        beforeEach(function () {
            $('#fixtures').html(_fixtureTemplate);
        });

        afterEach(function () {
        });

        describe('constructor', function () {
            it('should initialize', function () {
                var m = module();
                assert.isDefined(m);
            });

            it('should throw if no options', function () {
                assert.throw(function () {
                    var m = new TagsFilter();
                });
            });

            it('should have tags block', function () {
                var m = module();
                assert.isDefined(m._block[0]);
            });

            it('should have tags blocks', function () {
                var m = module();
                assert.isDefined(m._block.find('.js-tags-filter__item')[0]);
            });
        });

        describe('ui', function () {
            describe('click on tag', function () {
                it('should activate this tag if it is not active', function (done) {
                    var m = module();
                    var f = m._block.find('.js-tags-filter__item').first();
                    f.trigger('click');
                    setTimeout(function () {
                        assert.ok(f.hasClass('_state_active'));
                        done();
                    });
                });

                it('should deactivate this tag if is active', function (done) {
                    var m = module();
                    var f = m._block.find('.js-tags-filter__item').first();
                    f.addClass('_state_active');
                    f.trigger('click');
                    setTimeout(function () {
                        assert.notOk(f.hasClass('_state_active'));
                        done();
                    });
                });
            });
        });
    });

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }

});
