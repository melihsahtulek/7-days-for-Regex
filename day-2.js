/*

JavaScript Regular Expression Methods

*/

const str = "hi , i'm Melihşah. I'm a developer.";
const pattern = new RegExp(/dev/);

console.clear();
console.log("----------------------------------------");
console.log(pattern.exec(str));
console.log("----------------------------------------");
console.log(pattern.test(str));
console.log("----------------------------------------");
console.log(str.match(pattern));
console.log("----------------------------------------");
console.log(str.search(pattern));
console.log("----------------------------------------");
console.log(str.replace(pattern, "newKeyword"));
console.log("----------------------------------------");
console.log(str.split(pattern));
console.log("----------------------------------------");
