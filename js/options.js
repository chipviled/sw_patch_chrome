//
var version = "1.0.17.4";
var commercial_warning = "Включая эту опцию вы поступаете вообще-то не очень хорошо.";


function notification(msg) {
    jQuery('#message').html(msg).stop().fadeIn("slow").delay(3000).fadeOut("slow");
}

function closeOptions() {
    window.open('', '_self', '');window.close();
}


function loadCheckbox(id) {
    document.getElementById(id).checked = typeof localStorage[id] == "undefined" ? false : localStorage[id] == "true";
}

function saveCheckbox(id) {
    localStorage[id] = document.getElementById(id).checked;
}

function loadText(id) {
    document.getElementById(id).value = localStorage[id];
}

function saveText(id) {
    localStorage[id] = document.getElementById(id).value;
}



function loadOptions() {
    loadCheckbox("look_for_chyatik");
    loadCheckbox("play_beep");
    loadCheckbox("disable_commercial");
    loadCheckbox("change_layout");
    loadCheckbox("change_shadowbox");
    loadCheckbox("gallery_avatars");
    loadCheckbox("gallery_ignor_smiles");
    loadCheckbox("gallery_fix_cat_1");
    loadCheckbox("gallery_filmstrip_hide_line");
    loadCheckbox("correct_url");
    loadCheckbox("alternative_menu");
    loadCheckbox("forum_right_to_left");
    loadCheckbox("enable_photoswipe");
    loadCheckbox("forum_reputation_ignore");
}

function saveOptions() {
    saveCheckbox("look_for_chyatik");
    saveCheckbox("play_beep");
    saveCheckbox("disable_commercial");
    saveCheckbox("change_layout");
    saveCheckbox("change_shadowbox");
    saveCheckbox("gallery_avatars");
    saveCheckbox("gallery_ignor_smiles");
    saveCheckbox("gallery_fix_cat_1");
    saveCheckbox("gallery_filmstrip_hide_line");
    saveCheckbox("correct_url");
    saveCheckbox("alternative_menu");
    saveCheckbox("forum_right_to_left");
    saveCheckbox("enable_photoswipe");
    saveCheckbox("forum_reputation_ignore");

    backGround = chrome.extension.getBackgroundPage();
    backGround.getConfig();

    notification('Данные сохранены');
}

// Show commercial warning
function commercialWarning(disable_commercial) {
    if (disable_commercial == true) jQuery("#disable_commercial_warning").text(commercial_warning).show();

    jQuery("#disable_commercial").change(function() {
        if (jQuery(this).prop('checked')) {
            jQuery("#disable_commercial_warning").text(commercial_warning).stop().fadeIn();
        } else {
            jQuery("#disable_commercial_warning").stop().fadeOut();
        }
    });
}

//
document.addEventListener('DOMContentLoaded', function () {
    loadOptions();
    jQuery("#version").html('v ' + version);
    jQuery(".save").click(saveOptions);
    jQuery(".close").click(closeOptions);
    var conf = (localStorage["disable_commercial"] == "true");
    commercialWarning(conf);
});

