/*

  DAY5:

*/

const str =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nIn rutrum velit ac sem hendrerit, eget fermentum dui feugiat.\nUt egestas laoreet nunc at scelerisque.";

console.log(str.match(/^l/gim));
console.log(str.match(/t\.$/gim));

console.log("example@domain.com".match(/(?<=@)(.*)(?=\.)/gi));
