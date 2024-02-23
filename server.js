const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

let dataList = [];

app.post('/submit', (req, res) => {
  const data = req.body;
  dataList.push(data);
  res.json({ message: 'Datos recibidos correctamente' });
});

app.get('/data', (req, res) => {
  res.json(dataList);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Servidor backend en ejecución en http://localhost:${PORT}`);
});
