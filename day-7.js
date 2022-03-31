/*

  DAY7: EXERCICES

*/

const str = "Lorem ipsum dolor sit amet consectetur, color colour gray grey 11123456789+000?_abc";

console.log(str.match(/^\w+/gi));
console.log(str.match(/\w+$/gi));
console.log(str.match(/(\d)+/gi));
console.log(str.match(/i[pt]/gi));
console.log(str.match(/i[^t]/gi));
console.log(str.match(/[0-3]+/gi));
console.log(str.match(/./gi));
console.log(str.match(/\w/gi));
console.log(str.match(/\W/gi));
console.log(str.match(/\d/gi));
console.log(str.match(/\D/gi));
console.log(str.match(/\s/gi));
console.log(str.match(/\S/gi));
console.log(str.match(/1+/gi));
console.log(str.match(/lou*r/gi));
console.log(str.match(/1{1,3}/gi));
console.log(str.match(/gr(a|e)y/gi));
console.log(str.match(/colou?r/gi));
console.log("<a href='https://www.yourdomain.com'> link </a>".match(/(?<=www\.)(\w{1,})(?=\.com)/gi));
