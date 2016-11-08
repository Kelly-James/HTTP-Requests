const getHTML = require('../http_functions').getHTML;
const requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/lowercase.html'
};

function printLowerCase(html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);
