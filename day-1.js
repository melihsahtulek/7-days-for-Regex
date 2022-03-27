console.log(new RegExp(/^a...s$/).test("alias"));
// --> TRUE

console.log(new RegExp(/[abc]/).test("gray or grey"));
// --> TRUE

console.log(new RegExp(/[a-c]/).test("abc"));
//  --> "abc" TRUE ,  "def" FALSE

console.log(new RegExp(/../).test("ab"));
//  --> "a" FALSE ,  "ab" TRUE

console.log(new RegExp(/^a/).test("ba"));
//  --> "a" TRUE
//  --> "ab" TRUE
//  --> "ba" FALSE

console.log(new RegExp(/^ab/).test("ab"));
//  --> "ab" TRUE
//  --> "ac" FALSE

console.log(new RegExp(/a$/).test("bcdeg"));
//  --> "bcdea" TRUE
//  --> "bcdeg" FALSE

console.log(new RegExp(/ab?c/).test("adc"));
//  --> "ac" TRUE
//  --> "abc" TRUE
//  --> "adc" FALSE

console.log(new RegExp(/o{2,3}/).test("helloo"));
//  --> "helloo" TRUE
//  --> "hello" FALSE

console.log(new RegExp(/[0-9]{2,3}/).test("123"));

console.log(new RegExp(/a|b/).test("a"));
//  --> "a" TRUE
//  --> "b" TRUE
//  --> "c" FALSE

console.log(new RegExp(/(a|b|c)xyz/).test("axyz"));
//  --> "axyz" TRUE
//  --> "xxcxyz" TRUE
//  --> "xxyxyz" FALSE
//  --> "dxyz" FALSE

console.log(new RegExp(/\d/).test("1"));
// --> "1" TRUE
// --> "123" TRUE
// --> "a1" TRUE
// --> "a" FALSE

console.log(new RegExp(/\D/).test("abc"));
// --> "a1b2c3" TRUE
// --> "abc" TRUE
// --> "123" FALSE

console.log(new RegExp(/\s/).test("ab c"));
// --> "ab c" TRUE
// --> "ab  c" TRUE
// --> "abc" FALSE

console.log(new RegExp(/\w/).test("%abc")); // [a-zA-Z0-9_]
// --> "%abc" TRUE
// --> "%" FALSE
