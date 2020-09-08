const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('./routes');


app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3000, () => {
    const data = new Date();
    console.log('=====================================');
    console.log('Servidor Online ' + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
    console.log('=====================================');
})

app.use(routes);