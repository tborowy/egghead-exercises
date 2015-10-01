(function ()
{
    'use strict';

    function Directive(e)
    {
        if (null == e) {
            throw new Error('element must not be null');
        }
        this.element = e;
    }

    Directive.prototype.isFound = function ()
    {
        return this.element.isPresent();
    };
    Directive.prototype.getImage= function ()
    {
        return this.element.getAttribute('src');
    };

    var helper = {
        directive: function (e)
        {
            return new Directive(e);
        }
    };

    var elements = {
        transclude: element.bind(null, by.css('animal div[ng-transclude]')),
        cat: element.bind(null, by.css('animal[name="cat"] img')),
        dog: element.bind(null, by.css('animal[name="dog"] img')),
        pig: element.bind(null, by.css('animal[name="pig"] img'))
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.isTranscludeElementFound = function ()
    {
        return helper.directive(elements.transclude()).isFound();
    };
    PageFragment.prototype.getDogImage = function ()
    {
        return helper.directive(elements.dog()).getImage();
    };
    PageFragment.prototype.getCatImage = function ()
    {
        return helper.directive(elements.cat()).getImage();
    };
    PageFragment.prototype.getPigImage = function ()
    {
        return helper.directive(elements.pig()).getImage();
    };


    module.exports = PageFragment;
})();
