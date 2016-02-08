'use strict';
require('./lib/taint');
var x$1381 = taint('x');
var y$1382 = taint('y');
var z = vvalues.binary('+', x$1381, y$1382);
console.log(z);
var username$1384 = taint('Robert`); DROP TABLE Students;');
try {
    queryUser$1386(vvalues.binary('+', vvalues.binary('+', 'select * from Students where username = \'', username$1384), '\''));
} catch (e$1390) {
    console.log('Cannot write a tainted value to the DB');
}
queryUser$1386(vvalues.binary('+', 'select * from Students where username = \'', sanitize$1387(username$1384)));
function queryUser$1386(user$1391) {
    if (isTainted(user$1391)) {
        throw new Error('Tainted value!');
    }
    // do the query
    // ...
    console.log('Success');
}
function sanitize$1387(val$1392) {
    // do sanitization
    // ...
    return untaint(val$1392);
}