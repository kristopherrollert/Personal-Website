$(document).ready(function () {
    $(".inner-image").hover(function () {
        $(".spinner, .filler, .mask, .inner-image").css("animation-play-state", "paused");
    }, function () {
        $(".spinner, .filler, .mask, .inner-image").css("animation-play-state", "running");
    });

    $(".project-sections > li").click(function (e) {
        if (e.currentTarget.classList[0] != 'project-selected') {
            $('.project-selected').removeClass('project-selected');
            switch (e.currentTarget.id) {
                case 'all-tab':
                    $('#all-tab').addClass('project-selected');
                    $('.programming-section').show();
                    $('.web-section').show();
                    break;
                case 'web-tab':
                    $('#web-tab').addClass('project-selected');
                    $('.programming-section').hide();
                    $('.web-section').show()
                    break;
                case 'prog-tab':
                    $('#prog-tab').addClass('project-selected');
                    $('.programming-section').show();
                    $('.web-section').hide()
                    break;
            }
        }
    });

});
