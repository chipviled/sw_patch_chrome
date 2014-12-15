//
//
//

window.config = {       // default config;
    play_beep: true,
    user_beep: false,
    path_to_user_beep: ''
};

getConfig();
setConfig();

function getConfig() {
    var tmp;
    for (var key in window.config) {
        tmp = window.config[key]
        window.config[key] = typeof localStorage[key] == "undefined" ? window.config[key] : localStorage[key];
        if (window.config[key] == 'true') window.config[key] = true;
        if (window.config[key] == 'false') window.config[key] = false;
    }
}

function setConfig() {
    for (var key in window.config) {
        localStorage[key] = window.config[key];
    }
}

function beep(path) {
    path = path || 0;
    if (path == 0) {
        var snd = new Audio('../wav/beep.wav');
    } else {
        var snd = new Audio(path);
    }
    snd.play();
}

//
window.lastid = 0;

window.min_dlayamount = 2000;
window.max_dlayamount = 30000;
window.delta_dlayamount = 1.3;

window.dlayamount = window.min_dlayamount;
window.not_first = false;
window.number_beeps = 0;

function lolresponse(response, status) {

    var m = response.match(/wohoo(\d+) (\d+)/);

    if (m !== null) {

        var new_start = m[1];
        var new_end = m[2];

        if (window.lastid < new_end) {
            window.lastid = new_end;

            window.dlayamount = window.min_dlayamount;

            if (window.not_first) window.number_beeps += 1;

            if((window.config.play_beep) && (window.not_first)) {
                beep();
            }

            //
            if (!window.not_first) window.not_first = true;
        }
    }

    var nb = '';
    if (window.number_beeps > 0) nb = window.number_beeps.toString();
    chrome.browserAction.setBadgeText ( { text: nb } );

    if (window.dlayamount < window.max_dlayamount) {
        window.dlayamount = window.dlayamount * window.delta_dlayamount;
    } else {
        window.dlayamount = window.max_dlayamount;
    }

    setTimeout(getSw, window.dlayamount + 500);
}

function updateIconClear() {
    window.number_beeps = 0;
    chrome.browserAction.setBadgeText({
        text: ''
    });
}

function getSw(){
    window.lol = new jQuery.ajax({
        url:'http://sonic-world.ru/modules/chatik/chatik.php?chan=main',
        type: "POST",
        data:{ ajax:1, lastid: window.lastid},
        success: function(data){ lolresponse(data); },
        error: function(){
            window.dlayamount = window.max_dlayamount;
            setTimeout(get_sw, window.dlayamount + 500);
        }
    });
}

getSw();
