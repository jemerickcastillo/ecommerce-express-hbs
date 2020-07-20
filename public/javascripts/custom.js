jQuery(document).ready(function() {

    $( ".searchBox a" ).click(function() {
        $(".searchBox ul" ).toggleClass("display-block");
        $(".searchBox i" ).toggleClass("fa-search fa-close");
    });


});