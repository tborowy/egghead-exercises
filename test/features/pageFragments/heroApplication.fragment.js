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

    var helper = {
        directive: function (e)
        {
            return new Directive(e);
        }
    };

    var elements = {
        firstHero: element.bind(null, by.css('#first hero img[class=hero-position]')),
        superhero: {
            hero: element.bind(null, by.css('#superhero superhero hero')),
            mask: element.bind(null, by.css('#superhero superhero mask'))
        },
        secondHero: element.bind(null, by.css('#second hero img[class=hero-position]'))
    };

    function PageFragment()
    {
    }

    PageFragment.prototype.isFirstHeroPresent = function ()
    {
        return helper.directive(elements.firstHero()).isFound();
    };
    PageFragment.prototype.isSuperheroHeroPresent = function ()
    {
        return helper.directive(elements.superhero.hero()).isFound();
    };
    PageFragment.prototype.isSuperheroMaskPresent = function ()
    {
        return helper.directive(elements.superhero.mask()).isFound();
    };
    PageFragment.prototype.isSecondHeroPresent = function ()
    {
        return helper.directive(elements.secondHero()).isFound();
    };

    module.exports = PageFragment;
})();
