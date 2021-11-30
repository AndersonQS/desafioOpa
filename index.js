const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const path = require('path')
const port = 3000;



app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
})
app.get('/A', (req, res) => {
  res.sendFile(path.join(__dirname, '/A.html'));
})
app.get('/B', (req, res) => {
  res.sendFile(path.join(__dirname, '/B.html'));
})
app.post('/ordenaLista', (req, res) => {
  let listas = req.body.listas;

  listas.salaN.sort(function(a, b) {
    return a - b;
  });
  listas.salaS.sort();

  res.send({ listas });

});

app.get('/interlace', (req, res) => {
  console.log(req.query)
  let intervalos = req.query;
  var verficacao = false;
          [10,25] [20,30]
  if (intervalos.intervaloA[0] < intervalos.intervaloB[0]) {
    if (intervalos.intervaloA[1] >= intervalos.intervaloB[0] ) {
      verficacao = true;
    }
  }
  else if (intervalos.intervaloB[0] < intervalos.intervaloA[0]) {
    if (intervalos.intervaloB[1] >= intervalos.intervaloA[0] ) {
      verficacao = true;
    }
  }else{
    verficacao = true;
  }
  res.send(verficacao)
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})