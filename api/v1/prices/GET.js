const fs = require('fs');
const path = require('path');
 
module.exports = (request, response) => {
    const filePath = path.join(__dirname, 'GET.json');
    const stat = fs.statSync(filePath);
    response.header('Access-Control-Allow-Origin', '*');
    response.writeHead(200, {
        'Content-Type': 'application/json',
        'Content-Length': stat.size
    });
 
    const readStream = fs.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(response);
}