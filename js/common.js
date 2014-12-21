//

// Load in begin.
jQuery(document).ready(function() {

    if (window.sw_config.change_layout) {
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
    }

    if (window.sw_config.change_shadowbox) {
        var loading_gif = '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';
        jQuery("a[rel*='shadowbox'] img").addClass("shadowbox_add");
        jQuery('body').append('<style>#sb-body,#sb-loading{background-color: #FFFFFF !important;}</style>');
        jQuery('body').append('<style>\
        #sb-loading-inner span{background:url(data:image/gif;base64,'+loading_gif+') no-repeat;}\
        #sb-loading-inner{position:absolute;font-size:14px;line-height:34px;height:34px;top:50%;margin-top:-17px;width:100%;text-align:center;}\
        </style>');
    }

    if (window.sw_config.disable_commercial) {
        jQuery(".slza").hide();
        jQuery("#swz1, #swz2").hide();
        jQuery("#sw_f div").first().hide();
    }

});

