/*

  DAY 3:

*/

console.log("my favorite numbers : 10754".match(/\d{5}/));
console.log("my favorite numbers : 12 or 890 or 10754".match(/\d{1,2}/));
console.log("my favorite numbers : 12 or 890 or 10754".match(/\d+/g)); // {1,}
console.log("gray or grey".match(/gr[ae]y/gi));
console.log("Hi.... How are you today?.......".match(/\.{3,}/g));
console.log("color:#121212; background-color:#AA10ef bad-colors:f#fddef #ad2 #12345678".match(/#+\w{6}\b/g));
