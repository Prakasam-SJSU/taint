"use strict";
require("./lib/taint");

var x = taint('x');
var y = taint('y');
console.log(x + y);

var username = taint("Robert`); DROP TABLE Students;");

try {
    queryUser("select * from Students where username = '" + username + "'");
} catch (e) {
    console.log("Cannot write a tainted value to the DB");
}

queryUser("select * from Students where username = '" +  sanitize(username));


// function to do some DB query related to users. The `user` string *must* be not be tainted.
function queryUser(user) {
    if (isTainted(user)) {
        throw new Error("Tainted value!");
    }
    // do the query
    // ...
    console.log("Success");
}

// Some sanitization routine that can strip the taint of the value.
function sanitize(val) {
    // do sanitization
    // ...
    return untaint(val);
}
