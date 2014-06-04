$(document).ready(function () {
    var _getVideoDimension = function($element) {
        var dimension = $element.attr('title');
        try {
            var width = dimension.split('x')[0];
            var height = dimension.split('x')[1];
        } catch (e) {
            var width = '400';
            var height = '300';
        }
        return {'width': width,
                'height': height};
    };

    $('span.InlineVideoOrig a, span.InlineVideoFull a').each(function() {
        var dimension = _getVideoDimension($(this));

        // depends on tiny, where the class is set
        var is_full = $(this).parent().hasClass('InlineVideoFull') || $(this).parent().hasClass('InlineVideoFull');

        var url = $(this).attr('href');
        var video = '<video controls>';
        video += '<source src="'+url+'" />';
        video += '</video>';

        $video = $(video);
        $video.attr('width', dimension['width']);
        $video.attr('height', dimension['height']);
        $(this).replaceWith($video);

        if (is_full) {
            $video.wrap('<div class="videowrapper" style="width: 100%; margin 0 auto;"></div>');
            var full_width = $video.parent().outerWidth();
            var proportional_height = dimension['height'] / dimension['width'] * full_width;

            $video.attr('width', full_width);
            $video.attr('height', proportional_height);
        }
    });

    $('video,audio').mediaelementplayer();

});
