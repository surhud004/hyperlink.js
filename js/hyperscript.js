$(document).ready(function($) {
    $("#url-card").hide();
    $("a").on("mouseenter", function(e) {
        var href = $(this).attr('href');
        e.preventDefault();
        $.ajax({
            url: 'js/hyperscript.php',
            type: 'POST',
            data: {'url':href}
        })
        .done(function(respose) {
            console.log(respose);
            var array = respose.split(" ---- ");
            $("#url-card").show();
            $("#url-card").css({left: e.pageX, top: e.pageY + 10});
            $("#url-image").attr("src", array[3]);
            $("#url-title").text(array[2]);
            $("#url-description").text(array[4]);
        });
    }).on("mouseleave", function(e) {
        $("#url-image").attr("src", "");
        $("#url-title").text("");
        $("#url-description").text("");
        $("#url-card").hide();
    });
});