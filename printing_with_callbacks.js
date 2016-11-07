const https = require('https');
const requestOptions = {
  host: 'syantris.github.io',
  path: '/http-examples/step4.html'
};

function getHTML(options, callback) {

  https.get(options, (response) => {

    var data = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data += chunk;
      console.log('Chunk Received. Length: ', + chunk.length);
    })

    response.on('end', () => {
      callback(data);
      console.log('Response stream complete.');
    })

  })
}

function printHTML(html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
