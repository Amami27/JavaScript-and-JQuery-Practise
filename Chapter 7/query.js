$(document).ready(function() {
    $("h2").next().css({ "color": "red", "border": "2px solid red" });
    $("h4").nextUntil("h1");
    $("h4").nextAll().css({
        "color": "red",
        "border": "2px solid red"
    })
})
$(document).ready(function() {

});