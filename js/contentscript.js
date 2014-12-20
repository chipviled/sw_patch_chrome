var s = document.createElement('script');
s.src = chrome.extension.getURL('js/jquery-1.11.1.min.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);

    // Get config from background.js
    chrome.runtime.sendMessage('getOptions', function(response){
                    options = response ? response : {};

        var s2 = document.createElement('script');
        s2.text = 'var sw_config = ' + JSON.stringify(options) + ';';
        (document.head||document.documentElement).appendChild(s2);
        s2.onload = function() {
            s2.parentNode.removeChild(s2);
        };
    });

    var s3 = document.createElement('script');
    s3.src = chrome.extension.getURL('js/common.js');
    (document.head||document.documentElement).appendChild(s3);
    s3.onload = function() {
        s3.parentNode.removeChild(s3);
    };

};

