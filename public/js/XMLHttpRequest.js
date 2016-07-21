if (location.href.substr(location.href.lastIndexOf('/')) == '/search')
    window.history.replaceState('users', document.title, '/users')

var xmlHttp;

function createXMLHttpRequest() {
    if(window.ActiveXObject) {
        xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
    } else if(window.XMLHttpRequest) {
        xmlHttp = new XMLHttpRequest();
    }
}
function reqHTTP(href, method, param) {
    createXMLHttpRequest();
    var url = location.href;
    url = url.substr(0, url.lastIndexOf('/'));
    url += href;
    xmlHttp.onreadystatechange = function() {
        if(xmlHttp.readyState == 4) {
            if(xmlHttp.status == 200) {
                document.open();
                document.write(xmlHttp.responseText);
            }
        }
    };
    xmlHttp.open(method, url, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
    xmlHttp.setRequestHeader("Cache-Control", "no-cache");
    xmlHttp.setRequestHeader("Pragma", "no-cache");
    xmlHttp.send((param ? param : null));
}