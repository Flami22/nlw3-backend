const express = require('express');
const routes = require('./routes');
const cors = require('cors');
require('./database');

const app = express();
const corsOptions ={
   origin:'*',
   optionSuccessStatus:200,
   credentials: true
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(routes);
const PORT = process.env.PORT || 5000;

app.listen(PORT);