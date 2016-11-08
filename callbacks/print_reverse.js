const getHTML = require('../http_functions').getHTML;
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printInReverse(html) {
  console.log(html.split('').reverse().join(''));
}

getHTML(requestOptions, printInReverse);
