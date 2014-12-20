document.addEventListener("DOMContentLoaded", function () {
    backGround = chrome.extension.getBackgroundPage();
    backGround.updateIconClear();

    jQuery("#popup_options").click(function() { openTab(chrome.extension.getURL('html/options.html')); });
    jQuery("#popup_close").click(function() { window.close(); });

    if (localStorage['look_for_chyatik'] == 'true') {
        jQuery("#popup_chatik_link").text('чятик').click(function() { openTab('http://sonic-world.ru/modules/chatik/chatik.php') });
    }
});

function openTab(url) {
    chrome.tabs.create({url: url});
    window.close();
}
