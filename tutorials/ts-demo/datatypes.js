"use strict";
// let carMakers: string[][] =[];
let carMakers;
carMakers = [["hello"], ["world"]];
console.log(carMakers);



// ----------------------------------------

var Class;
(function (Class) {
    Class[Class["red"] = 0] = "red";
    Class[Class["green"] = 1] = "green";
    Class[Class["blue"] = 2] = "blue";
})(Class || (Class = {}));
const c = Class.red;
console.log(c);
