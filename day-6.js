/*

  DAY6: EXAMPLES

*/

const phoneRegex = /(\+\d{1,3})? ?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/g;
const dateRegex = /(?<day>\d{2,4})[\/\-\.]?(?<month>\d{2})[\/\-\.]?(?<year>\d{2,4})/g;
const mailRegex = /^\w+@[a-zA-Z]+\.\w+/gi;
const urlRegex = /(https?:\/\/)(www\.)?([a-zA-Z-]+)(\.[a-zA-Z]{2,})\/?$/gi;

const validInput = (inp, _reg) => {
  console.log(inp.match(new RegExp(_reg)), new RegExp(_reg).test(inp));
};

validInput("123-000-0000", phoneRegex);
validInput("1230000000", phoneRegex);
validInput("123 000 0000", phoneRegex);
validInput("(123) 000-0000", phoneRegex);
validInput("(123) 000 0000", phoneRegex);
validInput("+90 123 000 0000", phoneRegex);
validInput("10/04/2022", dateRegex);
validInput("10-04-2022", dateRegex);
validInput("10.04.2022", dateRegex);
validInput("10.04.22", dateRegex);
validInput("2022.22.04", dateRegex);
validInput("example@name.com", mailRegex);
validInput("example@domain.com", mailRegex);
validInput("https://duckduckgo.com/", urlRegex);
validInput("https://www.google.co/", urlRegex);
validInput("https://stackoverflow.space", urlRegex);
validInput("http://www.fake-url.software/", urlRegex);
