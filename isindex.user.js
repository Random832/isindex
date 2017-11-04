// ==UserScript==
// @name isindex
// @namespace http://random832.github.io
// @description Polyfill for isindex tag
// @include *
// ==/UserScript==

lst = document.getElementsByTagName('isindex')
if(lst.length) {
    var e = lst[0];
    var form = document.createElement('form');
    var input = document.createElement('input');
    input.name = 'input';
    var button = document.createElement('input');
    button.value = e.getAttribute('prompt') || 'Search';
    button.type = 'submit';
    form.onsubmit = function(e) {
        var form = e.target
        var input = form.input;
        var value = input.value;
        value = encodeURIComponent(value).replace('%20', '+');
        window.location.href = '?' + value;
        return false;
    }
    form.appendChild(input);
    form.appendChild(button);
    e.parentNode.insertBefore(form, e);
    // need to remove or it'll add the form again on "back"
    e.parentNode.removeChild(e);
}
