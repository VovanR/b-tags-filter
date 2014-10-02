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
            return new TagsFilter();
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
        });

        describe('#getName', function () {
            it('should return name', function () {
                var m = module();
                assert.equal(m.getName(), 'TagsFilter');
            });
        });
    });

    if (window.mochaPhantomJS) {
        mochaPhantomJS.run();
    } else {
        mocha.run();
    }

});
