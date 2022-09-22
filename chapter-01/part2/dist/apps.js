"use strict";
var a = 10;
var b = 10;
console.log(a);
var box1 = document.getElementById("box1");
if (box1 !== null) {
    box1.addEventListener("click", function () {
        alert('hello');
    });
}
