(function($, win, doc) {

    var app = (function() {
        var initUI = function() {
            $('#wrapper')
                .find('#logo')
                    .velocity('transition.slideDownIn', {duration: 1000})
                    .end()
                .find('#main-content, #navigation')
                    .velocity('transition.fadeIn', {delay: 400, duration: 1000})
                    .end();
        };

        return {
            init: function() {
                initUI();
            }
        };
    })();


    $(doc).ready(function() {
        app.init();
    });

})(window.jQuery, window, document);
