console.log('Begin load.');

var s = document.createElement('script');
s.src = chrome.extension.getURL('js/jquery-1.11.1.min.js');
(document.head||document.documentElement).appendChild(s);
s.onload = function() {
    s.parentNode.removeChild(s);

    var s2 = document.createElement('script');
    s2.src = chrome.extension.getURL('js/common.js');
    (document.head||document.documentElement).appendChild(s2);
    s2.onload = function() {
        s2.parentNode.removeChild(s2);
    };

    console.log('All loaded.');
};


