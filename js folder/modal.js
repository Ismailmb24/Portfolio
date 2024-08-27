var modal = (function() {
    var $window = $(window);
    var $modalBgd = $('<div id="modal-wraper" />')
    var $modal = $('<div class="modal" />');
    var $content = $('<div class="modal-content" />');
    var $close = $('<p id="m-c-container"> <i id="modal-close" class="fa fa-close"></i> </p>');

  
    $modal.append($close, $content);

    $close.on('click', function(e) {
        e.preventDefault();
        modal.close();
    })

    return {
        center: function() {
            var top = Math.max($window.height() - $modal.outerHeight(), 0) / 2;
            var left = Math.max($window.width() - $modal.outerWidth(), 0) / 2;

            $modal.css({
                top: top ,// + $window.scrollTop(),
                left: left + $window.scrollLeft()
            });
        },

        open: function(settings) {
            $content.empty().append(settings.content);

            $modalBgd.appendTo('body');
            $modal.css({
                width: settings.width || 'auto',
                height: settings.height || 'auto'
            }).appendTo('body');

            modal.center();

            $modalBgd.on('click', function() {
                modal.close();
            })
            $window.on('resize', modal.center);
        },

        close: function() {
            $content.empty();
            $modal.detach();
            $modalBgd.detach();
            $window.off('resize', modal.center);
        }
    };
} ());