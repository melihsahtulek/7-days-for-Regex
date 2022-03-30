/*

  DAY4:

*/

console.log("this is a text. There is a number --> 0123".match(/a/gi));
console.log("red color, black colooor".match(/o+/gi));
console.log("color or colour".match(/colou?r/gi));
console.log("this is a text. There is a number --> 0123".match(/./gi));
console.log("this is a text. There is a number --> 0123".match(/n./gi));
console.log("this is a text. There is a number --> 0123".match(/\w/gi));
console.log("this is a text. There is a number --> 0123".match(/\W/gi));
console.log("this is a text. There is a number --> 0123".match(/\s/gi));
console.log("this is a text. There is a number --> 0123".match(/\S/gi));
console.log("this is a text. There is a number --> 0123".match(/\d/gi));
console.log("this is a text. There is a number --> 0123".match(/\d+/gi));
console.log("this is a text. There is a number --> 0123".match(/\D/gi));
console.log("this is a text. There is a number --> 0123".match(/\w{2}/gi));
console.log("this is a text. There is a number --> 0123".match(/\w{2,5}/gi));
console.log("this is a text. There is a number --> 0123".match(/\w{5,}/gi));
console.log("this is a text. There is a number --> 0123".match(/[a-zA-Z_>-]+/gi));
console.log("gray or grey".match(/gr(a|e)y/gi));
console.log("color or colour".match(/colo(u)?r/gi));
