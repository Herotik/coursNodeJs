const http = require('node:http');

// Create a local server to receive data from
const server = http.createServer((req, res) => {

  switch (req.url) {
    case "/":
      result = '<h1>Hola Todos</h1><p>main page</p>'
      break;
    case "/home":
      result = '<h1>Ciao Todos</h1><p>home page</p>'
      break;
    case "/shop":
      result = '<h1>Ciao Todos</h1><p>shop page</p>'
      break;
    default:
      break;
  }

  //ecriture html
  res.write(result);
  //envoie de la requete
  res.end()


});

server.listen(8000);