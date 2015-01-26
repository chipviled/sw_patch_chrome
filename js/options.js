//

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

    backGround = chrome.extension.getBackgroundPage();
    backGround.getConfig();

    notification('Данные сохранены');
}

// Get version from manifest.
var version = (function () {
    var xm = new XMLHttpRequest();
    xm.open('GET', chrome.extension.getURL('../manifest.json'), false);
    xm.send(null);
    return JSON.parse(xm.responseText).version;
}() );

//
document.addEventListener('DOMContentLoaded', function () {
    loadOptions();
    jQuery("#version").html('v' + version);
    jQuery(".save").click(saveOptions);
    jQuery(".close").click(closeOptions);
});

