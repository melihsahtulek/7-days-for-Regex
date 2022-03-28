/*

  DAY 1: INTRODUCTION TO REGEX

*/

const str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, natus.";

console.log(str.match(/sit/));
console.log(str.replace(/e/gi, "E"));
console.log(/sit/gi.test(str));
