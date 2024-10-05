require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Usar handlebars como template engine
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));

// Creamos una ruta para mandar el archivo public/about/index.html
app.get('/about', (req, res) => { });

// Complete web page
/* app.get('/web', (req, res) => { });

app.get('/web/generic', (req, res) => {
  res.sendFile(__dirname + '/public/web/generic.html');
});

app.get('/web/elements', (req, res) => {
  res.sendFile(__dirname + '/public/web/elements.html');
}); */

// Usamos handlebars
app.get('/web', (req, res) => {
  res.render('home', {
    name: 'Cesar',
    title: 'Road Trip by Express'
  });
});

app.get('/web/generic', (req, res) => {
  res.render('generic', {
    name: 'Cesar',
    title: 'Express HBS'
  });
});

app.get('/web/elements', (req, res) => {
  res.render('elements', {
    name: 'Cesar',
    title: 'Express HBS'
  });
});

// Creamos la ruta para los errores 404
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port);
