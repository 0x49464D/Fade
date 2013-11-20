/**
 * Fade
 * https://github.com/0x49464D/Fade
 *
 * Copyright 2013 Israel Flores Morató
 * Released under the MIT license
 *
 */

$(function(){
    $.fn.Fade = function(options){
        var settings = $.extend({
            min: 0.5,
            max: 1
        }, options);

        return this.each(function(){
            $(this).css({
                'opacity': settings.min
            });

            $(this).hover(function(){
                $(this).animate({
                    opacity: settings.max
                }, 500);
            }, function(){
                $(this).animate({
                    opacity: settings.min
                }, 500);
            });
        });
    };
}(jQuery));