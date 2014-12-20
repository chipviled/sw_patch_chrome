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
    loadCheckbox("user_beep");
    loadText("path_to_user_beep");
}

function saveOptions() {
    saveCheckbox("look_for_chyatik");
    saveCheckbox("play_beep");
    saveCheckbox("user_beep");
    saveText("path_to_user_beep");

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

