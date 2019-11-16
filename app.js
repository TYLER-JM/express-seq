const express = require('express');
const bodyParser = require('body-parser');
const port = 8080;

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));

require('./server/routes')(app);
app.get('*', (req, res) => res.status(200).send({
  message: 'Route doesn\'t quite match.'
}));


app.listen(port, () => console.log(`Example app listening on port ${port}`))