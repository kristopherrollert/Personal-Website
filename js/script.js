$(document).ready(function () {
    $(".inner-image").hover(function () {
        $(".spinner, .filler, .mask, .inner-image").css("animation-play-state", "paused");
    }, function () {
        $(".spinner, .filler, .mask, .inner-image").css("animation-play-state", "running");
    });
});
