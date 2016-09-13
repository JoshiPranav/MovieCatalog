'use strict'

app.filter('subString', function() {
    return function(str, start, end) {
        if (str != undefined) {
            return str.substr(start, end);
        }
    }
})