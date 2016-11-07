const https = require('https');
const requestOptions = {
  host: 'syantris.github.io',
  path: '/http-examples/step3.html'
};

function getAndPrintHTML(options) {

  https.get(options, (response) => {

    var data = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      data += chunk;
      console.log('Chunk Received. Length: ', + chunk.length);
      console.log(chunk);
    })

    response.on('end', () => {
      console.log('Response stream complete.');

    })

  })
}


getAndPrintHTML(requestOptions);
