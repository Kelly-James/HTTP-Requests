const https = require('https');
const requestOptions = {
  host: 'syantris.github.io',
  path: '/http-examples/step1.html'
};

function getAndPrintHTMLChunks () {

  https.get(requestOptions, (response) => {

    var responseData = '';

    response.setEncoding('utf8');

    response.on('data', (chunk) => {
      console.log('Chunk Received. Length: ', chunk.length);
    });

    response.on('end', () => {
      console.log('Response stream complete.');
    });

  });
}

getAndPrintHTMLChunks();
