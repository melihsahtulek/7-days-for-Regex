/*

  DAY 1: INTRODUCTION TO REGEX

*/

const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, natus. 123 _000?_ 1 2 3";

console.log(str.match(/sit/));
console.log(str.replace(/e/gi, "E"));
console.log(/sit/gi.test(str));
console.log("+90 (000) 000 0000".match(/\d/));
console.log("+90 (123) 456 7890".match(/\d/g));
console.log(str.match(/./g));
console.log(str.match(/\d/gi));
console.log(str.match(/\D/gi));
console.log(str.match(/\s/gi));
console.log(str.match(/\S/gi));
console.log(str.match(/\w/gi));
console.log(str.match(/\W/gi));
