(function($) {
    $.fn.togglePassword = function(options) {
        var settings = $.extend({
            show: 'fa-eye',
            hide: 'fa-eye-slash',
            base: 'fa fa-fw toggle-password-button'
        }, options);

        return this.each(function() {
            var $input = $(this);
            var $toggle = $('<span>')
                .addClass(settings.base)
                .addClass(settings.show)
                .insertAfter($input)
                .click(function() {
                    $toggle.toggleClass(settings.show + ' ' + settings.hide);
                    if ($input.attr('type') === 'password') {
                        $input.attr('type', 'text');
                    }
                    else {
                        $input.attr('type', 'password');
                    }
                });
        });
    };
})(jQuery);
