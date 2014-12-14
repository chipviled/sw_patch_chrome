var s = document.createElement('script');
s.src = chrome.extension.getURL('js/jquery-1.11.1.min.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);

    var s3 = document.createElement('script');
    s3.src = chrome.extension.getURL('js/common.js');
    (document.head||document.documentElement).appendChild(s3);
    s3.onload = function() {
        s3.parentNode.removeChild(s3);
    };

};