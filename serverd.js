// server.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 2304;

app.set('view engine', 'ejs');

mongoose.connect('mongodb+srv://lriosbas:negro@empresasbiologicas.6onjklr.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conexión exitosa a MongoDB');
});

app.get('/', (req, res) => {
  res.redirect('/index.html'); 
});

let Datos = ['/CodigoGenetico.json']
app.get('/', (req, res) => {
  res.render('/index.html', $MisDATOS = Datos$  ); 
});

app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}` + '');
});
