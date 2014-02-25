$(document).ready(function () {
    $('span.InlineVideoOrig a, span.InlineVideoFull a').each(function() {
        var is_full = $(this).parent().hasClass('InlineVideoFull');
        var url = $(this).attr('href');

        var video = '<video controls>';
        video += '<source src="'+url+'" />';
        video += '</video>';

        $video = $(video);
        $(this).replaceWith($video);

        if (is_full) {
            $wrapper = $video.wrap('<div class="videowrapper" style="width: 100%; margin 0 auto;"></div>');
            $video.css('width', '100%');
            $video.css('height', '100%');
        }
    });

    $('video,audio').mediaelementplayer({
        autoSize: true
    });
});
