document.addEventListener("DOMContentLoaded", function () {
    backGround = chrome.extension.getBackgroundPage();
    backGround.updateIconClear();

    jQuery("#popup_options").click(function() { openTab(chrome.extension.getURL('html/options.html')); });
    jQuery("#popup_close").click(function() { window.close(); });
});

function openTab(url) {
    chrome.tabs.create({url: url});
    window.close();
}
