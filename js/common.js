//

// Load in begin.
jQuery( document ).ready(function() {
    jQuery("body").addClass("body").addClass("wrap");

    var $wrap = jQuery("#wrap");
    $wrap.prepend("<div id='wrap_content'></div>");

    var $wrap_content = jQuery("#wrap_content");
    $wrap_content.append( jQuery("#sw_c1") );
    $wrap_content.append( jQuery("#sw_c3") );
    $wrap_content.append( jQuery("#sw_c2") );
    $wrap_content.append( jQuery("#sw_f") );
    $wrap.prepend( jQuery("#toplogo") );

    $wrap.addClass("wrap");

    jQuery("#sw_c1").addClass("sw_top");
    jQuery("#sw_c3").addClass("sw_top");

    jQuery("a[rel*='shadowbox'] img").addClass("shadowbox_add");


    // Hide advertisement.
    jQuery(".slza").hide();
    jQuery("#swz1, #swz2").hide();
    jQuery("#sw_f div").first().hide();
});

