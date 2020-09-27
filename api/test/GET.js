module.exports = function (request, response) {
    if (request.get('X-Auth-Key')) {
      response.status(403).send({});
    } else {
      response.sendFile('GET.json', {root: __dirname});
    }
  }