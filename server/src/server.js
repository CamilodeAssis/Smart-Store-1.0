const express = require('express');
const routes = require('./routes');
var cors = require('cors')

require('./database')

const app = express();

app.use(cors());

app.use(express.json());


app.use(routes)

app.listen(3333, () => {
    console.log('Server is listening on http://localhost:3333');
});