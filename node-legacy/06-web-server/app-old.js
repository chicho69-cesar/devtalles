const http = require('node:http');

/* El objeto request son las solicitudes que se hacen al servidor. */
/* El objeto response son las respuestas que se devuelven al cliente. */
http.createServer((req, res) => {
  res.setHeader('Content-Disposition', 'attachment; filename=users.csv');
  res.writeHead(200, { 'Content-Type': 'application/csv' });

  res.write('id, name\n');
  res.write('1, Cesar\n');
  res.write('2, Liz\n');
  res.write('3, Yare\n');
  res.write('4, Vale\n');
  res.write('5, Joss\n');

  res.end();
})
  .listen(8080);

console.log('Listening on port 8080');
