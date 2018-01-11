$(document).ready(function() {
    $(".tab-menu > div.list-group > a").click(function(e) {
        e.preventDefault();
        $(this).siblings('a.active').removeClass("active");
        $(this).addClass("active");
        var index = $(this).index();
        $(".tab > .tab-content").removeClass("active");
        $(".tab > .tab-content").eq(index).addClass("active");
    });
});