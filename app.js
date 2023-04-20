const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(302, {
    'Location': 'http://20.74.117.191:3000',
  });
  res.end();
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Redirection app listening on port ${port}`));
