"use strict";

const name = "Albus Percival Wulfric Brian Dumbledore";
const firstName = name.substring(0,5);
const lastName = name.substring(29);
const secondMiddleName = name.substring(15,22);
const secondMiddleNameWithSpace = name.substring(14,22);

console.log("name:", name);
console.log("first name:", firstName);
console.log("last name:", lastName);
console.log("second middle name:", secondMiddleName);
console.log("second middle name with space:", secondMiddleNameWithSpace);