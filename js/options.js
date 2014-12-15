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

function loadOptions() {
    loadCheckbox("play_beep");
}

function saveOptions() {
    saveCheckbox("play_beep");

    backGround = chrome.extension.getBackgroundPage();
    backGround.getConfig();

    notification('Данные сохранены');
}


//
document.addEventListener('DOMContentLoaded', function () {
    loadOptions();
    jQuery(".save").click(saveOptions);
    jQuery(".close").click(closeOptions);
});

