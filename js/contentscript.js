
loadJavaScript('js/jquery-1.11.1.min.js', function() {
    // Get config from background.js
    chrome.runtime.sendMessage('getOptions', function(response){
        var s2 = document.createElement('script');
        options = response ? response : {};
        s2.text = 'var sw_config = ' + JSON.stringify(options) + ';';
        (document.head||document.documentElement).appendChild(s2);
        loadJavaScript('js/common.js');

    });
});

loadJavaScript('js/photoswipe-init.js');

function loadJavaScript(js, callback) {
    var sv = document.createElement('script');
    sv.src = chrome.extension.getURL(js);
    (document.head||document.documentElement).appendChild(sv);
    sv.onload = function() {
        sv.parentNode.removeChild(sv);
    };

    if (callback && typeof(callback) === "function") {
        callback();
    }
}
